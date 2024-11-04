import React, { useState } from 'react';
import { Wallet, CreditCard, Building2, ArrowUpRight, ArrowDownLeft, History } from 'lucide-react';
import DepositModal from './modals/DepositModal';
import WithdrawModal from './modals/WithdrawModal';

const OwaWallet = () => {
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock wallet data
  const walletData = {
    balance: 25000.00,
    usdtBalance: 25000.00,
    pendingTransactions: 2,
    recentTransactions: [
      {
        id: 1,
        type: 'deposit',
        amount: 5000,
        currency: 'USD',
        status: 'completed',
        date: '2024-03-15',
        method: 'Bank Transfer'
      },
      {
        id: 2,
        type: 'withdrawal',
        amount: 1000,
        currency: 'USD',
        status: 'pending',
        date: '2024-03-14',
        method: 'Crypto'
      }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Wallet },
    { id: 'deposit', name: 'Deposit', icon: ArrowDownLeft },
    { id: 'withdraw', name: 'Withdraw', icon: ArrowUpRight },
    { id: 'history', name: 'History', icon: History }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">OwaWallet</h1>
              <p className="text-gray-600">Manage your funds securely</p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button
                onClick={() => setShowDepositModal(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <ArrowDownLeft className="h-4 w-4 mr-2" />
                Deposit
              </button>
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg p-6 text-white">
                <h3 className="text-lg font-medium mb-4">Available Balance</h3>
                <p className="text-3xl font-bold">${walletData.balance.toLocaleString()}</p>
                <p className="text-indigo-100 mt-1">≈ {walletData.usdtBalance.toLocaleString()} USDT</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setShowDepositModal(true)}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <CreditCard className="h-5 w-5 mr-2 text-gray-400" />
                    Add Money
                  </button>
                  <button
                    onClick={() => setShowWithdrawModal(true)}
                    className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                  >
                    <Building2 className="h-5 w-5 mr-2 text-gray-400" />
                    Bank Transfer
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Transactions</h3>
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {walletData.recentTransactions.map((transaction) => (
                    <li key={transaction.id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            {transaction.type === 'deposit' ? (
                              <ArrowDownLeft className="h-5 w-5 text-green-500" />
                            ) : (
                              <ArrowUpRight className="h-5 w-5 text-red-500" />
                            )}
                            <p className="ml-2 text-sm font-medium text-gray-900">
                              {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'} via {transaction.method}
                            </p>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className={`text-sm font-medium ${
                              transaction.type === 'deposit' ? 'text-green-500' : 'text-red-500'
                            }`}>
                              {transaction.type === 'deposit' ? '+' : '-'}${transaction.amount.toLocaleString()}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="text-sm text-gray-500">
                              {new Date(transaction.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              transaction.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DepositModal
        isOpen={showDepositModal}
        onClose={() => setShowDepositModal(false)}
      />
      <WithdrawModal
        isOpen={showWithdrawModal}
        onClose={() => setShowWithdrawModal(false)}
        maxAmount={walletData.balance}
      />
    </div>
  );
};

export default OwaWallet;