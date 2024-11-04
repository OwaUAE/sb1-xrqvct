import React, { useState } from 'react';
import { CreditCard, Building2, Wallet } from 'lucide-react';

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  maxAmount: number;
}

const WithdrawModal = ({ isOpen, onClose, maxAmount }: WithdrawModalProps) => {
  const [amount, setAmount] = useState('');
  const [method, setMethod] = useState('bank');

  if (!isOpen) return null;

  const withdrawMethods = [
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: Building2,
      fee: '0%',
      processingTime: '2-3 business days'
    },
    {
      id: 'card',
      name: 'Card Refund',
      icon: CreditCard,
      fee: '1.5%',
      processingTime: '3-5 business days'
    },
    {
      id: 'crypto',
      name: 'Crypto Withdrawal',
      icon: Wallet,
      fee: '1%',
      processingTime: '10-30 minutes'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Withdraw Funds</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Withdrawal Method
              </label>
              <div className="grid gap-3">
                {withdrawMethods.map((withdrawMethod) => (
                  <label
                    key={withdrawMethod.id}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                      method === withdrawMethod.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={withdrawMethod.id}
                      checked={method === withdrawMethod.id}
                      onChange={(e) => setMethod(e.target.value)}
                      className="sr-only"
                    />
                    <withdrawMethod.icon className="h-5 w-5 text-gray-400 mr-3" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{withdrawMethod.name}</p>
                      <p className="text-sm text-gray-500">
                        Fee: {withdrawMethod.fee} • {withdrawMethod.processingTime}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Amount (Max: ${maxAmount.toLocaleString()})
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0"
                  max={maxAmount}
                  step="0.01"
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">USD</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Withdraw
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;