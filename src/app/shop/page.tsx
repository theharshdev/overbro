'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters, FilterValues } from '@/components/product/ProductFilters';
import { ProductSort, SortOption } from '@/components/product/ProductSort';
import { PRODUCTS } from '@/data/products';
import { Product, ProductSize } from '@/types/product';
import { SlidersHorizontal, X } from 'lucide-react';

function ShopContent() {
  const searchParams = useSearchParams();

  // URL query params initialization
  const initialCategory = searchParams.get('category') || 'all';
  const initialCollection = searchParams.get('collection') || 'all';
  const initialSearch = searchParams.get('search') || '';
  const initialSort = (searchParams.get('sort') as SortOption) || 'featured';

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState<SortOption>(initialSort);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const [filters, setFilters] = useState<FilterValues>({
    category: initialCategory,
    sizes: [],
    colors: [],
    priceRange: 'all',
    inStockOnly: false,
    collection: initialCollection,
  });

  // Sync if URL search params change
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const col = searchParams.get('collection') || 'all';
    const search = searchParams.get('search') || '';
    setFilters((prev) => ({
      ...prev,
      category: cat,
      collection: col,
    }));
    setSearchQuery(search);
  }, [searchParams]);

  // Compute active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.category !== 'all') count++;
    if (filters.sizes.length > 0) count += filters.sizes.length;
    if (filters.colors.length > 0) count += filters.colors.length;
    if (filters.priceRange !== 'all') count++;
    if (filters.inStockOnly) count++;
    if (filters.collection !== 'all') count++;
    return count;
  }, [filters]);

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      sizes: [],
      colors: [],
      priceRange: 'all',
      inStockOnly: false,
      collection: 'all',
    });
    setSearchQuery('');
  };

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

      // Category filter
      if (filters.category !== 'all' && product.category !== filters.category) {
        return false;
      }

      // Collection filter
      if (filters.collection !== 'all' && product.collection !== filters.collection) {
        return false;
      }

      // Size filter
      if (filters.sizes.length > 0) {
        const hasSize = product.sizes.some(
          (s) => filters.sizes.includes(s.size) && s.inStock
        );
        if (!hasSize) return false;
      }

      // Color filter
      if (filters.colors.length > 0) {
        const hasColor = product.colors.some((c) =>
          filters.colors.some((filterCol) =>
            c.name.toLowerCase().includes(filterCol.toLowerCase())
          )
        );
        if (!hasColor) return false;
      }

      // Price filter
      if (filters.priceRange === 'under-1000' && product.price >= 1000) {
        return false;
      }
      if (
        filters.priceRange === '1000-1500' &&
        (product.price < 1000 || product.price > 1500)
      ) {
        return false;
      }
      if (filters.priceRange === 'above-1500' && product.price <= 1500) {
        return false;
      }

      // In Stock filter
      if (filters.inStockOnly && !product.inStock) {
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
  }, [filters, sort, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'SHOP ALL', href: '/shop' },
          ...(filters.category !== 'all'
            ? [
                {
                  label:
                    filters.category === 'oversized-t-shirts'
                      ? 'OVERSIZED T-SHIRTS'
                      : 'OVERSIZED HOODIES',
                },
              ]
            : []),
        ]}
      />

      {/* Header Banner */}
      <div className="mt-4 mb-8 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          CATALOGUE // DROP 2026
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          {filters.category === 'oversized-t-shirts'
            ? 'OVERSIZED T-SHIRTS'
            : filters.category === 'oversized-hoodies'
            ? 'OVERSIZED HOODIES'
            : 'ALL OVERSIZED PIECES'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-2">
          Engineered exclusively with heavyweight 240–450 GSM Indian combed cotton. Cut with signature drop shoulders for an effortless, confident street silhouette.
        </p>
      </div>

      {/* Active Filter Pills Bar & Sorting Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
        {/* Mobile Filter Toggle & Product Count */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTERS {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
          </button>

          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            SHOWING <strong className="text-white">{filteredProducts.length}</strong> OF{' '}
            {PRODUCTS.length} PIECES
          </span>
        </div>

        {/* Sort Dropdown */}
        <ProductSort currentSort={sort} onSortChange={setSort} />
      </div>

      {/* Active Filter Pills */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap mb-6 pb-4 border-b border-neutral-900">
          <span className="text-[11px] font-mono text-neutral-500 uppercase">ACTIVE:</span>
          {filters.category !== 'all' && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-bold text-white uppercase">
              {filters.category === 'oversized-t-shirts' ? 'T-Shirts' : 'Hoodies'}
              <button
                type="button"
                onClick={() => setFilters({ ...filters, category: 'all' })}
                className="hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.sizes.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-mono font-bold text-white uppercase"
            >
              SIZE: {s}
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    ...filters,
                    sizes: filters.sizes.filter((sz) => sz !== s),
                  })
                }
                className="hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.colors.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-bold text-white uppercase"
            >
              COLOR: {c}
              <button
                type="button"
                onClick={() =>
                  setFilters({
                    ...filters,
                    colors: filters.colors.filter((col) => col !== c),
                  })
                }
                className="hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}

          {filters.priceRange !== 'all' && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-bold text-white uppercase">
              PRICE: {filters.priceRange}
              <button
                type="button"
                onClick={() => setFilters({ ...filters, priceRange: 'all' })}
                className="hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.inStockOnly && (
            <span className="inline-flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-2.5 py-1 text-[11px] font-bold text-white uppercase">
              IN STOCK ONLY
              <button
                type="button"
                onClick={() => setFilters({ ...filters, inStockOnly: false })}
                className="hover:text-red-400"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          <button
            type="button"
            onClick={handleClearFilters}
            className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 hover:text-white underline underline-offset-4 ml-2"
          >
            CLEAR ALL
          </button>
        </div>
      )}

      {/* Main Content Layout (Sidebar + Grid) */}
      <div className="flex gap-8 items-start">
        {/* Desktop Filters Sidebar */}
        <ProductFilters
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={handleClearFilters}
          activeCount={activeFilterCount}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
        />

        {/* Product Grid Area */}
        <div className="flex-1 min-w-0">
          <ProductGrid products={filteredProducts} columns="3" />
        </div>
      </div>
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
