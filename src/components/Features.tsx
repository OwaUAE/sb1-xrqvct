import React from 'react';
import { ShieldCheck, Truck, Wallet, Users } from 'lucide-react';

const features = [
  {
    name: 'Secure Escrow',
    description: 'Every transaction is protected through our blockchain-powered escrow service, ensuring safe and transparent trades.',
    icon: ShieldCheck,
  },
  {
    name: 'Group Shipping',
    description: 'Reduce logistics costs by joining collective shipping plans with other traders in your region.',
    icon: Truck,
  },
  {
    name: 'DeFi Financing',
    description: 'Access quick and flexible financing options backed by stablecoins to grow your business.',
    icon: Wallet,
  },
  {
    name: 'Verified Suppliers',
    description: 'Connect with pre-vetted UAE suppliers known for quality products and reliable service.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Trade with Confidence</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your import business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform combines cutting-edge blockchain technology with practical solutions to make
            cross-border trade simple, secure, and profitable.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;