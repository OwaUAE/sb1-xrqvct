import React, { useState } from 'react';
import LoanCalculator from './LoanCalculator';
import EligibilityCheck from './EligibilityCheck';
import LoanOffers from './LoanOffers';
import { useWallet } from '../../context/WalletContext';
import { ArrowRight, ShieldCheck, Wallet } from 'lucide-react';
import ConnectWalletModal from './ConnectWalletModal';

const FinancePage = () => {
  const { balance, isConnected, connect } = useWallet();
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [duration, setDuration] = useState<number>(12);
  const [showConnectModal, setShowConnectModal] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
        <div className="absolute inset-0 bg-3d-finance"></div>
        <div className="absolute inset-0 bg-3d-waves opacity-50"></div>
        <div className="absolute inset-0 bg-3d-dots opacity-30"></div>
        <div className="absolute inset-0 bg-overlay-light"></div>
        
        <div className="relative z-10 max-w-md w-full">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-white/20 transform hover:scale-[1.01] transition-all duration-300">
            <Wallet className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">Connect OwaWallet</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Connect your OwaWallet to access DeFi financing options and manage your loans
            </p>
            <button
              onClick={() => setShowConnectModal(true)}
              className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              Connect Wallet
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        <ConnectWalletModal 
          isOpen={showConnectModal} 
          onClose={() => setShowConnectModal(false)}
          onConnect={handleConnect}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Background layers */}
      <div className="fixed inset-0 bg-3d-finance"></div>
      <div className="fixed inset-0 bg-3d-waves opacity-30"></div>
      <div className="fixed inset-0 bg-3d-dots opacity-20"></div>
      <div className="fixed inset-0 bg-overlay-light"></div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">DeFi Financing Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Access quick and flexible financing backed by smart contracts
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
                <LoanCalculator
                  amount={loanAmount}
                  duration={duration}
                  onAmountChange={setLoanAmount}
                  onDurationChange={setDuration}
                />
              </div>
            </div>
            <div className="transform hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
                <EligibilityCheck />
              </div>
            </div>
          </div>

          <div className="mt-12 transform hover:scale-[1.01] transition-all duration-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20">
              <LoanOffers amount={loanAmount} duration={duration} />
            </div>
          </div>

          <div className="mt-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-8 transform hover:scale-[1.01] transition-all duration-300">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Secure & Transparent</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      All loans are backed by smart contracts on the blockchain
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Wallet className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Flexible Terms</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Choose repayment terms that work best for your business
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ArrowRight className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Quick Approval</h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Get approved and funded within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancePage;