import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';

const EligibilityCheck: React.FC = () => {
  const { user } = useWallet();

  const criteria = [
    {
      label: 'Trading History',
      requirement: '> 3 months',
      met: true,
      description: 'Active trading history on the platform',
    },
    {
      label: 'Transaction Volume',
      requirement: '> $10,000',
      met: true,
      description: 'Total transaction volume in the last 3 months',
    },
    {
      label: 'Wallet Balance',
      requirement: '> $1,000',
      met: user?.balance ? user.balance >= 1000 : false,
      description: 'Current wallet balance in USDT',
    },
    {
      label: 'Successful Orders',
      requirement: '> 5 orders',
      met: true,
      description: 'Completed orders with positive feedback',
    },
  ];

  const eligibilityScore = (criteria.filter(c => c.met).length / criteria.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Loan Eligibility</h2>

      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                Eligibility Score
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                {eligibilityScore}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: `${eligibilityScore}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
            ></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {criteria.map((criterion, index) => (
          <div key={index} className="flex items-start">
            {criterion.met ? (
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
            )}
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{criterion.label}</p>
              <p className="text-sm text-gray-500">
                {criterion.description} ({criterion.requirement})
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EligibilityCheck;