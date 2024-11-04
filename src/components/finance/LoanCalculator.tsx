import React from 'react';
import { Calculator } from 'lucide-react';

interface LoanCalculatorProps {
  amount: number;
  duration: number;
  onAmountChange: (amount: number) => void;
  onDurationChange: (duration: number) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({
  amount,
  duration,
  onAmountChange,
  onDurationChange,
}) => {
  const interestRate = 0.12; // 12% APR
  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment =
    (amount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, duration)) /
    (Math.pow(1 + monthlyInterestRate, duration) - 1);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">Loan Calculator</h2>
        <Calculator className="h-5 w-5 text-indigo-600" />
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Loan Amount (USD)</label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={amount}
            onChange={(e) => onAmountChange(Number(e.target.value))}
            className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>$1,000</span>
            <span className="font-medium text-indigo-600">${amount.toLocaleString()}</span>
            <span>$100,000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Loan Duration (months)</label>
          <input
            type="range"
            min="3"
            max="36"
            step="3"
            value={duration}
            onChange={(e) => onDurationChange(Number(e.target.value))}
            className="mt-2 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-600">
            <span>3 months</span>
            <span className="font-medium text-indigo-600">{duration} months</span>
            <span>36 months</span>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Monthly Payment:</span>
            <span className="text-lg font-medium text-gray-900">
              ${monthlyPayment.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Interest Rate (APR):</span>
            <span className="text-lg font-medium text-gray-900">{(interestRate * 100).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Repayment:</span>
            <span className="text-lg font-medium text-gray-900">
              ${(monthlyPayment * duration).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;