import { useState } from 'react';
import { ShoppingCart, Info, Clock, MapPin } from 'lucide-react';
import { foodMenu, drinkMenu, MenuItem, MenuOption } from './data/menu';
import GuideModal from './components/GuideModal';
import CartModal, { CartItem } from './components/CartModal';
import MenuSection from './components/MenuSection';

type TabType = 'At first' | 'Food Menu' | 'All You Can Drink' | 'Drink Menu';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('At first');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem, selectedOption?: MenuOption) => {
    setCart([...cart, { ...item, selectedOption, cartId: Math.random().toString(36).substring(7) }]);
  };

  const removeFromCart = (cartId: string) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const tabs: TabType[] = ['At first', 'Food Menu', 'All You Can Drink', 'Drink Menu'];

  // Group food menu by category
  const foodCategories = Array.from(new Set(foodMenu.map(item => item.category)));
  const drinkCategories = Array.from(new Set(drinkMenu.map(item => item.category)));

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1a1a1a] font-sans pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#BC002D] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
              味
            </div>
            <h1 className="text-xl font-serif font-bold tracking-tight">Ajito</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsGuideOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-[#BC002D] rounded-full text-xs font-semibold hover:bg-red-100 transition-colors border border-red-100"
            >
              <Info size={14} />
              <span className="hidden sm:inline">To Enjoy Our Izakaya</span>
              <span className="sm:hidden">Guide</span>
            </button>
            
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-700 hover:text-[#BC002D] transition-colors"
            >
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-[#BC002D] text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto hide-scrollbar border-t border-gray-100">
          <div className="flex space-x-1 py-2 min-w-max">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-[#1a1a1a] text-white shadow-md' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 flex flex-col min-h-[calc(100vh-160px)]">
        
        {/* Tab Content */}
        {activeTab === 'At first' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Hokkaido Experience Set Hero */}
            <div className="bg-gradient-to-br from-[#BC002D] to-[#8a0021] rounded-3xl overflow-hidden shadow-xl text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase mb-4 border border-white/30">
                  Highly Recommended
                </div>
                
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-2 leading-tight">
                  Hokkaido Experience Set
                </h2>
                <p className="text-xl md:text-2xl font-serif italic text-red-100 mb-6">
                  北海道満喫セット
                </p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold tracking-tighter">¥6,000</span>
                  <span className="text-red-200 text-sm">/ person</span>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Includes 100min All-You-Can-Drink & 7 Local Dishes
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-red-50">
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Ramen Salad</strong> (Hokkaido original noodle salad)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Zangi</strong> (Local style Japanese fried chicken)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Lamb Sashimi</strong> (Hokkaido is famous for lamb dishes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Deep-Fried Daikon</strong> (Our original crispy fried radish)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Chicken with Wasabi</strong> (Toriwasa)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">French Fries</strong> (Classic crispy potato fries)</span>
                    </li>
                    <li className="flex items-start gap-2 md:col-span-2">
                      <span className="text-white font-bold mt-0.5">•</span>
                      <span><strong className="text-white">Yakitori Assortment</strong> (3 skewers per person)</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={() => addToCart({
                    id: 'set-1',
                    nameJa: '北海道満喫セット',
                    nameEn: 'Hokkaido Experience Set',
                    price: 6000,
                    description: 'Includes 100min All-You-Can-Drink and 7 local dishes.',
                    category: 'Set'
                  })}
                  className="w-full md:w-auto px-8 py-4 bg-white text-[#BC002D] rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Add Set to Order
                </button>
              </div>
            </div>

            {/* Ordering Flow Guide */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">Not ordering the set?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you prefer not to order the Hokkaido Experience Set, please order your food items individually from the <strong>Food Menu</strong> tab.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-400 mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">Choose your drink system</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  You can order drinks individually from the <strong>Drink Menu</strong>, or choose our great value <strong>All-You-Can-Drink</strong> plan for 100 minutes.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Food Menu' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {foodCategories.map(category => (
              <MenuSection 
                key={category} 
                title={category} 
                items={foodMenu.filter(item => item.category === category)} 
                onAdd={addToCart} 
              />
            ))}
          </div>
        )}

        {activeTab === 'All You Can Drink' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-[#1a1a1a] p-8 text-center text-white">
                <h2 className="text-3xl font-serif font-bold mb-2">All You Can Drink</h2>
                <p className="text-gray-400 font-serif italic mb-6">飲み放題</p>
                
                <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
                  <div className="text-4xl font-bold tracking-tighter mb-1">¥1,980 <span className="text-lg font-normal text-gray-300">incl. tax</span></div>
                  <div className="text-sm text-gray-300 font-medium tracking-wide">(¥1,782 before tax)</div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6 p-4 bg-red-50 text-[#BC002D] rounded-xl border border-red-100 font-medium">
                  <Clock size={20} />
                  <span>100 minutes (Last order 10 min before)</span>
                </div>
                
                <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700">
                  <strong className="block mb-1 text-gray-900">Rule:</strong>
                  Please order at least 2 food items per person. (2 skewers count as 1 item).
                </div>
                
                <h3 className="text-xl font-serif font-bold mb-6 border-b pb-2">Included Drinks</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Beer</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Sapporo Classic</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Whisky</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Highball</li>
                      <li>Coke Highball</li>
                      <li>Ginger Highball</li>
                      <li>On the Rocks</li>
                      <li>With Water</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Sake</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Cold</li>
                      <li>Hot</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Shochu</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>With Hot Water</li>
                      <li>With Water</li>
                      <li>On the Rocks</li>
                      <li>Oolong High</li>
                      <li>Green Tea High</li>
                      <li>Jasmine High</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Wine</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Red Wine</li>
                      <li>White Wine</li>
                      <li>Plum Wine</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#BC002D] mb-2">Soft Drink</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>Oolong Tea</li>
                      <li>Green Tea</li>
                      <li>Jasmine Tea</li>
                      <li>Coke</li>
                      <li>Ginger Ale</li>
                      <li>Calpis</li>
                      <li>Grapefruit Juice</li>
                      <li>Apple Juice</li>
                      <li>Orange Juice</li>
                      <li>Calpis Soda</li>
                    </ul>
                  </div>
                  <div className="col-span-1 md:col-span-2">
                    <h4 className="font-bold text-[#BC002D] mb-2">Sour</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Lemon, Grape, Lime, Salt Plum, Pineapple, Mikan, Kiwi, Peach, Aloe, Acerola, Mango, Grapefruit, Shikuwasa, Calpis.
                    </p>
                  </div>
                  <div className="col-span-1 md:col-span-1">
                    <h4 className="font-bold text-[#BC002D] mb-2">Cocktail</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Cassis Orange, Koo Nyang, Malibu Coke, Kahlua Milk, Fuzzy Navel, Kitty, Operator.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10">
                  <button 
                    onClick={() => addToCart({
                      id: 'aycd-1',
                      nameJa: '飲み放題 (100分)',
                      nameEn: 'All-You-Can-Drink (100min)',
                      price: 1980,
                      description: 'Unlimited drinks for 100 minutes. Requires 2 food items per person.',
                      category: 'Plan'
                    })}
                    className="w-full py-4 bg-[#1a1a1a] text-white rounded-xl font-bold text-lg hover:bg-black transition-colors shadow-md"
                  >
                    Add All-You-Can-Drink to Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Drink Menu' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {drinkCategories.map(category => (
              <MenuSection 
                key={category} 
                title={category} 
                items={drinkMenu.filter(item => item.category === category)} 
                onAdd={addToCart} 
              />
            ))}
          </div>
        )}

        {/* Store Info Banner (Moved to bottom) */}
        <div className="mt-auto pt-16">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#BC002D]" />
              <span>5:00 p.m - 3:00 a.m. (L.O. 2:00)</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2 font-medium text-[#BC002D]">
              <span>* Otoshi (Appetizer) charge: ¥440</span>
            </div>
          </div>
        </div>

      </main>

      {/* Modals */}
      <GuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart} 
        removeFromCart={removeFromCart} 
        clearCart={clearCart} 
      />
    </div>
  );
}

