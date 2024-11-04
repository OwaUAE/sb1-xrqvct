import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WalletState, Transaction, WalletBalance, Loan, EscrowTransaction } from '../types';

interface WalletContextType extends WalletState {
  isConnected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  deposit: (amount: number, currency: 'USD' | 'USDT') => Promise<void>;
  withdraw: (amount: number, currency: 'USD' | 'USDT') => Promise<void>;
  pay: (amount: number, currency: 'USD' | 'USDT', description: string) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [state, setState] = useState<WalletState>({
    balance: {
      available: 1000,
      locked: 200,
      total: 1200,
      currency: 'USD'
    },
    transactions: [],
    loans: [],
    escrowTransactions: [],
    loading: false,
    error: null
  });

  const connect = async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      // Simulate wallet connection
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsConnected(true);
      setState(prev => ({ ...prev, loading: false }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to connect wallet'
      }));
    }
  };

  const disconnect = () => {
    setIsConnected(false);
    setState(prev => ({
      ...prev,
      balance: {
        available: 0,
        locked: 0,
        total: 0,
        currency: 'USD'
      },
      transactions: [],
      loans: [],
      escrowTransactions: []
    }));
  };

  const deposit = async (amount: number, currency: 'USD' | 'USDT') => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'deposit',
        amount,
        currency,
        status: 'completed',
        timestamp: new Date().toISOString(),
        description: `Deposit of ${amount} ${currency}`,
        blockchainTxId: `0x${Math.random().toString(36).substr(2, 40)}`
      };

      setState(prev => ({
        ...prev,
        balance: {
          ...prev.balance,
          available: prev.balance.available + amount,
          total: prev.balance.total + amount
        },
        transactions: [newTransaction, ...prev.transactions],
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Deposit failed'
      }));
    }
  };

  const withdraw = async (amount: number, currency: 'USD' | 'USDT') => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'withdrawal',
        amount: -amount,
        currency,
        status: 'completed',
        timestamp: new Date().toISOString(),
        description: `Withdrawal of ${amount} ${currency}`,
        blockchainTxId: `0x${Math.random().toString(36).substr(2, 40)}`
      };

      setState(prev => ({
        ...prev,
        balance: {
          ...prev.balance,
          available: prev.balance.available - amount,
          total: prev.balance.total - amount
        },
        transactions: [newTransaction, ...prev.transactions],
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Withdrawal failed'
      }));
    }
  };

  const pay = async (amount: number, currency: 'USD' | 'USDT', description: string) => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newTransaction: Transaction = {
        id: Math.random().toString(36).substr(2, 9),
        type: 'payment',
        amount: -amount,
        currency,
        status: 'completed',
        timestamp: new Date().toISOString(),
        description,
        blockchainTxId: `0x${Math.random().toString(36).substr(2, 40)}`
      };

      setState(prev => ({
        ...prev,
        balance: {
          ...prev.balance,
          available: prev.balance.available - amount,
          total: prev.balance.total - amount
        },
        transactions: [newTransaction, ...prev.transactions],
        loading: false
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Payment failed'
      }));
    }
  };

  return (
    <WalletContext.Provider value={{
      ...state,
      isConnected,
      connect,
      disconnect,
      deposit,
      withdraw,
      pay
    }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}