import React from 'react';
import { Loan } from '../../types';
import { DollarSign, Calendar, AlertCircle } from 'lucide-react';

interface LoanManagementProps {
  loans: Loan[];
}

const LoanManagement: React.FC<LoanManagementProps> = ({ loans }) => {
  return (
    <div className="space-y-6">
      {loans.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
          <DollarSign className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No active loans</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by applying for a DeFi loan
          </p>
          <div className="mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Apply for a Loan
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Active Loans</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {loans.map((loan) => (
              <div key={loan.id} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">
                      {loan.currency} {loan.amount.toLocaleString()}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {loan.term} months at {loan.apr}% APR
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      loan.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : loan.status === 'completed'
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Next Payment</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(loan.nextPaymentDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Remaining Balance</p>
                    <p className="text-sm font-medium text-gray-900">
                      {loan.currency} {loan.remainingBalance.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex space-x-3">
                  <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                    Make Payment
                  </button>
                  <button className="flex-1 bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:bg-indigo-50">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanManagement;