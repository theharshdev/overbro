'use client';

import React from 'react';
import { Filter, X, RotateCcw } from 'lucide-react';
import { ProductSize } from '@/types/product';

export interface FilterValues {
  category: string;
  sizes: ProductSize[];
  colors: string[];
  priceRange: string; // 'all' | 'under-1000' | '1000-1500' | 'above-1500'
  inStockOnly: boolean;
  collection: string;
}

interface ProductFiltersProps {
  filters: FilterValues;
  onFilterChange: (newFilters: FilterValues) => void;
  onClearFilters: () => void;
  activeCount: number;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  categoryLocked?: boolean;
}

const AVAILABLE_SIZES: ProductSize[] = ['S', 'M', 'L', 'XL', 'XXL'];

const AVAILABLE_COLORS = [
  { name: 'Black', hex: '#0f0f10' },
  { name: 'White', hex: '#f0ece1' },
  { name: 'Charcoal', hex: '#2b2c30' },
  { name: 'Olive', hex: '#3d4438' },
  { name: 'Navy', hex: '#161d2d' },
  { name: 'Ochre', hex: '#875d34' },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  activeCount,
  isOpenMobile = false,
  onCloseMobile,
  categoryLocked = false,
}) => {
  const toggleSize = (size: ProductSize) => {
    const updated = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: updated });
  };

  const toggleColor = (colorName: string) => {
    const updated = filters.colors.includes(colorName)
      ? filters.colors.filter((c) => c !== colorName)
      : [...filters.colors, colorName];
    onFilterChange({ ...filters, colors: updated });
  };

  const handlePriceChange = (range: string) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  const handleCategoryChange = (category: string) => {
    onFilterChange({ ...filters, category });
  };

  const content = (
    <div className="space-y-7 text-xs">
      {/* Header for Active Filter Stats */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-white" />
          <span className="font-bold text-white uppercase tracking-wider">
            FILTERS {activeCount > 0 ? `(${activeCount})` : ''}
          </span>
        </div>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-neutral-400 hover:text-white flex items-center gap-1 text-[11px] font-semibold transition-colors"
          >
            <RotateCcw className="w-3 h-3" />
            <span>RESET</span>
          </button>
        )}
      </div>

      {/* Category Filter (if not locked to a specific page) */}
      {!categoryLocked && (
        <div className="space-y-3">
          <h4 className="font-bold uppercase tracking-wider text-neutral-400 text-[11px]">
            CATEGORY
          </h4>
          <div className="space-y-2">
            {[
              { id: 'all', label: 'All Oversized Pieces' },
              { id: 'oversized-t-shirts', label: 'Oversized T-Shirts (240–300 GSM)' },
              { id: 'oversized-hoodies', label: 'Oversized Hoodies (400–450 GSM)' },
            ].map((cat) => (
              <label
                key={cat.id}
                className="flex items-center gap-2.5 cursor-pointer group select-none"
              >
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === cat.id}
                  onChange={() => handleCategoryChange(cat.id)}
                  className="w-3.5 h-3.5 accent-white cursor-pointer"
                />
                <span
                  className={`text-xs transition-colors ${
                    filters.category === cat.id
                      ? 'text-white font-bold'
                      : 'text-neutral-400 group-hover:text-white'
                  }`}
                >
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Size Filter */}
      <div className="space-y-3">
        <h4 className="font-bold uppercase tracking-wider text-neutral-400 text-[11px]">
          SIZE
        </h4>
        <div className="grid grid-cols-5 gap-1.5">
          {AVAILABLE_SIZES.map((size) => {
            const isSelected = filters.sizes.includes(size);
            return (
              <button
                key={size}
                type="button"
                onClick={() => toggleSize(size)}
                className={`py-2 text-xs font-mono font-bold uppercase border transition-all ${
                  isSelected
                    ? 'bg-white text-neutral-950 border-white ring-1 ring-white'
                    : 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-600'
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Filter */}
      <div className="space-y-3">
        <h4 className="font-bold uppercase tracking-wider text-neutral-400 text-[11px]">
          PALETTE & SHADES
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {AVAILABLE_COLORS.map((color) => {
            const isSelected = filters.colors.includes(color.name);
            return (
              <button
                key={color.name}
                type="button"
                onClick={() => toggleColor(color.name)}
                className={`flex items-center gap-2 p-2 border transition-all ${
                  isSelected
                    ? 'border-white bg-neutral-900 text-white'
                    : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-700'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-none border border-neutral-700 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-[11px] font-medium truncate">{color.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <h4 className="font-bold uppercase tracking-wider text-neutral-400 text-[11px]">
          PRICE RANGE
        </h4>
        <div className="space-y-2">
          {[
            { id: 'all', label: 'All Prices' },
            { id: 'under-1000', label: 'Under ₹1,000' },
            { id: '1000-1500', label: '₹1,000 to ₹1,500' },
            { id: 'above-1500', label: 'Above ₹1,500' },
          ].map((priceOption) => (
            <label
              key={priceOption.id}
              className="flex items-center gap-2.5 cursor-pointer group select-none"
            >
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === priceOption.id}
                onChange={() => handlePriceChange(priceOption.id)}
                className="w-3.5 h-3.5 accent-white cursor-pointer"
              />
              <span
                className={`text-xs transition-colors ${
                  filters.priceRange === priceOption.id
                    ? 'text-white font-bold'
                    : 'text-neutral-400 group-hover:text-white'
                }`}
              >
                {priceOption.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability / In Stock */}
      <div className="pt-2 border-t border-neutral-800">
        <label className="flex items-center justify-between cursor-pointer select-none">
          <span className="font-bold uppercase tracking-wider text-neutral-300 text-xs">
            IN STOCK ONLY
          </span>
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onFilterChange({ ...filters, inStockOnly: e.target.checked })}
            className="w-4 h-4 accent-white rounded-none cursor-pointer"
          />
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar View */}
      <aside className="hidden lg:block w-64 flex-shrink-0 bg-neutral-950 border border-neutral-800 p-5 self-start sticky top-24">
        {content}
      </aside>

      {/* Mobile Drawer / Bottom Sheet */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onCloseMobile}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <span className="text-sm font-bold uppercase tracking-widest text-white">
                  FILTER PRODUCTS
                </span>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1.5 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {content}
            </div>

            <div className="pt-6 border-t border-neutral-800 mt-8 space-y-2">
              <button
                type="button"
                onClick={onCloseMobile}
                className="w-full bg-white text-neutral-950 font-bold uppercase tracking-wider py-3 text-xs"
              >
                APPLY FILTERS
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
