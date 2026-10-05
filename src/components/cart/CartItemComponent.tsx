'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { CartItem } from '@/types/product';
import { QuantitySelector } from './QuantitySelector';

interface CartItemComponentProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  compact?: boolean;
}

export const CartItemComponent: React.FC<CartItemComponentProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  compact = false,
}) => {
  return (
    <div className="flex gap-4 py-4 border-b border-neutral-900 last:border-b-0 items-start">
      {/* Thumbnail */}
      <Link
        href={`/products/${item.slug}`}
        className={`relative ${
          compact ? 'w-20 h-24' : 'w-24 h-32'
        } bg-neutral-900 flex-shrink-0 overflow-hidden group border border-neutral-800`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 80px, 96px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between min-h-full">
        <div>
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/products/${item.slug}`}
              className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider hover:underline line-clamp-1"
            >
              {item.name}
            </Link>
            <button
              type="button"
              onClick={() => onRemove(item.id)}
              className="text-neutral-500 hover:text-red-400 p-1 transition-colors"
              aria-label={`Remove ${item.name} from bag`}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 mt-1.5 text-xs text-neutral-400">
            <span className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 font-bold uppercase text-[10px] text-white">
              SIZE: {item.size}
            </span>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span
                className="w-2.5 h-2.5 rounded-full border border-neutral-700"
                style={{ backgroundColor: item.colorHex }}
              />
              <span className="text-neutral-300">{item.color}</span>
            </div>
          </div>
        </div>

        {/* Pricing & Stepper */}
        <div className="flex items-center justify-between mt-3 pt-2">
          <QuantitySelector
            quantity={item.quantity}
            max={item.maxStock}
            onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
            onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
            size="sm"
          />

          <div className="text-right">
            <span className="text-xs sm:text-sm font-bold font-mono text-white">
              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
            </span>
            {item.quantity > 1 && (
              <span className="block text-[10px] text-neutral-500 font-mono">
                ₹{item.price.toLocaleString('en-IN')} each
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
