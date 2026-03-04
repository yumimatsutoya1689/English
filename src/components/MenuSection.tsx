import React from 'react';
import { MenuItem, MenuOption } from '../data/menu';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  key?: React.Key;
  title: string;
  items: MenuItem[];
  onAdd: (item: MenuItem, selectedOption?: MenuOption) => void;
}

export default function MenuSection({ title, items, onAdd }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-serif font-semibold text-[#1a1a1a] mb-6 border-b-2 border-[#BC002D] pb-2 inline-block">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <MenuItemCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}
