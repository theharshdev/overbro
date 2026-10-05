'use client';

import React from 'react';
import { ArrowUpDown } from 'lucide-react';

export type SortOption = 'featured' | 'newest' | 'bestselling' | 'price-asc' | 'price-desc';

interface ProductSortProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const ProductSort: React.FC<ProductSortProps> = ({ currentSort, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-bold uppercase tracking-wider hidden sm:flex">
        <ArrowUpDown className="w-3.5 h-3.5" />
        <span>SORT:</span>
      </div>
      <div className="relative">
        <select
          value={currentSort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="bg-neutral-900 border border-neutral-800 text-white text-xs font-semibold uppercase tracking-wider py-2 px-3 pr-8 focus:outline-none focus:border-white transition-colors cursor-pointer rounded-none appearance-none"
          aria-label="Sort products"
        >
          <option value="featured">Featured Drops</option>
          <option value="newest">Newest First</option>
          <option value="bestselling">Best Selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-400">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
