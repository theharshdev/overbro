'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';
import { useSearchStore } from '@/store/useSearchStore';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';

const POPULAR_SEARCHES = [
  'Oversized Black Tee',
  'Monolith 320 GSM',
  'Heavyweight 280 GSM',
  'Acid Reign Graphic',
  'Charcoal Washed',
  'Tokyo Mirage',
  'Bone Ecru',
];

export const SearchOverlay: React.FC = () => {
  const router = useRouter();
  const { isOpen, query, closeSearch, setQuery } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeSearch]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const filteredProducts: Product[] = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.collection.toLowerCase().includes(trimmed) ||
          p.fabric.toLowerCase().includes(trimmed) ||
          p.subtitle.toLowerCase().includes(trimmed)
      )
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trimmed) {
      closeSearch();
      router.push(`/shop?search=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={closeSearch}
      />

      <div className="relative min-h-screen max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-24">
        {/* Top Close Button */}
        <div className="flex justify-end pb-4">
          <button
            type="button"
            onClick={closeSearch}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors p-2 rounded-full hover:bg-neutral-900"
          >
            <span>CLOSE [ESC]</span>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Form */}
        <form onSubmit={handleSearchSubmit} className="relative mt-2">
          <div className="relative flex items-center bg-neutral-900/80 border border-neutral-800 focus-within:border-white transition-colors px-4 py-3.5 rounded-2xl shadow-xl">
            <Search className="w-6 h-6 text-neutral-400 mr-4 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search 250+ GSM oversized tees, graphics, weights..."
              className="w-full bg-transparent text-xl sm:text-2xl font-extrabold text-white placeholder-neutral-500 focus:outline-none tracking-tight uppercase"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-neutral-500 hover:text-white p-1 rounded-full hover:bg-neutral-800"
                aria-label="Clear query"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </form>

        {/* Quick Suggestion Chips */}
        <div className="mt-6 flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-neutral-400 mr-2">
            <TrendingUp className="w-3.5 h-3.5 text-neutral-300" />
            <span>POPULAR:</span>
          </div>
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => handleSuggestionClick(term)}
              className="text-xs font-semibold px-3.5 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 uppercase tracking-wider rounded-full transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Live Search Results */}
        <div className="mt-10">
          {query.trim() === '' ? (
            <div className="pt-8 border-t border-neutral-900 text-center">
              <span className="text-xs uppercase tracking-widest text-neutral-400 font-bold block mb-4">
                EXPLORE CURATED TEES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Link
                  href="/t-shirts"
                  onClick={closeSearch}
                  className="p-5 bg-neutral-900/80 border border-neutral-800 hover:border-white transition-colors text-left flex justify-between items-center group rounded-2xl shadow-lg"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      ALL OVERSIZED TEES
                    </h4>
                    <span className="text-xs text-neutral-400">250 - 320 GSM Pure Cotton</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <Link
                  href="/shop?collection=heavyweight"
                  onClick={closeSearch}
                  className="p-5 bg-neutral-900/80 border border-neutral-800 hover:border-white transition-colors text-left flex justify-between items-center group rounded-2xl shadow-lg"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                      HEAVYWEIGHT ARMOR
                    </h4>
                    <span className="text-xs text-neutral-400">280 - 320 GSM Zero Cling</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {filteredProducts.length} PRODUCTS FOUND FOR "{query}"
                </span>
                <Link
                  href={`/shop?search=${encodeURIComponent(query)}`}
                  onClick={closeSearch}
                  className="text-xs text-white hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider"
                >
                  <span>VIEW ALL IN SHOP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={closeSearch}
                    className="p-3 bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-colors flex gap-3 group rounded-2xl shadow-md"
                  >
                    <div className="relative w-16 h-20 bg-neutral-950 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold block">
                        {product.gsm} GSM • OVERSIZED TEE
                      </span>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate group-hover:underline">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-mono font-bold text-white">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] font-mono text-neutral-500 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 border border-neutral-900 bg-neutral-900/30 rounded-3xl p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                NO PIECES FOUND MATCHING "{query}"
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Try searching for "250 GSM", "320 GSM", "Acid Reign", "Monolith", or browse our curated catalog.
              </p>
              <Link
                href="/shop"
                onClick={closeSearch}
                className="inline-block mt-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-neutral-200 transition-colors rounded-xl shadow-md"
              >
                VIEW FULL COLLECTION
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
