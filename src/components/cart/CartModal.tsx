import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWallet } from '../../context/WalletContext';
import toast from 'react-hot-toast';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const { balance, pay, isConnected } = useWallet();

  if (!isOpen) return null;

  const handleCheckout = async () => {
    if (!isConnected) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (total > balance.available) {
      toast.error('Insufficient balance');
      return;
    }

    try {
      await pay(total, 'USD', 'Product purchase');
      clearCart();
      toast.success('Payment successful');
      onClose();
    } catch (error) {
      toast.error('Payment failed. Please try again.');
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col">
        <div className="p-6 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Shopping Cart</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="p-6 text-center flex-1">
            <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 pt-0">
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.product.id} className="py-6 flex">
                    <div className="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-base font-medium text-gray-900">
                            {item.product.name}
                          </h3>
                          <p className="ml-4 text-base font-medium text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          ${item.product.price.toFixed(2)} each
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-gray-600">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex-shrink-0">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Wallet Balance: ${balance.available.toFixed(2)}
              </p>

              <div className="mt-6 space-y-2">
                <button
                  onClick={handleCheckout}
                  disabled={!isConnected || total > balance.available}
                  className="w-full bg-indigo-600 text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {!isConnected 
                    ? 'Connect Wallet to Checkout'
                    : total > balance.available 
                    ? 'Insufficient Balance'
                    : 'Checkout'}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;