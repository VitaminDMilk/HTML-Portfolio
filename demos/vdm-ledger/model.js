/* Browser-only preview of the verified Ledger spending rules.
   Seed data is synthetic; this module never contacts the finance application. */
'use strict';
window.LEDGER_DEMO_MODEL = (() => {
  function contribution(tx) {
    if (tx.internalTransferGroupId || (tx.creditPurpose && tx.amount < 0)) return 0;
    if (tx.transactionType === 'refund') return -Math.abs(tx.amount);
    if (tx.transactionType !== 'purchase' && !(tx.transactionType === 'fee' && tx.eligibleForSpending)) return 0;
    return Math.abs(tx.amount);
  }
  const round = number => Math.round((number + Number.EPSILON) * 100) / 100;
  function summary(rows, month) {
    const scoped = rows.filter(tx => tx.date.startsWith(month));
    const posted = scoped.filter(tx => tx.status === 'posted');
    return {
      spending: round(posted.reduce((sum, tx) => sum + contribution(tx), 0)),
      income: round(posted.filter(tx => tx.transactionType === 'income' && tx.amount < 0 && !tx.internalTransferGroupId).reduce((sum, tx) => sum + Math.abs(tx.amount), 0)),
      pending: round(scoped.filter(tx => tx.status === 'pending').reduce((sum, tx) => sum + contribution(tx), 0)),
      pendingCount: scoped.filter(tx => tx.status === 'pending').length,
      payments: round(posted.filter(tx => tx.transactionType === 'payment').reduce((sum, tx) => sum + Math.abs(tx.amount), 0))
    };
  }
  function breakdown(rows, month, key) {
    const totals = new Map();
    rows.filter(tx => tx.status === 'posted' && tx.date.startsWith(month)).forEach(tx => {
      const value = contribution(tx);
      if (value) totals.set(tx[key], (totals.get(tx[key]) || 0) + value);
    });
    return [...totals].map(([name, value]) => ({ name, value: round(value) })).sort((a, b) => b.value - a.value);
  }
  function filter(rows, month, filters) {
    return rows.filter(tx => tx.date.startsWith(month)
      && (!filters.query || tx.merchantClean.toLowerCase().includes(filters.query.toLowerCase().trim()))
      && (!filters.account || tx.accountId === filters.account)
      && (!filters.category || tx.category === filters.category)
      && (!filters.status || tx.status === filters.status)
      && (!filters.type || tx.transactionType === filters.type)
    ).sort((a, b) => b.date.localeCompare(a.date));
  }
  function csvCell(value) {
    const text = String(value ?? '');
    const guarded = /^[=+\-@\t\r\n]/.test(text.trimStart()) ? `'${text}` : text;
    return `"${guarded.replace(/"/g, '""')}"`;
  }
  function csv(rows, accounts) {
    const header = ['Date', 'Merchant', 'Account', 'Category', 'Movement', 'Status', 'Amount (USD)', 'Note'];
    const records = rows.map(tx => [csvCell(tx.date), csvCell(tx.merchantClean), csvCell(accounts.find(a => a.id === tx.accountId)?.name), csvCell(tx.category), csvCell(tx.transactionType), csvCell(tx.status), Number(tx.amount).toFixed(2), csvCell(tx.note)]);
    return '\uFEFF' + [header.map(csvCell).join(','), ...records.map(record => record.join(','))].join('\r\n');
  }
  return { contribution, summary, breakdown, filter, csv };
})();
