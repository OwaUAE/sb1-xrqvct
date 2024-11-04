export interface User {
  id: string;
  email: string;
  address: string;
  role: 'buyer' | 'supplier';
  balance: number;
  kycStatus: 'pending' | 'verified' | 'rejected';
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface Supplier {
  id: string;
  name: string;
  rating: number;
  location: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  usdtPrice: number;
  currency: 'USD' | 'USDT';
  image: string;
  supplier: Supplier;
  category: string;
  subcategory: string;
  stock: number;
  moq: number;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShipmentGroup {
  id: string;
  destination: string;
  departureDate: string;
  availableSpace: number;
  pricePerKg: number;
  usdtPricePerKg: number;
  participants: number;
  status: 'forming' | 'confirmed' | 'in-transit';
  route: string[];
  estimatedDuration: number;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'withdrawal' | 'payment' | 'refund';
  amount: number;
  currency: 'USD' | 'USDT';
  status: 'completed' | 'pending' | 'failed';
  timestamp: string;
  description: string;
  blockchainTxId?: string;
}

export interface WalletBalance {
  available: number;
  locked: number;
  total: number;
  currency: 'USD' | 'USDT';
}

export interface Loan {
  id: string;
  amount: number;
  currency: 'USD' | 'USDT';
  term: number;
  apr: number;
  status: 'active' | 'completed' | 'defaulted';
  nextPaymentDate: string;
  remainingBalance: number;
}

export interface EscrowTransaction {
  id: string;
  orderId: string;
  amount: number;
  currency: 'USD' | 'USDT';
  status: 'pending' | 'released' | 'disputed';
  createdAt: string;
  releaseDate?: string;
}

export interface WalletState {
  balance: WalletBalance;
  transactions: Transaction[];
  loans: Loan[];
  escrowTransactions: EscrowTransaction[];
  loading: boolean;
  error: string | null;
}

export type TabType = 'home' | 'marketplace' | 'shipping' | 'finance' | 'tracking' | 'wallet';