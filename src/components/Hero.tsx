import React from 'react';
import { ArrowRight, ShieldCheck, Truck, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
            <span className="relative whitespace-nowrap text-indigo-400">
              <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute left-0 top-2/3 h-[0.58em] w-full fill-indigo-500/20" preserveAspectRatio="none">
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative">Bridging Africa</span>
            </span>{' '}
            with UAE's Finest Suppliers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-300">
            Secure, transparent, and efficient cross-border trade powered by blockchain technology.
            Connect with trusted suppliers and unlock new possibilities for your business.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#"
              className="group inline-flex items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-500 text-white hover:bg-indigo-600 hover:text-slate-100 active:bg-indigo-800 active:text-slate-300 focus-visible:outline-indigo-600"
            >
              Start Trading
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-3 px-6 text-sm font-semibold focus:outline-none ring-slate-200 text-white hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300 hover:bg-white/10 transition-colors duration-200"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200/10" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-b from-slate-900/50 to-slate-900/60 px-3 text-base font-semibold leading-6 text-white">
            Trusted by leading African retailers
          </span>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <ShieldCheck className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">Secure Transactions</h3>
                <p className="mt-2 text-gray-300">Every trade is protected by smart contracts and escrow services</p>
              </div>
            </div>
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <Truck className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">Optimized Shipping</h3>
                <p className="mt-2 text-gray-300">Join group shipments to reduce costs and streamline logistics</p>
              </div>
            </div>
            <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <Wallet className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-white">DeFi Integration</h3>
                <p className="mt-2 text-gray-300">Access flexible financing options backed by stablecoins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;