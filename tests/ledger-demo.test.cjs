const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../demos/vdm-ledger');
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const file of ['data.js', 'model.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox);
const { transactions, accounts } = sandbox.window.LEDGER_DEMO_SEED;
const model = sandbox.window.LEDGER_DEMO_MODEL;

test('August totals separate posted spending, income, pending estimates, and repayments', () => {
  const result = model.summary(transactions, '2026-08');
  assert.equal(result.spending, 384.43);
  assert.equal(result.income, 2650);
  assert.equal(result.pending, 31.18);
  assert.equal(result.pendingCount, 1);
  assert.equal(result.payments, 500);
});

test('June includes the eligible fee and subtracts the refund in its own month', () => {
  assert.equal(model.summary(transactions, '2026-06').spending, 14);
  assert.equal(model.summary(transactions, '2026-07').spending, 119.08);
  assert.equal(model.summary(transactions, '2026-09').spending, 0);
});

test('linked checking withdrawal and card receipt never double count spending', () => {
  const linked = transactions.filter(tx => tx.internalTransferGroupId);
  assert.equal(linked.length, 2);
  assert.equal(model.summary(linked, '2026-08').spending, 0);
  assert.equal(model.summary(linked, '2026-08').income, 0);
  assert.equal(model.summary(linked, '2026-08').payments, 500);
});

test('pending purchases do not leak into posted totals or category breakdown', () => {
  const pending = transactions.filter(tx => tx.status === 'pending');
  assert.equal(model.summary(pending, '2026-08').spending, 0);
  assert.equal(model.summary(pending, '2026-08').pending, 31.18);
  assert.equal(model.breakdown(pending, '2026-08', 'category').length, 0);
});

test('category and account breakdowns reconcile to posted spending', () => {
  for (const key of ['category', 'accountId']) {
    const breakdown = model.breakdown(transactions, '2026-08', key);
    const total = Math.round(breakdown.reduce((sum, row) => sum + row.value, 0) * 100) / 100;
    assert.equal(total, 384.43);
  }
  assert.equal(model.breakdown(transactions, '2026-08', 'category').find(row => row.name === 'Grocery').value, 140.68);
});

test('changing a category reallocates the chart without changing total spending', () => {
  const edited = structuredClone(transactions);
  edited.find(tx => tx.id === 't1').category = 'Merchandise';
  const breakdown = model.breakdown(edited, '2026-08', 'category');
  assert.equal(breakdown.find(row => row.name === 'Grocery').value, 54.26);
  assert.equal(breakdown.find(row => row.name === 'Merchandise').value, 255.33);
  assert.equal(model.summary(edited, '2026-08').spending, 384.43);
});

test('merchant, account, category, status, and movement filters combine', () => {
  const selected = model.filter(transactions, '2026-08', { query: ' UBER ', account: 'cap1', category: 'Restaurants', status: 'pending', type: 'purchase' });
  assert.equal(selected.length, 1);
  assert.equal(selected[0].id, 't4');
  assert.equal(model.filter(transactions, '2026-08', { query: 'not-a-merchant' }).length, 0);
  assert.equal(model.filter(transactions, '2026-07', { query: 'Food Lion' })[0].id, 't16');
});

test('CSV quotes notes correctly and keeps amounts numeric', () => {
  const csv = model.csv([{ ...transactions[0], note: 'Lunch, "shared"\nwith a friend' }], accounts);
  assert.ok(csv.startsWith('\uFEFF'));
  assert.ok(csv.includes('"Lunch, ""shared""\nwith a friend"'));
  assert.ok(csv.includes(',86.42,'));
});

test('CSV user text cannot become a spreadsheet formula', () => {
  const csv = model.csv([{ ...transactions[0], note: '=1+1' }], accounts);
  assert.ok(csv.includes('"\'=1+1"'));
});
