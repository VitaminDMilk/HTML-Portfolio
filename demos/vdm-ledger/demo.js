'use strict';
const seed = window.LEDGER_DEMO_SEED;
const model = window.LEDGER_DEMO_MODEL;
let rows = structuredClone(seed.transactions);
let language = 'en';
let view = 'dashboard';
let month = '2026-08';
let editingId = null;
let editorTrigger = null;
let toastTimer;
const filters = { query: '', account: '', category: '', status: '', type: '' };
const colors = ['#059669', '#54bdaa', '#69a7bd', '#a7bdb1', '#d8b887', '#a299c6', '#8fafa9'];
const categoryNames = { Grocery: '食品杂货', Subscription: '订阅', Transportation: '交通', Restaurants: '餐饮', Entertainment: '娱乐', Transfer: '转账', Payment: '还款', Merchandise: '购物', Convenience: '便利店', Income: '收入', Fees: '手续费' };
const typeNames = { en: { purchase: 'Purchase', income: 'Income', transfer: 'Transfer', payment: 'Card payment', refund: 'Refund', fee: 'Fee' }, zh: { purchase: '消费', income: '收入', transfer: '转账', payment: '信用卡还款', refund: '退款', fee: '手续费' } };
const copy = {
  en: {
    skip: 'Skip to workspace', brandSub: 'Interactive demo', dashboard: 'Dashboard', transactions: 'Transactions', payments: 'Payments', monthly: 'Monthly report', sidebarNote: 'Sample data. No bank connection.', back: '← Back to portfolio', demoPill: 'DEMO / SYNTHETIC DATA', demoNote: 'Explore a working preview with sample transactions. Edits stay in this tab and reset when you reload.', period: 'Sample period', export: 'Download CSV', reset: 'Reset demo', scope: 'Preview of dashboard, transaction editing, payments, and monthly reports. Bank syncing and authentication belong to the full application.', fullApp: 'Full application (owner sign-in) ↗', editSample: 'EDIT SAMPLE TRANSACTION', category: 'Category', note: 'Note', editNote: 'Changes affect this demo only. Reload or reset to restore the original sample.', cancel: 'Cancel', save: 'Save changes', spending: 'Posted spending', income: 'Posted income', pending: 'Pending transactions', accounts: 'Demo accounts', spendingHint: 'Payments and transfers excluded', incomeHint: 'Income only; transfers excluded', pendingHint: 'estimate; excluded from posted totals', accountsHint: 'Two bank-account samples · one manual', trend: 'Monthly trend', trendNote: 'Net posted spending · USD · June–August 2026', categoryShare: 'Category share', positiveSpending: 'Purchases + fees', refundNote: 'Refunds are listed below and reduce the net total.', noSpending: 'No positive spending for this month.', accountSpending: 'Spending by account', recent: 'Recent transactions', viewAll: 'View all →', noTransactions: 'No transactions match this selection.', merchant: 'Merchant', search: 'Search merchant…', account: 'Account', allAccounts: 'All accounts', allCategories: 'All categories', status: 'Status', allStatuses: 'All statuses', posted: 'Posted', pendingStatus: 'Pending', movement: 'Money movement', allMovements: 'All movements', clear: 'Clear filters', results: 'transactions shown', date: 'Date', amount: 'Amount (USD)', edit: 'Edit', cardPayments: 'Card payments', excluded: 'Excluded from spending', matched: 'Matched internal movement', matchedHint: 'Linked repayment counted once', paymentTitle: 'Credit card payments', paymentNote: 'The checking withdrawal and card receipt are linked. They do not add to spending.', breakdown: 'Category breakdown', reportNote: 'USD only. Posted purchases and eligible fees count as spending; refunds reduce it. Pending transactions, payments, and transfers remain separate.', netRefund: 'Net refund', saved: 'Sample transaction updated.', restored: 'Original sample data restored.', downloaded: 'CSV downloaded for the selected sample month.', purchaseExplain: 'This posted purchase counts toward spending.', pendingExplain: 'Pending estimate only. Not included in posted spending.', linkedExplain: 'Linked internal payment. Excluded from spending to avoid double counting.', incomeExplain: 'Posted income. Excluded from spending.', transferExplain: 'Transfer. Excluded from both spending and income.', refundExplain: 'Refund. Reduces posted spending in the refund month.', feeExplain: 'Eligible fee. Included in posted spending.', closeEditor: 'Close editor', dark: 'Switch to dark theme', light: 'Switch to light theme', demoNavigation: 'Demo navigation', sampleMonth: 'Sample month', demoCard: 'Demo credit card', demoChecking: 'Demo checking', demoManual: 'Demo manual card', editHint: 'Select Edit to change a sample category or note.', latestSix: 'Latest six in the selected sample month', reportExport: 'CSV export includes all transactions in the selected month, independent of filters.'
  },
  zh: {
    skip: '跳转到工作区', brandSub: '交互演示', dashboard: '仪表盘', transactions: '交易记录', payments: '付款与还款', monthly: '月度报表', sidebarNote: '模拟数据，无银行连接。', back: '← 返回作品集', demoPill: '交互 DEMO / 模拟数据', demoNote: '无需登录即可体验。编辑仅在当前标签页中生效，刷新后恢复原始模拟数据。', period: '模拟账期', export: '下载 CSV 报表', reset: '重置演示', scope: '演示仪表盘、交易编辑、还款及月度报表。银行同步与身份认证属于完整应用。', fullApp: '完整应用（仅限所有者登录）↗', editSample: '编辑模拟交易', category: '分类', note: '备注', editNote: '更改仅影响此 demo，刷新或重置即可恢复原始模拟数据。', cancel: '取消', save: '保存更改', spending: '已入账消费', income: '已入账收入', pending: '待入账交易', accounts: '模拟账户', spendingHint: '不计入还款和转账', incomeHint: '仅收入，不计入转账', pendingHint: '预估金额，未计入已入账消费', accountsHint: '两个银行账户样本 · 一个手动账户', trend: '月度趋势', trendNote: '净已入账消费 · 美元 · 2026 年 6–8 月', categoryShare: '消费分类占比', positiveSpending: '消费与手续费', refundNote: '退款单独列在下方，并从净消费中扣除。', noSpending: '本月没有正向消费记录。', accountSpending: '各账户消费', recent: '最近交易', viewAll: '查看全部 →', noTransactions: '没有符合条件的交易。', merchant: '商户', search: '搜索商户…', account: '账户', allAccounts: '全部账户', allCategories: '全部分类', status: '状态', allStatuses: '全部状态', posted: '已入账', pendingStatus: '待入账', movement: '资金流动类型', allMovements: '全部类型', clear: '清除筛选', results: '条交易', date: '日期', amount: '金额（美元）', edit: '编辑', cardPayments: '信用卡还款', excluded: '不计入消费', matched: '匹配的内部资金流动', matchedHint: '关联还款仅统计一次', paymentTitle: '信用卡还款记录', paymentNote: '活期账户的支出与信用卡的到账已关联，两者均不会增加消费总额。', breakdown: '分类明细', reportNote: '仅使用美元。已入账消费与符合条件的手续费计入消费，退款减少消费。待入账交易、还款和转账分别统计。', netRefund: '净退款', saved: '模拟交易已更新。', restored: '已恢复原始模拟数据。', downloaded: '已下载当前模拟账期的 CSV 报表。', purchaseExplain: '该笔已入账消费计入消费总额。', pendingExplain: '仅为待入账预估金额，不计入已入账消费。', linkedExplain: '已关联的内部还款，不计入消费，避免重复统计。', incomeExplain: '已入账收入，不计入消费。', transferExplain: '转账，不计入消费或收入。', refundExplain: '退款，减少退款发生月份的已入账消费。', feeExplain: '符合条件的手续费，计入已入账消费。', closeEditor: '关闭编辑窗口', dark: '切换到夜间主题', light: '切换到日间主题', demoNavigation: '演示导航', sampleMonth: '模拟账期', demoCard: '模拟信用卡', demoChecking: '模拟活期账户', demoManual: '模拟手动账户', editHint: '点击“编辑”修改模拟交易的分类或备注。', latestSix: '所选账期最近的六条交易', reportExport: 'CSV 包含所选账期的全部交易，不受筛选条件影响。'
  }
};
const text = key => copy[language][key];
const html = value => String(value ?? '').replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const money = value => new Intl.NumberFormat(language === 'zh' ? 'zh-CN' : 'en-US', { style: 'currency', currency: 'USD' }).format(value);
const monthLabel = key => new Intl.DateTimeFormat(language === 'zh' ? 'zh-CN' : 'en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(`${key}-01T12:00:00Z`));
const categoryLabel = value => language === 'zh' ? categoryNames[value] || value : value;
const accountLabel = id => text(({ cap1: 'demoCard', wf1: 'demoChecking', cmb1: 'demoManual' })[id]);
const categories = [...new Set(seed.transactions.map(tx => tx.category))].sort();
function options(values, label, selected = '') {
  return `<option value="">${html(label)}</option>` + values.map(([value, name]) => `<option value="${html(value)}"${value === selected ? ' selected' : ''}>${html(name)}</option>`).join('');
}
function stat(label, value, hint) { return `<article class="stat"><p>${html(label)}</p><strong>${html(value)}</strong><small>${html(hint)}</small></article>`; }
function stats() {
  const totals = model.summary(rows, month);
  return `<div class="stats">${stat(text('spending'), money(totals.spending), text('spendingHint'))}${stat(text('income'), money(totals.income), text('incomeHint'))}${stat(text('pending'), String(totals.pendingCount), `${money(totals.pending)} ${text('pendingHint')}`)}${stat(text('accounts'), String(seed.accounts.length), text('accountsHint'))}</div>`;
}
function trend() {
  const values = ['2026-06', '2026-07', '2026-08'].map(key => ({ key, value: model.summary(rows, key).spending }));
  const max = Math.max(1, ...values.map(item => Math.abs(item.value)));
  return `<div class="trend" role="img" aria-label="${html(text('trend') + ': ' + values.map(item => `${monthLabel(item.key)} ${money(item.value)}`).join('; '))}">${values.map(item => `<div class="trend-column${item.key === month ? ' selected' : ''}${item.value < 0 ? ' negative' : ''}"><span class="trend-value">${html(money(item.value))}</span><div class="trend-bar" style="height:${Math.max(2, Math.abs(item.value) / max * 145)}px"></div><span class="trend-label">${html(monthLabel(item.key))}</span></div>`).join('')}</div><p class="chart-caption">${html(text('trendNote'))}</p>`;
}
function categoryChart() {
  const entries = model.breakdown(rows, month, 'category');
  const positive = entries.filter(item => item.value > 0);
  const total = positive.reduce((sum, item) => sum + item.value, 0);
  let start = 0;
  const segments = positive.map((item, index) => { const end = start + item.value / total * 100; const part = `${colors[index % colors.length]} ${start}% ${end}%`; start = end; return part; });
  const visual = total ? `<div class="category-viz"><div class="donut" aria-hidden="true" style="background:conic-gradient(${segments.join(',')})"><div class="donut-label">${html(text('positiveSpending'))}<strong>${html(money(total))}</strong></div></div><ul class="legend">${positive.map((item, index) => `<li><span class="legend-dot" style="background:${colors[index % colors.length]}" aria-hidden="true"></span>${html(categoryLabel(item.name))}</li>`).join('')}</ul></div>` : `<p class="empty">${html(text('noSpending'))}</p>`;
  return visual + `<div class="breakdown">${entries.map(item => `<div class="breakdown-row"><span>${html(categoryLabel(item.name))}</span><strong>${html(money(item.value))}</strong></div>`).join('')}</div>${entries.some(item => item.value < 0) ? `<p class="chart-caption">${html(text('refundNote'))}</p>` : ''}`;
}
function recent(items) {
  return `<div class="recent-list">${items.length ? items.map(tx => `<div class="recent-row"><div><strong>${html(tx.merchantClean)}</strong><small>${html(tx.date)} · ${html(categoryLabel(tx.category))}</small></div><div><strong class="amount${tx.amount < 0 ? ' incoming' : ''}">${html(money(tx.amount))}</strong>${tx.status === 'pending' ? `<small><span class="badge pending">${html(text('pendingStatus'))}</span></small>` : ''}</div></div>`).join('') : `<p class="empty">${html(text('noTransactions'))}</p>`}</div>`;
}
function dashboard() {
  const byAccount = model.breakdown(rows, month, 'accountId');
  const accountTotal = byAccount.reduce((sum, item) => sum + Math.max(0, item.value), 0);
  const latest = model.filter(rows, month, {}).slice(0, 6);
  return stats() + `<div class="chart-grid"><section class="card"><h2>${html(text('trend'))}</h2>${trend()}</section><section class="card"><div class="card-title"><h2>${html(text('categoryShare'))}</h2><a href="#monthly">${html(text('viewAll'))}</a></div>${categoryChart()}</section></div><div class="lower-grid"><section class="card"><h2 class="card-title">${html(text('accountSpending'))}</h2>${byAccount.map(item => `<div class="account-row"><div class="account-top"><span>${html(accountLabel(item.name))}</span><strong>${html(money(item.value))}</strong></div><div class="meter" aria-hidden="true"><span style="width:${accountTotal ? Math.max(0, item.value) / accountTotal * 100 : 0}%"></span></div></div>`).join('') || `<p class="empty">${html(text('noTransactions'))}</p>`}</section><section class="card"><div class="card-title"><h2>${html(text('recent'))}</h2><a href="#transactions">${html(text('viewAll'))}</a></div>${recent(latest)}<p class="chart-caption">${html(text('latestSix'))}</p></section></div>`;
}
function transactionRows() {
  const selected = model.filter(rows, month, filters);
  const target = document.getElementById('transaction-rows');
  target.innerHTML = selected.map(tx => `<tr><td><strong>${html(tx.merchantClean)}</strong><small>${html(accountLabel(tx.accountId))} · ${html(typeNames[language][tx.transactionType])}</small>${tx.note ? `<small>${html(tx.note)}</small>` : ''}</td><td>${html(tx.date)}</td><td>${html(categoryLabel(tx.category))}</td><td><span class="badge${tx.status === 'pending' ? ' pending' : ''}">${html(text(tx.status === 'pending' ? 'pendingStatus' : 'posted'))}</span></td><td class="amount${tx.amount < 0 ? ' incoming' : ''}">${html(money(tx.amount))}</td><td><button type="button" data-edit="${html(tx.id)}" aria-label="${html(`${text('edit')} ${tx.merchantClean}, ${tx.date}`)}">${html(text('edit'))}</button></td></tr>`).join('');
  document.getElementById('result-count').textContent = `${selected.length} ${text('results')}`;
  document.getElementById('empty-transactions').hidden = selected.length > 0;
}
function transactions() {
  return `<section class="card filter-card"><div class="filters"><label><span>${html(text('merchant'))}</span><input id="search" data-filter="query" type="search" maxlength="160" placeholder="${html(text('search'))}" value="${html(filters.query)}"></label><label><span>${html(text('account'))}</span><select data-filter="account">${options(seed.accounts.map(item => [item.id, accountLabel(item.id)]), text('allAccounts'), filters.account)}</select></label><label><span>${html(text('category'))}</span><select data-filter="category">${options(categories.map(item => [item, categoryLabel(item)]), text('allCategories'), filters.category)}</select></label><label><span>${html(text('status'))}</span><select data-filter="status">${options([['posted', text('posted')], ['pending', text('pendingStatus')]], text('allStatuses'), filters.status)}</select></label><label><span>${html(text('movement'))}</span><select data-filter="type">${options(Object.entries(typeNames[language]), text('allMovements'), filters.type)}</select></label></div><div class="filter-footer"><span id="result-count" role="status"></span><button type="button" id="clear-filters">${html(text('clear'))}</button></div></section><p class="report-note">${html(text('editHint'))}</p><section class="card table-card"><table class="transactions-table"><thead><tr><th scope="col">${html(text('merchant'))} / ${html(text('account'))}</th><th scope="col">${html(text('date'))}</th><th scope="col">${html(text('category'))}</th><th scope="col">${html(text('status'))}</th><th scope="col">${html(text('amount'))}</th><th scope="col">${html(text('edit'))}</th></tr></thead><tbody id="transaction-rows"></tbody></table><p id="empty-transactions" class="empty" style="padding:24px" hidden>${html(text('noTransactions'))}</p></section>`;
}
function payments() {
  const items = rows.filter(tx => tx.date.startsWith(month) && (tx.transactionType === 'payment' || (tx.transactionType === 'transfer' && tx.note?.toLowerCase().includes('credit card'))));
  const groups = new Map();
  items.forEach(tx => { if (tx.internalTransferGroupId) groups.set(tx.internalTransferGroupId, Math.abs(tx.amount)); });
  return `<div class="stats payments-stats">${stat(text('cardPayments'), money(model.summary(rows, month).payments), text('excluded'))}${stat(text('matched'), money([...groups.values()].reduce((sum, value) => sum + value, 0)), text('matchedHint'))}</div><section class="card"><h2>${html(text('paymentTitle'))}</h2><p class="report-note">${html(text('paymentNote'))}</p>${recent(items)}</section>`;
}
function monthly() {
  const totals = model.summary(rows, month);
  const entries = model.breakdown(rows, month, 'category');
  const positiveTotal = entries.reduce((sum, item) => sum + Math.max(0, item.value), 0);
  return `<div class="stats" style="grid-template-columns:repeat(2,minmax(0,1fr))">${stat(text('spending'), money(totals.spending), text('spendingHint'))}${stat(text('income'), money(totals.income), text('incomeHint'))}</div><p class="report-note">${html(text('reportNote'))}</p><div class="report-grid"><section class="card"><h2>${html(text('trend'))}</h2>${trend()}</section><section class="card"><h2>${html(text('breakdown'))}</h2>${entries.map(item => `<div class="report-row"><div class="breakdown-row"><span>${html(categoryLabel(item.name))} · ${item.value < 0 ? html(text('netRefund')) : `${(positiveTotal ? item.value / positiveTotal * 100 : 0).toFixed(1)}%`}</span><strong>${html(money(item.value))}</strong></div><div class="meter" aria-hidden="true"><span style="width:${positiveTotal ? Math.max(0, item.value) / positiveTotal * 100 : 0}%"></span></div></div>`).join('') || `<p class="empty">${html(text('noTransactions'))}</p>`}</section></div><p class="report-note">${html(text('reportExport'))}</p>`;
}
function render() {
  document.getElementById('page-title').textContent = text(view);
  document.title = `VDM Ledger | ${text(view)} · ${text('brandSub')}`;
  document.querySelectorAll('[data-view]').forEach(link => { if (link.dataset.view === view) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current'); });
  document.getElementById('workspace').innerHTML = ({ dashboard, transactions, payments, monthly })[view]();
  if (view === 'transactions') transactionRows();
}
function setLanguage(next) {
  language = next;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-text]').forEach(element => { element.textContent = text(element.dataset.text); });
  document.getElementById('language').textContent = language === 'en' ? '中文' : 'EN';
  document.getElementById('language').setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : '切换到英文');
  document.getElementById('demo-nav').setAttribute('aria-label', text('demoNavigation'));
  document.getElementById('month').setAttribute('aria-label', text('sampleMonth'));
  document.querySelectorAll('#month option').forEach(option => { option.textContent = monthLabel(option.value); });
  document.getElementById('close-editor').setAttribute('aria-label', text('closeEditor'));
  updateThemeControl();
  render();
}
function updateThemeControl() {
  const dark = document.body.classList.contains('dark');
  document.getElementById('theme').textContent = dark ? '☀' : '☾';
  document.getElementById('theme').setAttribute('aria-label', text(dark ? 'light' : 'dark'));
}
function notify(message) {
  const status = document.getElementById('status');
  clearTimeout(toastTimer); status.textContent = message; status.hidden = false;
  toastTimer = setTimeout(() => { status.hidden = true; }, 4500);
}
function explanation(tx) {
  if (tx.internalTransferGroupId) return text('linkedExplain');
  if (tx.status === 'pending') return text('pendingExplain');
  return text(({ purchase: 'purchaseExplain', income: 'incomeExplain', transfer: 'transferExplain', payment: 'linkedExplain', refund: 'refundExplain', fee: 'feeExplain' })[tx.transactionType]);
}
function openEditor(id, trigger) {
  const tx = rows.find(item => item.id === id);
  if (!tx) return;
  editingId = id; editorTrigger = trigger;
  document.getElementById('edit-title').textContent = tx.merchantClean;
  document.getElementById('edit-meta').textContent = `${tx.date} · ${accountLabel(tx.accountId)} · ${money(tx.amount)}`;
  document.getElementById('edit-explanation').textContent = explanation(tx);
  document.getElementById('edit-category').innerHTML = categories.map(category => `<option value="${html(category)}"${category === tx.category ? ' selected' : ''}>${html(categoryLabel(category))}</option>`).join('');
  document.getElementById('edit-note').value = tx.note || '';
  document.getElementById('edit-dialog').showModal();
}
function closeEditor() { document.getElementById('edit-dialog').close(); }
function route() {
  const requested = location.hash.slice(1);
  view = ['dashboard', 'transactions', 'payments', 'monthly'].includes(requested) ? requested : 'dashboard';
  render();
}
document.getElementById('workspace').addEventListener('input', event => {
  if (event.target.matches('input[data-filter]')) { filters[event.target.dataset.filter] = event.target.value; transactionRows(); }
});
document.getElementById('workspace').addEventListener('change', event => {
  if (event.target.matches('select[data-filter]')) { filters[event.target.dataset.filter] = event.target.value; transactionRows(); }
});
document.getElementById('workspace').addEventListener('click', event => {
  const trigger = event.target.closest('[data-edit]');
  if (trigger) openEditor(trigger.dataset.edit, trigger);
  if (event.target.closest('#clear-filters')) { Object.keys(filters).forEach(key => { filters[key] = ''; }); render(); }
});
document.getElementById('month').addEventListener('change', event => { month = event.target.value; render(); });
document.getElementById('language').addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
document.getElementById('theme').addEventListener('click', () => { document.body.classList.toggle('dark'); updateThemeControl(); });
document.getElementById('reset').addEventListener('click', () => { rows = structuredClone(seed.transactions); month = '2026-08'; document.getElementById('month').value = month; Object.keys(filters).forEach(key => { filters[key] = ''; }); render(); notify(text('restored')); });
document.getElementById('export').addEventListener('click', () => {
  const data = model.csv(model.filter(rows, month, {}), seed.accounts);
  const url = URL.createObjectURL(new Blob([data], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = `vdm-ledger-demo-${month}.csv`; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000); notify(text('downloaded'));
});
document.getElementById('close-editor').addEventListener('click', closeEditor);
document.getElementById('cancel-editor').addEventListener('click', closeEditor);
document.getElementById('edit-dialog').addEventListener('close', () => {
  const updatedTrigger = document.querySelector(`[data-edit="${editingId}"]`);
  (updatedTrigger || (editorTrigger?.isConnected ? editorTrigger : null) || document.getElementById('search') || document.getElementById('workspace')).focus();
  editingId = null; editorTrigger = null;
});
document.getElementById('edit-form').addEventListener('submit', event => {
  event.preventDefault();
  const tx = rows.find(item => item.id === editingId);
  if (!tx) return;
  tx.category = document.getElementById('edit-category').value;
  tx.note = document.getElementById('edit-note').value;
  render(); closeEditor(); notify(text('saved'));
});
window.addEventListener('hashchange', route);
try { language = localStorage.getItem('wd-portfolio-language') === 'zh' ? 'zh' : 'en'; } catch { /* Demo also works without preference storage. */ }
view = ['dashboard', 'transactions', 'payments', 'monthly'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'dashboard';
setLanguage(language);
