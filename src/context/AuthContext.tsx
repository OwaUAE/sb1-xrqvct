import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, role: 'buyer' | 'supplier', kycDocs: {
    idCard?: File;
    proofOfAddress?: File;
    businessLicense?: File;
  }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  });

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const user: User = {
        id: '1',
        email,
        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        role: 'buyer',
        balance: 1000,
        kycStatus: 'verified',
      };

      setState({
        isAuthenticated: true,
        user,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Invalid credentials',
      }));
    }
  };

  const signup = async (
    email: string,
    password: string,
    role: 'buyer' | 'supplier',
    kycDocs: {
      idCard?: File;
      proofOfAddress?: File;
      businessLicense?: File;
    }
  ) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      // Simulate API call and KYC verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: '1',
        email,
        address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        role,
        balance: 0,
        kycStatus: 'verified',
      };

      setState({
        isAuthenticated: true,
        user,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Registration failed',
      }));
    }
  };

  const logout = () => {
    setState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      signup,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}