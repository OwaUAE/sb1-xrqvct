import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface LoanOffersProps {
  amount: number;
  duration: number;
}

const LoanOffers: React.FC<LoanOffersProps> = ({ amount, duration }) => {
  const offers = [
    {
      id: 1,
      name: 'Standard DeFi Loan',
      apr: 12,
      maxAmount: 50000,
      minDuration: 3,
      maxDuration: 24,
      requirements: ['3+ months trading history', 'Minimum 5 completed orders'],
      features: ['No prepayment penalties', 'Fixed interest rate'],
    },
    {
      id: 2,
      name: 'Premium Trade Finance',
      apr: 9.5,
      maxAmount: 100000,
      minDuration: 6,
      maxDuration: 36,
      requirements: ['6+ months trading history', 'Minimum $50,000 trading volume'],
      features: ['Lower interest rate', 'Flexible repayment schedule', 'Higher loan limits'],
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Available Loan Offers</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-900">{offer.name}</h3>
                <Shield className="h-5 w-5 text-indigo-600" />
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  {offer.apr}% <span className="text-sm font-normal text-gray-500">APR</span>
                </div>
                <p className="text-sm text-gray-500">Fixed interest rate</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-gray-900">Loan Terms</p>
                  <ul className="mt-2 text-sm text-gray-500">
                    <li>• Up to ${offer.maxAmount.toLocaleString()}</li>
                    <li>• {offer.minDuration} to {offer.maxDuration} months</li>
                    {offer.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900">Requirements</p>
                  <ul className="mt-2 text-sm text-gray-500">
                    {offer.requirements.map((req, index) => (
                      <li key={index}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanOffers;