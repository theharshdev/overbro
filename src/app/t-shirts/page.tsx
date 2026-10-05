'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductSort, SortOption } from '@/components/product/ProductSort';
import { PRODUCTS } from '@/data/products';

export default function TShirtsPage() {
  const [sort, setSort] = useState<SortOption>('featured');

  const tShirtProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'oversized-t-shirts').sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'bestselling') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      if (sort === 'newest') return (b.isNewDrop ? 1 : 0) - (a.isNewDrop ? 1 : 0);
      return 0;
    });
  }, [sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'OVERSIZED T-SHIRTS' }]} />

      {/* Hero Category Banner */}
      <div className="mt-4 mb-8 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          250 – 320 GSM HEAVYWEIGHT
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          OVERSIZED T-SHIRTS
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2">
          Engineered with an exaggerated 4-inch drop shoulder, reinforced 1.25" neck ribbing that never curls, and high-density long-staple Indian combed cotton.
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4 border-b border-neutral-900 mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          SHOWING <strong className="text-white">{tShirtProducts.length}</strong> OVERSIZED TEES
        </span>

        <ProductSort currentSort={sort} onSortChange={setSort} />
      </div>

      {/* Main Content (Full Width, 4 Columns) */}
      <ProductGrid products={tShirtProducts} columns="4" />
    </div>
  );
}
