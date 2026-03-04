import { X, Trash2 } from 'lucide-react';
import { MenuItem, MenuOption } from '../data/menu';

export interface CartItem extends MenuItem {
  cartId: string;
  selectedOption?: MenuOption;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  removeFromCart: (cartId: string) => void;
  clearCart: () => void;
}

export default function CartModal({ isOpen, onClose, cart, removeFromCart, clearCart }: CartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#F5F2ED] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-[#1a1a1a]/10 bg-white">
          <h2 className="text-xl font-serif font-semibold text-[#BC002D]">Your Order</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 bg-red-50 border-b border-red-100 text-sm text-[#BC002D] font-medium text-center">
          Please show this screen to our staff when ordering.
          <br/>
          <span className="text-xs opacity-80">(Say "Sumimasen!" to call us)</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 py-12">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {cart.map((item) => (
                <li key={item.cartId} className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex-1 pr-2">
                    <p className="font-medium text-sm">
                      {item.nameEn}
                      {item.selectedOption && item.selectedOption.labelEn !== 'None' && (
                        <span className="text-[#BC002D] ml-1">
                          (+ {item.selectedOption.labelEn})
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.nameJa}
                      {item.selectedOption && item.selectedOption.labelJa !== 'なし' && (
                        <span className="ml-1">
                          (+ {item.selectedOption.labelJa})
                        </span>
                      )}
                    </p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="p-4 border-t border-[#1a1a1a]/10 bg-white">
          <button 
            onClick={() => {
              clearCart();
              onClose();
            }}
            disabled={cart.length === 0}
            className="w-full py-3 bg-[#BC002D] text-white rounded-xl font-medium hover:bg-[#a00026] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete Order (Clear Cart)
          </button>
        </div>
      </div>
    </div>
  );
}
