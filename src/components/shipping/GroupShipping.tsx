import React, { useState } from 'react';
import { ShipmentGroup } from '../../types';
import { Truck, Users, Calendar, Package, MapPin, DollarSign, Search } from 'lucide-react';

const shipmentGroups: ShipmentGroup[] = [
  {
    id: 'sg1',
    destination: 'Lagos, Nigeria',
    departureDate: '2024-04-15',
    availableSpace: 2000,
    pricePerKg: 3.50,
    usdtPricePerKg: 3.52,
    participants: 8,
    status: 'forming',
    route: ['Dubai', 'Lagos'],
    estimatedDuration: 7
  },
  {
    id: 'sg2',
    destination: 'Nairobi, Kenya',
    departureDate: '2024-04-20',
    availableSpace: 1500,
    pricePerKg: 3.75,
    usdtPricePerKg: 3.77,
    participants: 6,
    status: 'forming',
    route: ['Dubai', 'Nairobi'],
    estimatedDuration: 5
  },
  {
    id: 'sg3',
    destination: 'Accra, Ghana',
    departureDate: '2024-04-25',
    availableSpace: 1800,
    pricePerKg: 3.25,
    usdtPricePerKg: 3.27,
    participants: 5,
    status: 'forming',
    route: ['Dubai', 'Accra'],
    estimatedDuration: 6
  }
];

const destinations = ['All Destinations', 'Lagos', 'Nairobi', 'Accra', 'Addis Ababa', 'Johannesburg', 'Cairo', 'Khartoum', 'Dar es Salaam'];

const GroupShipping = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');
  const [showCreateGroup, setShowCreateGroup] = useState(false);

  const filteredGroups = shipmentGroups.filter(group =>
    (selectedDestination === 'All Destinations' || group.destination.includes(selectedDestination)) &&
    group.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Active Shipping Groups</h2>
          <button
            onClick={() => setShowCreateGroup(!showCreateGroup)}
            className="mt-4 sm:mt-0 bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create New Group
          </button>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {destinations.map(destination => (
                <button
                  key={destination}
                  onClick={() => setSelectedDestination(destination)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedDestination === destination
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {destination}
                </button>
              ))}
            </div>
          </div>
        </div>

        {showCreateGroup && (
          <div className="mb-6 p-4 border border-indigo-100 rounded-lg bg-indigo-50">
            <h3 className="text-lg font-medium text-indigo-900 mb-4">Create New Shipping Group</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter destination city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Departure Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Available Space (kg)</label>
                <input
                  type="number"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter available space"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price per kg ($)</label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter price per kg"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowCreateGroup(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700">
                Create Group
              </button>
            </div>
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          {filteredGroups.map((group) => (
            <div key={group.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-medium text-gray-900">{group.destination}</h3>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  group.status === 'forming'
                    ? 'bg-yellow-100 text-yellow-800'
                    : group.status === 'confirmed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {group.status.charAt(0).toUpperCase() + group.status.slice(1)}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {new Date(group.departureDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Package className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {group.availableSpace}kg available
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">
                    {group.participants} participants
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-gray-400 mr-2" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      ${group.pricePerKg}/kg
                    </span>
                    <span className="text-xs text-gray-500">
                      ≈ {group.usdtPricePerKg} USDT/kg
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Join Group
                </button>
                <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No shipping groups found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupShipping;