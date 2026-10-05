'use client';

import React from 'react';
import { ProductSize, ProductSizeOption } from '@/types/product';
import { Ruler } from 'lucide-react';

interface SizeSelectorProps {
  sizes: ProductSizeOption[];
  selectedSize: ProductSize;
  onSelectSize: (size: ProductSize) => void;
  onOpenSizeGuide: () => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  onOpenSizeGuide,
}) => {
  const currentOption = sizes.find((s) => s.size === selectedSize);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-neutral-400 uppercase tracking-wider">
            SIZE:
          </span>
          <span className="font-bold text-white font-mono">{selectedSize}</span>
          {currentOption && currentOption.stockCount <= 5 && currentOption.stockCount > 0 && (
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
              (ONLY {currentOption.stockCount} LEFT)
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onOpenSizeGuide}
          className="text-neutral-400 hover:text-white underline underline-offset-4 flex items-center gap-1.5 uppercase tracking-wider text-[11px] font-semibold transition-colors"
        >
          <Ruler className="w-3.5 h-3.5" />
          <span>SIZE GUIDE</span>
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {sizes.map((item) => {
          const isSelected = item.size === selectedSize;
          const isOutOfStock = !item.inStock;

          return (
            <button
              key={item.size}
              type="button"
              disabled={isOutOfStock}
              onClick={() => onSelectSize(item.size)}
              className={`h-12 border text-xs font-bold font-mono tracking-wider uppercase transition-all duration-150 flex flex-col items-center justify-center relative ${
                isSelected
                  ? 'bg-white text-neutral-950 border-white ring-1 ring-white'
                  : isOutOfStock
                  ? 'bg-neutral-950 border-neutral-900 text-neutral-600 cursor-not-allowed'
                  : 'bg-neutral-900 border-neutral-800 text-white hover:border-neutral-600'
              }`}
            >
              <span>{item.size}</span>
              {isOutOfStock && (
                <span className="text-[8px] text-neutral-600 tracking-normal block -mt-0.5">
                  SOLD OUT
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
