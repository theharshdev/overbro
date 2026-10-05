'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductCard } from '@/components/product/ProductCard';
import { useWishlistStore } from '@/store/useWishlistStore';
import { PRODUCTS } from '@/data/products';
import { Heart, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function WishlistPage() {
  const [mounted, setMounted] = useState(false);
  const { productIds, clearWishlist } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const wishlistProducts = mounted
    ? PRODUCTS.filter((p) => productIds.includes(p.id))
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'WISHLIST' }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 mb-8 pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
            SAVED PIECES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            YOUR WISHLIST
          </h1>
        </div>

        {wishlistProducts.length > 0 && (
          <button
            type="button"
            onClick={clearWishlist}
            className="text-xs text-neutral-400 hover:text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>CLEAR ALL</span>
          </button>
        )}
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="py-24 text-center border border-neutral-800 bg-neutral-900/30 p-8 max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 border border-neutral-800 rounded-full flex items-center justify-center mx-auto bg-neutral-900 text-neutral-400">
            <Heart className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-white">
            YOUR WISHLIST IS EMPTY
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Hit the heart icon on any 250+ GSM oversized T-shirt to bookmark it for later. Items remain saved in your browser.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              <span>EXPLORE NEW DROPS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
