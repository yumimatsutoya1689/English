import React, { useState } from 'react';
import { MenuItem, MenuOption } from '../data/menu';

interface MenuItemCardProps {
  key?: React.Key;
  item: MenuItem;
  onAdd: (item: MenuItem, selectedOption?: MenuOption) => void;
}

export default function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  const [selectedOption, setSelectedOption] = useState<MenuOption | undefined>(
    item.options ? item.options.choices[0] : undefined
  );

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex-1">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="font-semibold text-gray-900 leading-tight">{item.nameEn}</h3>
          <span className="font-mono font-medium text-[#BC002D] whitespace-nowrap">¥{item.price}</span>
        </div>
        <p className="text-xs text-gray-500 mb-2 font-medium">{item.nameJa}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.description}</p>
        
        {item.options && (
          <div className="mb-4">
            <label className="block text-xs font-bold text-gray-700 mb-1.5">{item.options.name}:</label>
            <select 
              className="w-full text-sm border border-gray-200 rounded-xl p-2.5 bg-gray-50 outline-none focus:border-[#BC002D] focus:ring-1 focus:ring-[#BC002D] transition-all"
              value={selectedOption?.labelEn}
              onChange={(e) => {
                const opt = item.options?.choices.find(c => c.labelEn === e.target.value);
                setSelectedOption(opt);
              }}
            >
              {item.options.choices.map(opt => (
                <option key={opt.labelEn} value={opt.labelEn}>
                  {opt.labelEn} {opt.extraPrice > 0 ? `(+¥${opt.extraPrice})` : ''}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <button 
        onClick={() => onAdd(item, selectedOption)}
        className="w-full py-2.5 px-4 rounded-xl border border-[#BC002D] text-[#BC002D] font-medium text-sm hover:bg-[#BC002D] hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto"
      >
        Add to Order
      </button>
    </div>
  );
}
