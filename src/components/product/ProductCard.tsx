'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product, ProductSize } from '@/types/product';
import { WishlistButton } from './WishlistButton';
import { useCartStore } from '@/store/useCartStore';
import { useToastStore } from '@/store/useToastStore';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [quickAddOpen, setQuickAddOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const { addItem } = useCartStore();
  const { addToast } = useToastStore();

  const activeColorObj = product.colors.find((c) => c.name === selectedColor) || product.colors[0];

  const handleQuickAddSize = (e: React.MouseEvent, size: ProductSize) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, size, activeColorObj.name, activeColorObj.hex, 1);
    addToast('ADDED TO BAG', `${product.name} (Size: ${size}) added.`, 'success');
    setQuickAddOpen(false);
  };

  const hasSecondaryImage = product.images.length > 1;

  return (
    <div
      className="group relative flex flex-col bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setQuickAddOpen(false);
      }}
    >
      {/* Top Media Container (Aspect Ratio 3:4) */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 select-none">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          {/* Main Primary Image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover object-center transition-all duration-700 ease-out ${
              hasSecondaryImage && isHovered
                ? 'opacity-0 scale-105'
                : 'opacity-100 scale-100 group-hover:scale-105'
            }`}
          />

          {/* Secondary Hover Image if available */}
          {hasSecondaryImage && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover object-center transition-all duration-700 ease-out absolute inset-0 ${
                isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          )}
        </Link>

        {/* Top Badges (New / Bestseller / GSM) */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
          {product.badge && (
            <span
              className={`px-2 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest ${
                product.badge === 'BESTSELLER'
                  ? 'bg-white text-neutral-950'
                  : product.badge === 'HEAVYWEIGHT'
                  ? 'bg-neutral-800 text-neutral-100 border border-neutral-700'
                  : product.badge === 'NEW DROP'
                  ? 'bg-red-600 text-white'
                  : 'bg-neutral-900 text-neutral-200 border border-neutral-800'
              }`}
            >
              {product.badge}
            </span>
          )}
          <span className="px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold bg-neutral-950/80 backdrop-blur-sm text-neutral-300 border border-neutral-800 self-start">
            {product.gsm} GSM
          </span>
        </div>

        {/* Wishlist Heart Button (Top Right) */}
        <div className="absolute top-2.5 right-2.5 z-20">
          <div className="bg-neutral-950/70 backdrop-blur-md p-1.5 border border-neutral-800/80 hover:border-neutral-600 transition-colors">
            <WishlistButton productId={product.id} productName={product.name} size="sm" />
          </div>
        </div>

        {/* Quick Add Bar (Sliding up from bottom) */}
        <div className="absolute bottom-0 inset-x-0 z-20 transition-all duration-300">
          {!quickAddOpen ? (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setQuickAddOpen(true);
              }}
              className="w-full py-2.5 bg-neutral-950/90 backdrop-blur-md border-t border-neutral-800 text-white text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-neutral-950 flex items-center justify-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>QUICK ADD</span>
            </button>
          ) : (
            <div className="bg-neutral-950/95 backdrop-blur-md border-t border-neutral-800 p-2 text-center animate-in fade-in slide-in-from-bottom-2">
              <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1.5 tracking-wider">
                SELECT SIZE
              </span>
              <div className="flex items-center justify-center gap-1 flex-wrap">
                {product.sizes.map((s) => (
                  <button
                    key={s.size}
                    type="button"
                    disabled={!s.inStock}
                    onClick={(e) => handleQuickAddSize(e, s.size)}
                    className={`w-7 h-7 text-[10px] font-bold font-mono transition-colors flex items-center justify-center border ${
                      s.inStock
                        ? 'border-neutral-700 bg-neutral-900 text-white hover:bg-white hover:text-neutral-950'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-600 line-through cursor-not-allowed'
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2">
        <div>
          {/* Color Dots */}
          <div className="flex items-center gap-1.5 mb-1.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setSelectedColor(c.name)}
                className={`w-2.5 h-2.5 rounded-full border transition-all ${
                  selectedColor === c.name
                    ? 'ring-1 ring-white ring-offset-1 ring-offset-neutral-950 scale-110 border-white'
                    : 'border-neutral-700 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.name}
                aria-label={`Select ${c.name}`}
              />
            ))}
            <span className="text-[10px] text-neutral-400 ml-1 truncate">
              {activeColorObj?.name}
            </span>
          </div>

          {/* Title */}
          <Link href={`/products/${product.slug}`} className="block">
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider line-clamp-1 group-hover:underline">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Fit tag */}
          <span className="text-[10px] text-neutral-400 block line-clamp-1 mt-0.5 font-medium">
            {product.subtitle}
          </span>
        </div>

        {/* Pricing */}
        <div className="pt-2 border-t border-neutral-900 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xs sm:text-sm font-bold font-mono text-white">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-[10px] sm:text-xs font-mono text-neutral-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
          {product.discountPercentage && (
            <span className="text-[9px] font-mono font-bold text-emerald-400">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
