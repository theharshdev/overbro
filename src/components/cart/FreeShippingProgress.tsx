'use client';

import React from 'react';
import { Truck, CheckCircle2 } from 'lucide-react';
import { FREE_SHIPPING_THRESHOLD } from '@/store/useCartStore';

interface FreeShippingProgressProps {
  subtotal: number;
}

export const FreeShippingProgress: React.FC<FreeShippingProgressProps> = ({ subtotal }) => {
  const isUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const percentage = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <div className="bg-neutral-900/90 border border-neutral-800 p-3.5 space-y-2 select-none">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          {isUnlocked ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <Truck className="w-4 h-4 text-neutral-300" />
          )}
          <span className="font-semibold uppercase tracking-wider text-neutral-200">
            {isUnlocked ? (
              <span className="text-emerald-400">YOU'VE UNLOCKED FREE SHIPPING!</span>
            ) : (
              <span>
                ADD <strong className="text-white">₹{remaining.toLocaleString('en-IN')}</strong> MORE FOR FREE SHIPPING
              </span>
            )}
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400">{percentage}%</span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full h-1.5 bg-neutral-800 rounded-none overflow-hidden relative">
        <div
          className={`h-full transition-all duration-500 ease-out ${
            isUnlocked ? 'bg-emerald-400' : 'bg-white'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      {!isUnlocked && (
        <p className="text-[10px] text-neutral-400 text-right">
          Standard delivery fee: ₹99 on orders under ₹{FREE_SHIPPING_THRESHOLD}
        </p>
      )}
    </div>
  );
};
