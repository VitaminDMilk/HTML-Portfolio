/* Synthetic fixtures adapted from VDM Ledger src/lib/mock-data.ts.
   Account names and card suffixes are explicitly replaced with demo labels.
   No production data, credentials, or bank requests. */
window.LEDGER_DEMO_SEED = {};

window.LEDGER_DEMO_SEED.accounts = [
  { id: 'cap1', name: 'Capital One Discover', institution: 'Capital One', kind: 'credit_card', last4: '4482' },
  { id: 'wf1', name: 'Wells Fargo Checking', institution: 'Wells Fargo', kind: 'checking', last4: '1189' },
  { id: 'cmb1', name: '招商银行附属卡', institution: '招商银行', kind: 'manual', last4: '6608' },
];

window.LEDGER_DEMO_SEED.transactions = [
  { id:'t1', accountId:'cap1', date:'2026-08-29', merchantRaw:'FOOD LION #0425 BLACKSBURG VA', merchantClean:'Food Lion', amount:86.42, transactionType:'purchase', category:'Grocery', status:'posted' },
  { id:'t2', accountId:'cap1', date:'2026-08-28', merchantRaw:'OPENAI *CHATGPT SUBSCR', merchantClean:'ChatGPT', amount:20, transactionType:'purchase', category:'Subscription', status:'posted' },
  { id:'t3', accountId:'cap1', date:'2026-08-27', merchantRaw:'UBER *TRIP', merchantClean:'Uber', amount:18.73, transactionType:'purchase', category:'Transportation', status:'posted' },
  { id:'t4', accountId:'cap1', date:'2026-08-26', merchantRaw:'UBER EATS', merchantClean:'Uber Eats', amount:31.18, transactionType:'purchase', category:'Restaurants', status:'pending' },
  { id:'t5', accountId:'cap1', date:'2026-08-24', merchantRaw:'CRIMPERS CLIMBING', merchantClean:'Crimpers Climbing', amount:24, transactionType:'purchase', category:'Entertainment', status:'posted' },
  { id:'t6', accountId:'wf1', date:'2026-08-22', merchantRaw:'CAPITAL ONE ONLINE PMT', merchantClean:'Capital One Payment', amount:500, transactionType:'transfer', category:'Transfer', status:'posted', note:'Credit card payment', internalTransferGroupId:'internal:t6:t7' },
  { id:'t7', accountId:'cap1', date:'2026-08-22', merchantRaw:'PAYMENT THANK YOU', merchantClean:'Wells Fargo Payment', amount:-500, transactionType:'payment', category:'Payment', status:'posted', note:'Matched internal payment', internalTransferGroupId:'internal:t6:t7' },
  { id:'t8', accountId:'wf1', date:'2026-08-20', merchantRaw:'ZELLE PAYMENT TO ALEX', merchantClean:'Zelle', amount:75, transactionType:'transfer', category:'Transfer', status:'posted' },
  { id:'t9', accountId:'cap1', date:'2026-08-18', merchantRaw:'VIRGINIA ABC STORE 123', merchantClean:'Virginia ABC', amount:42.67, transactionType:'purchase', category:'Merchandise', status:'posted' },
  { id:'t10', accountId:'cap1', date:'2026-08-15', merchantRaw:'7-ELEVEN 12345', merchantClean:'7-Eleven', amount:12.11, transactionType:'purchase', category:'Convenience', status:'posted' },
  { id:'t11', accountId:'wf1', date:'2026-08-12', merchantRaw:'PAYROLL ACME INC', merchantClean:'Payroll', amount:-2650, transactionType:'income', category:'Income', status:'posted' },
  { id:'t12', accountId:'cap1', date:'2026-08-09', merchantRaw:'EBAY COM', merchantClean:'eBay', amount:64.95, transactionType:'purchase', category:'Merchandise', status:'posted' },
  { id:'t13', accountId:'cap1', date:'2026-08-07', merchantRaw:'KROGER #401', merchantClean:'Kroger', amount:54.26, transactionType:'purchase', category:'Grocery', status:'posted' },
  { id:'t14', accountId:'cap1', date:'2026-08-04', merchantRaw:'AMAZON MKTPLACE PMTS', merchantClean:'Amazon', amount:38.49, transactionType:'purchase', category:'Merchandise', status:'posted' },
  { id:'t15', accountId:'cmb1', date:'2026-08-03', merchantRaw:'BOOKSTORE SHENZHEN', merchantClean:'Bookstore', amount:22.80, transactionType:'purchase', category:'Merchandise', status:'posted' },
  { id:'t16', accountId:'cap1', date:'2026-07-29', merchantRaw:'FOOD LION #0425', merchantClean:'Food Lion', amount:72.18, transactionType:'purchase', category:'Grocery', status:'posted' },
  { id:'t17', accountId:'cap1', date:'2026-07-18', merchantRaw:'RESTAURANT 88', merchantClean:'Restaurant 88', amount:46.90, transactionType:'purchase', category:'Restaurants', status:'posted' },
  { id:'t18', accountId:'cap1', date:'2026-06-23', merchantRaw:'REFUND AMAZON', merchantClean:'Amazon', amount:-25.00, transactionType:'refund', category:'Merchandise', status:'posted' },
  { id:'t19', accountId:'cap1', date:'2026-06-18', merchantRaw:'ANNUAL CARD FEE', merchantClean:'Card Fee', amount:39.00, transactionType:'fee', category:'Fees', status:'posted', eligibleForSpending:true },
];

window.LEDGER_DEMO_SEED.merchantRules = [
  { id:'r1', merchant:'Food Lion', category:'Grocery', matchType:'exact' },
  { id:'r2', merchant:'Kroger', category:'Grocery', matchType:'exact' },
  { id:'r3', merchant:'Supermarket', category:'Grocery', matchType:'contains' },
  { id:'r4', merchant:'7-Eleven', category:'Convenience', matchType:'exact' },
  { id:'r5', merchant:'Virginia ABC', category:'Merchandise', matchType:'exact' },
  { id:'r6', merchant:'eBay', category:'Merchandise', matchType:'exact' },
  { id:'r7', merchant:'bookstore', category:'Merchandise', matchType:'contains' },
  { id:'r8', merchant:'Crimpers Climbing', category:'Entertainment', matchType:'exact' },
  { id:'r9', merchant:'Uber Eats', category:'Restaurants', matchType:'exact' },
  { id:'r10', merchant:'Uber', category:'Transportation', matchType:'exact' },
  { id:'r11', merchant:'ChatGPT', category:'Subscription', matchType:'exact' },
];

window.LEDGER_DEMO_SEED.accounts = window.LEDGER_DEMO_SEED.accounts.map((account,index) => ({ ...account, name: ["Demo credit card", "Demo checking", "Demo manual card"][index], institution: "Sample Bank", last4: ["0001", "0002", "0003"][index] }));
