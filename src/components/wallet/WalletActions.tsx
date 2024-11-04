import React, { useState } from 'react';
import { useWallet } from '../../context/WalletContext';
import { ArrowUpRight, ArrowDownLeft, CreditCard, Building2 } from 'lucide-react';
import DepositModal from './modals/DepositModal';
import WithdrawModal from './modals/WithdrawModal';

const WalletActions: React.FC = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const { balance } = useWallet();

  const actions = [
    {
      name: 'Deposit',
      description: 'Add funds to your wallet',
      icon: ArrowDownLeft,
      onClick: () => setIsDepositModalOpen(true),
      color: 'bg-green-500',
    },
    {
      name: 'Withdraw',
      description: 'Withdraw to bank or crypto wallet',
      icon: ArrowUpRight,
      onClick: () => setIsWithdrawModalOpen(true),
      color: 'bg-blue-500',
    },
    {
      name: 'Link Bank',
      description: 'Connect your bank account',
      icon: Building2,
      onClick: () => {},
      color: 'bg-purple-500',
    },
    {
      name: 'Add Card',
      description: 'Link a debit or credit card',
      icon: CreditCard,
      onClick: () => {},
      color: 'bg-indigo-500',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.name}
            onClick={action.onClick}
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div className={`${action.color} p-3 rounded-lg text-white mr-4`}>
              <action.icon className="h-6 w-6" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-gray-900">{action.name}</h3>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </button>
        ))}
      </div>

      <DepositModal
        isOpen={isDepositModalOpen}
        onClose={() => setIsDepositModalOpen(false)}
      />
      <WithdrawModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        maxAmount={balance.available}
      />
    </>
  );
};

export default WalletActions;