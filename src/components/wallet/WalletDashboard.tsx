import React, { useState } from 'react';
import { useWallet } from '../../context/WalletContext';
import { Wallet, ArrowUpRight, ArrowDownLeft, Clock, DollarSign, Shield } from 'lucide-react';
import WalletBalance from './WalletBalance';
import TransactionHistory from './TransactionHistory';
import WalletActions from './WalletActions';
import LoanManagement from './LoanManagement';
import EscrowOverview from './EscrowOverview';

const WalletDashboard = () => {
  const { balance, transactions, loans, escrowTransactions } = useWallet();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Wallet },
    { id: 'transactions', name: 'Transactions', icon: Clock },
    { id: 'loans', name: 'Loans', icon: DollarSign },
    { id: 'escrow', name: 'Escrow', icon: Shield }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Wallet Dashboard</h1>
              <p className="text-gray-600">Manage your funds and transactions</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <ArrowDownLeft className="h-4 w-4 mr-2" />
                Deposit
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Withdraw
              </button>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } flex items-center whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  <tab.icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <WalletBalance balance={balance} />
                <WalletActions />
                <TransactionHistory transactions={transactions.slice(0, 5)} />
              </div>
            )}
            {activeTab === 'transactions' && (
              <TransactionHistory transactions={transactions} />
            )}
            {activeTab === 'loans' && (
              <LoanManagement loans={loans} />
            )}
            {activeTab === 'escrow' && (
              <EscrowOverview escrowTransactions={escrowTransactions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;