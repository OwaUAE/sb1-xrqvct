import React from 'react';
import { WalletBalance as WalletBalanceType } from '../../types';
import { DollarSign, Lock, Wallet } from 'lucide-react';

interface WalletBalanceProps {
  balance: WalletBalanceType;
}

const WalletBalance: React.FC<WalletBalanceProps> = ({ balance }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <Wallet className="h-6 w-6 mr-2" />
          Wallet Balance
        </h2>
        <span className="text-sm bg-white/20 rounded-full px-3 py-1">
          {balance.currency}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="flex items-center text-white/80 mb-2">
            <DollarSign className="h-4 w-4 mr-1" />
            Available
          </div>
          <div className="text-2xl font-bold">
            ${balance.available.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="flex items-center text-white/80 mb-2">
            <Lock className="h-4 w-4 mr-1" />
            Locked
          </div>
          <div className="text-2xl font-bold">
            ${balance.locked.toLocaleString()}
          </div>
        </div>

        <div>
          <div className="flex items-center text-white/80 mb-2">
            <Wallet className="h-4 w-4 mr-1" />
            Total
          </div>
          <div className="text-2xl font-bold">
            ${balance.total.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;