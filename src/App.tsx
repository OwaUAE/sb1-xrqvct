import React, { useState } from 'react';
import { WalletProvider } from './context/WalletContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import HomePage from './components/home/HomePage';
import Features from './components/Features';
import ProductGrid from './components/marketplace/ProductGrid';
import GroupShipping from './components/shipping/GroupShipping';
import FinancePage from './components/finance/FinancePage';
import WalletDashboard from './components/wallet/WalletDashboard';
import Footer from './components/Footer';
import { TabType } from './types';

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <AuthProvider>
      <WalletProvider>
        <CartProvider>
          <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
            {activeTab === 'home' && (
              <>
                <HomePage />
                <Features />
              </>
            )}
            {activeTab === 'marketplace' && <ProductGrid />}
            {activeTab === 'shipping' && <GroupShipping />}
            {activeTab === 'finance' && <FinancePage />}
            {activeTab === 'wallet' && <WalletDashboard />}
            <Footer />
          </div>
        </CartProvider>
      </WalletProvider>
    </AuthProvider>
  );
};

export default App;