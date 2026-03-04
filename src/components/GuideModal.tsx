import { X } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: GuideModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-[#F5F2ED] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b border-[#1a1a1a]/10 bg-white">
          <h2 className="text-xl font-serif font-semibold text-[#BC002D]">To Enjoy Our Izakaya</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto space-y-6">
          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-[#BC002D] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Otoshi (Appetizer) Culture
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In Japanese Izakayas, a small appetizer called "Otoshi" is served to everyone upon seating. It acts as a seating charge and a quick bite while you wait for your first order.
            </p>
            <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg text-sm font-medium text-[#BC002D]">
              Our Otoshi charge is ¥440 per person.
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-[#BC002D] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Sharing Style
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Izakaya food is meant to be shared! We recommend ordering a few dishes at a time for the table and sharing them with your friends.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-[#BC002D] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
              How to Call Staff
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Don't be shy! When you want to order or need assistance, simply raise your hand and say loudly:
            </p>
            <div className="mt-2 text-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3">
              <p className="text-xl font-bold text-[#BC002D]">"Sumimasen!"</p>
              <p className="text-xs text-gray-500 mt-1">(Excuse me!)</p>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed font-medium bg-gray-100 p-2 rounded-lg text-center">
              * There is also a call button on the table you can press!
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-[#BC002D] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
              "Kanpai!" (Cheers)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              In Japan, "Cheers" is called <strong>"Kanpai"</strong>. Let's try saying it with your drinks!
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-[#BC002D] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
              Communication
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Only one staff member can speak a little English. We would appreciate it if you could use a smartphone translator for basic communication. 
              However, the English-speaking staff member would be very happy if you try to communicate with them in simple English!
            </p>
          </section>
        </div>
        
        <div className="p-4 border-t border-[#1a1a1a]/10 bg-white">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-[#BC002D] text-white rounded-xl font-medium hover:bg-[#a00026] transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
