import React from 'react';
import { EscrowTransaction } from '../../types';
import { Shield, Clock, AlertCircle } from 'lucide-react';

interface EscrowOverviewProps {
  escrowTransactions: EscrowTransaction[];
}

const EscrowOverview: React.FC<EscrowOverviewProps> = ({ escrowTransactions }) => {
  return (
    <div className="space-y-6">
      {escrowTransactions.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <Shield className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No escrow transactions</h3>
          <p className="mt-1 text-sm text-gray-500">
            Escrow transactions will appear here when you make purchases
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Escrow Transactions</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {escrowTransactions.map((transaction) => (
              <div key={transaction.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {transaction.currency} {transaction.amount.toLocaleString()}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Order #{transaction.orderId}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : transaction.status === 'released'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {transaction.releaseDate && (
                    <div>
                      <p className="text-sm text-gray-500">Release Date</p>
                      <p className="text-sm font-medium text-gray-900">
                        {new Date(transaction.releaseDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                {transaction.status === 'pending' && (
                  <div className="mt-4 flex space-x-3">
                    <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                      Release Funds
                    </button>
                    <button className="flex-1 bg-white text-red-600 px-4 py-2 rounded-md text-sm font-medium border border-red-600 hover:bg-red-50">
                      Dispute
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EscrowOverview;