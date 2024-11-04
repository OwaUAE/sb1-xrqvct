import React, { useState } from 'react';
import { Star, Package, Search, Filter, ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import CartModal from '../cart/CartModal';
import { Product } from '../../types';
import toast from 'react-hot-toast';

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Garden',
  'Automotive',
  'Health & Beauty',
  'Sports',
  'Toys',
];

const sortOptions = [
  'Most Popular',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
];

// Mock products data
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation',
    price: 129.99,
    usdtPrice: 130.25,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
    supplier: {
      id: 's1',
      name: 'TechPro Electronics',
      rating: 4.8,
      location: 'Dubai, UAE'
    },
    category: 'Electronics',
    subcategory: 'Audio',
    stock: 1500,
    moq: 50,
    tags: ['electronics', 'audio', 'wireless']
  },
  {
    id: '2',
    name: 'Smart LED TV - 55"',
    description: '4K Ultra HD Smart LED Television',
    price: 599.99,
    usdtPrice: 601.50,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    supplier: {
      id: 's2',
      name: 'Global Electronics',
      rating: 4.6,
      location: 'Abu Dhabi, UAE'
    },
    category: 'Electronics',
    subcategory: 'Television',
    stock: 200,
    moq: 10,
    tags: ['electronics', 'tv', 'smart-tv']
  },
  {
    id: '3',
    name: 'Designer Leather Handbag',
    description: 'Genuine leather designer handbag',
    price: 299.99,
    usdtPrice: 301.25,
    currency: 'USD',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    supplier: {
      id: 's3',
      name: 'Luxury Accessories',
      rating: 4.9,
      location: 'Dubai, UAE'
    },
    category: 'Fashion',
    subcategory: 'Bags',
    stock: 750,
    moq: 25,
    tags: ['fashion', 'accessories', 'leather']
  }
];

const ProductGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const { addToCart, itemCount } = useCart();

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'Price: Low to High') return a.price - b.price;
      if (sortBy === 'Price: High to Low') return b.price - a.price;
      if (sortBy === 'Most Popular') return b.supplier.rating - a.supplier.rating;
      return 0;
    });

  const handleAddToCart = (product: Product) => {
    try {
      addToCart(product, 1);
    } catch (error) {
      toast.error('Failed to add item to cart');
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-3d-marketplace"></div>
      <div className="fixed inset-0 bg-overlay-light"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Marketplace</h1>
          <button
            onClick={() => setShowCartModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{itemCount} items</span>
          </button>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>
              <div className="relative w-full sm:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-lg transition-all duration-200">
              <div className="w-full h-64 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-200" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.stock > 1000
                      ? 'bg-green-100 text-green-800'
                      : product.stock > 100
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.stock > 1000 ? 'In Stock' : product.stock > 100 ? 'Limited Stock' : 'Low Stock'}
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="ml-1 text-sm text-gray-600">{product.supplier.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{product.supplier.location}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="text-lg font-medium text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="text-sm text-gray-500">
                      ≈ {product.usdtPrice} USDT
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Package className="h-4 w-4 mr-1" />
                    MOQ: {product.moq}
                  </div>
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}

        <CartModal isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
      </div>
    </div>
  );
};

export default ProductGrid;