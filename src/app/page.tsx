'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import { Hero } from '@/components/home/Hero';
import { BrandStatement } from '@/components/home/BrandStatement';
import { FreeShippingBanner } from '@/components/home/FreeShippingBanner';
import { ProductGrid } from '@/components/product/ProductGrid';
import { PRODUCTS } from '@/data/products';

export default function HomePage() {
  const [activeDropTab, setActiveDropTab] = useState<'all' | 'heavyweight' | 'graphic' | 'core'>('all');

  // Filter products for New Drops
  const newDrops = PRODUCTS.filter((p) => {
    if (activeDropTab === 'heavyweight') return p.gsm >= 280;
    if (activeDropTab === 'graphic') return p.collection === 'after-dark';
    if (activeDropTab === 'core') return p.collection === 'the-core';
    return true;
  }).slice(0, 8);

  return (
    <div className="flex flex-col w-full">
      {/* 1. Large Cinematic Editorial Hero */}
      <Hero />

      {/* 2. New Drops Product Grid */}
      <section className="py-20 bg-neutral-950 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-neutral-900 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                <Flame className="w-4 h-4 text-red-500" />
                <span>FRESH OFF THE LOOM • 250+ GSM</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                NEW DROPS // 2026
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setActiveDropTab('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-xl transition-all ${
                  activeDropTab === 'all'
                    ? 'bg-white text-neutral-950 border-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                ALL 250+ GSM
              </button>
              <button
                type="button"
                onClick={() => setActiveDropTab('heavyweight')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-xl transition-all ${
                  activeDropTab === 'heavyweight'
                    ? 'bg-white text-neutral-950 border-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                HEAVYWEIGHT (280+ GSM)
              </button>
              <button
                type="button"
                onClick={() => setActiveDropTab('graphic')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-xl transition-all ${
                  activeDropTab === 'graphic'
                    ? 'bg-white text-neutral-950 border-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                GRAPHIC DROPS
              </button>
              <button
                type="button"
                onClick={() => setActiveDropTab('core')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded-xl transition-all ${
                  activeDropTab === 'core'
                    ? 'bg-white text-neutral-950 border-white shadow-md'
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                THE CORE (250 GSM)
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid products={newDrops} />

          {/* View All CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-700 hover:border-white text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shadow-md"
            >
              <span>VIEW COMPLETE CATALOGUE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Brand Statement Section: "COMFORT WITHOUT COMPROMISE." */}
      <BrandStatement />

      {/* 5. Free Shipping Banner */}
      <FreeShippingBanner />
    </div>
  );
}
