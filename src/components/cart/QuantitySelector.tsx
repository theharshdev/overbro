'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  max?: number;
  onIncrease: () => void;
  onDecrease: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  max = 10,
  onIncrease,
  onDecrease,
  size = 'md',
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className="inline-flex items-center border border-neutral-800 bg-neutral-900 select-none">
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        className={`${
          isSm ? 'p-1.5' : isLg ? 'p-3' : 'p-2'
        } text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors`}
        aria-label="Decrease quantity"
      >
        <Minus className={isSm ? 'w-3 h-3' : 'w-4 h-4'} />
      </button>

      <span
        className={`font-mono text-center font-bold text-white ${
          isSm ? 'w-7 text-xs' : isLg ? 'w-12 text-base' : 'w-9 text-xs'
        }`}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        disabled={quantity >= max}
        className={`${
          isSm ? 'p-1.5' : isLg ? 'p-3' : 'p-2'
        } text-neutral-400 hover:text-white disabled:opacity-30 disabled:hover:text-neutral-400 transition-colors`}
        aria-label="Increase quantity"
      >
        <Plus className={isSm ? 'w-3 h-3' : 'w-4 h-4'} />
      </button>
    </div>
  );
};
