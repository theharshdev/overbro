'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductSort, SortOption } from '@/components/product/ProductSort';
import { PRODUCTS } from '@/data/products';

function ShopContent() {
  const searchParams = useSearchParams();

  const collection = searchParams.get('collection') || 'all';
  const searchQuery = searchParams.get('search') || searchParams.get('q') || '';
  const initialSort = (searchParams.get('sort') as SortOption) || 'featured';

  const [sort, setSort] = useState<SortOption>(initialSort);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.subtitle.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query);
        if (!matches) return false;
      }

      // Collection filter
      if (collection !== 'all' && product.collection !== collection) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'bestselling') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
      if (sort === 'newest') return (b.isNewDrop ? 1 : 0) - (a.isNewDrop ? 1 : 0);
      return 0; // featured default
    });
  }, [collection, searchQuery, sort]);

  const collectionTitle =
    collection === 'new-drop'
      ? 'NEW DROPS'
      : collection === 'the-core'
      ? 'THE CORE COLLECTION'
      : collection === 'heavyweight'
      ? 'HEAVYWEIGHT ARMOR'
      : collection === 'after-dark'
      ? 'AFTER DARK GRAPHICS'
      : 'ALL OVERSIZED TEES';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'SHOP ALL', href: '/shop' },
          ...(collection !== 'all'
            ? [
                {
                  label: collectionTitle,
                },
              ]
            : []),
        ]}
      />

      {/* Header Banner */}
      <div className="mt-4 mb-8 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          CATALOGUE // 250+ GSM DROPS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          {collectionTitle}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2">
          Engineered exclusively with heavyweight 250–320 GSM Indian combed cotton. Cut with signature drop shoulders for an effortless, confident street silhouette with zero cling.
        </p>
      </div>

      {/* Sorting Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4 border-b border-neutral-900 mb-8">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          SHOWING <strong className="text-white">{filteredProducts.length}</strong> OF{' '}
          {PRODUCTS.length} PIECES
        </span>

        {/* Sort Dropdown */}
        <ProductSort currentSort={sort} onSortChange={setSort} />
      </div>

      {/* Product Grid Area (Full Width, 4 Columns) */}
      <ProductGrid products={filteredProducts} columns="4" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs font-mono uppercase text-neutral-400">
          LOADING UBRO CATALOGUE...
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}
