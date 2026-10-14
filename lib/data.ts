export type Exchange = { name: string; mono: string; bg: string; fg: string };
export type Quote = {
  initials: string;
  tag: string;
  quote: string;
  name: string;
  role: string;
  bg: string;
  fg: string;
};

// Placeholder monograms — swap in real exchange logos when you have permission to use them.
const exchangeList: Exchange[] = [
  { name: 'Binance', mono: 'B', bg: '#f0b90b', fg: '#1d1e24' },
  { name: 'Bybit', mono: 'By', bg: '#17181e', fg: '#f7a600' },
  { name: 'OKX', mono: 'OK', bg: '#000000', fg: '#ffffff' },
  { name: 'KuCoin', mono: 'K', bg: '#23af91', fg: '#ffffff' },
  { name: 'Bitget', mono: 'Bg', bg: '#00c4cc', fg: '#0b2a2c' },
  { name: 'Coinbase', mono: 'C', bg: '#0052ff', fg: '#ffffff' },
  { name: 'Kraken', mono: 'Kr', bg: '#5741d9', fg: '#ffffff' },
  { name: 'Gate.io', mono: 'G', bg: '#2354e6', fg: '#ffffff' },
  { name: 'MEXC', mono: 'M', bg: '#1a6bf0', fg: '#ffffff' },
  { name: 'Quidax', mono: 'Q', bg: '#0d0e20', fg: '#ffffff' },
  { name: 'Luno', mono: 'L', bg: '#0e2a7a', fg: '#ffffff' },
  { name: 'Busha', mono: 'Bu', bg: '#1d1e24', fg: '#ffffff' }
];

// Sample reviews — replace with real, consented customer quotes before launch.
const quotes: Quote[] = [
  { initials: 'C1', tag: 'BTC → Naira', quote: '"Cashed out BTC to my bank in minutes. No P2P back-and-forth, no waiting on a stranger."', name: '[Customer name]', role: '[Role, City]', bg: '#1d1e24', fg: '#ffffff' },
  { initials: 'C2', tag: 'USDT → Opay', quote: '"I convert USDT straight to my Opay wallet, and the rate is right there before I confirm."', name: '[Customer name]', role: '[Role, City]', bg: '#10b961', fg: '#0b2a19' },
  { initials: 'C3', tag: 'Multiple exchanges', quote: '"Seeing my Binance and Bybit balances in one place finally showed me what I actually have."', name: '[Customer name]', role: '[Role, City]', bg: '#ececf1', fg: '#1d1e24' },
  { initials: 'C4', tag: 'Business', quote: '"We pay a couple of suppliers from crypto now. It is quick, and the receipts are easy to share."', name: '[Customer name]', role: '[Role, City]', bg: '#1d1e24', fg: '#ffffff' },
  { initials: 'C5', tag: 'Rates', quote: '"I like that I see the exact Naira amount before I tap Convert. No surprises afterwards."', name: '[Customer name]', role: '[Role, City]', bg: '#ececf1', fg: '#1d1e24' },
  { initials: 'C6', tag: 'Support', quote: '"Had a question about a payout and support sorted it out the same day."', name: '[Customer name]', role: '[Role, City]', bg: '#10b961', fg: '#0b2a19' },
  { initials: 'C7', tag: 'Verified payouts', quote: '"The account-name check gives me peace of mind every time I send money."', name: '[Customer name]', role: '[Role, City]', bg: '#1d1e24', fg: '#ffffff' },
  { initials: 'C8', tag: 'Beneficiaries', quote: '"My regular payments are saved, so sending again takes one tap."', name: '[Customer name]', role: '[Role, City]', bg: '#ececf1', fg: '#1d1e24' }
];

const a = quotes.slice(0, 4);
const b = quotes.slice(4);

export const exchanges = exchangeList.concat(exchangeList);
export const rowA = a.concat(a, a, a);
export const rowB = b.concat(b, b, b);
