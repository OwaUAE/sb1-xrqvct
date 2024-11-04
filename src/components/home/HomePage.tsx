import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Truck, Wallet, Globe2, Users, DollarSign, Store, Search, Package, CreditCard } from 'lucide-react';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../context/AuthContext';

const stats = [
  { label: 'Active Traders', value: '2,500+', icon: Users },
  { label: 'Monthly Volume', value: '$15M+', icon: DollarSign },
  { label: 'Countries Served', value: '25+', icon: Globe2 },
  { label: 'Verified Suppliers', value: '500+', icon: ShieldCheck },
];

const buyerSteps = [
  {
    title: 'Browse & Compare',
    description: 'Search through verified UAE suppliers and compare prices, MOQs, and shipping options.',
    icon: Search,
  },
  {
    title: 'Group Shipping',
    description: 'Join shipping groups to reduce logistics costs and get better rates on bulk orders.',
    icon: Truck,
  },
  {
    title: 'Secure Payment',
    description: 'Pay securely using OwaWallet with funds held in escrow until delivery confirmation.',
    icon: ShieldCheck,
  },
  {
    title: 'Track & Receive',
    description: 'Monitor your shipment in real-time and receive your products at your destination.',
    icon: Package,
  },
];

const sellerSteps = [
  {
    title: 'List Products',
    description: 'Create your store and list your products with detailed specifications and pricing.',
    icon: Store,
  },
  {
    title: 'Receive Orders',
    description: 'Get notified instantly when buyers place orders and manage them efficiently.',
    icon: DollarSign,
  },
  {
    title: 'Secure Payment',
    description: 'Receive payments securely through our escrow system once shipment is confirmed.',
    icon: CreditCard,
  },
  {
    title: 'Grow Business',
    description: 'Access analytics, market insights, and expand your reach across Africa.',
    icon: Globe2,
  },
];

const HomePage = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577208288347-b24488f3efa5?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
              <span className="relative whitespace-nowrap text-indigo-400">
                <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-indigo-500/20" preserveAspectRatio="none">
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                </svg>
                <span className="relative">Transform Your Trade</span>
              </span>{' '}
              with UAE's Finest
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300">
              Connect directly with verified UAE suppliers, access DeFi financing, and optimize your logistics
              with blockchain-powered group shipping.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              {isAuthenticated ? (
                <>
                  <button
                    onClick={() => window.location.href = '#marketplace'}
                    className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 text-white hover:bg-indigo-600 hover:text-slate-100 active:bg-indigo-800 active:text-slate-300 focus-visible:outline-indigo-600"
                  >
                    Go to Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={logout}
                    className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none ring-slate-200 text-white hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 hover:bg-white/10 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 text-white hover:bg-indigo-600 hover:text-slate-100 active:bg-indigo-800 active:text-slate-300 focus-visible:outline-indigo-600"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none ring-slate-200 text-white hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 hover:bg-white/10 transition-colors duration-200"
                  >
                    Watch Demo
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 flex items-center justify-center gap-2">
                    <Icon className="h-8 w-8 text-indigo-600" />
                    {stat.value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How OwaUAE Works
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              A seamless platform connecting African buyers with UAE suppliers
            </p>
          </div>

          {/* For Buyers */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">For Buyers</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {buyerSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index !== buyerSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full border-t-2 border-indigo-100" />
                  )}
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="mt-2 text-center text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Sellers */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">For Sellers</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {sellerSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index !== sellerSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full border-t-2 border-indigo-100" />
                  )}
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-6 text-lg font-semibold text-gray-900">{step.title}</h4>
                    <p className="mt-2 text-center text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Trade Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to scale your imports
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform combines cutting-edge blockchain technology with practical solutions to make
              cross-border trade simple, secure, and profitable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <ShieldCheck className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Secure Transactions
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Every trade is protected by smart contracts and our blockchain-powered escrow service.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Truck className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  Group Shipping
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Join group shipments to reduce logistics costs and streamline your supply chain.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Wallet className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  DeFi Integration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Access flexible financing options backed by stablecoins and smart contracts.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  );
};

export default HomePage;