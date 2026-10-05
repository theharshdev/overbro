'use client';

import React, { useState, useMemo } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters, FilterValues } from '@/components/product/ProductFilters';
import { ProductSort, SortOption } from '@/components/product/ProductSort';
import { PRODUCTS } from '@/data/products';
import { ProductSize } from '@/types/product';
import { SlidersHorizontal } from 'lucide-react';

export default function TShirtsPage() {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sort, setSort] = useState<SortOption>('featured');

  const [filters, setFilters] = useState<FilterValues>({
    category: 'oversized-t-shirts',
    sizes: [],
    colors: [],
    priceRange: 'all',
    inStockOnly: false,
    collection: 'all',
  });

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.sizes.length > 0) count += filters.sizes.length;
    if (filters.colors.length > 0) count += filters.colors.length;
    if (filters.priceRange !== 'all') count++;
    if (filters.inStockOnly) count++;
    return count;
  }, [filters]);

  const handleClearFilters = () => {
    setFilters({
      category: 'oversized-t-shirts',
      sizes: [],
      colors: [],
      priceRange: 'all',
      inStockOnly: false,
      collection: 'all',
    });
  };

  const tShirtProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'oversized-t-shirts')
      .filter((product) => {
        if (filters.sizes.length > 0) {
          const hasSize = product.sizes.some(
            (s) => filters.sizes.includes(s.size) && s.inStock
          );
          if (!hasSize) return false;
        }

        if (filters.colors.length > 0) {
          const hasColor = product.colors.some((c) =>
            filters.colors.some((filterCol) =>
              c.name.toLowerCase().includes(filterCol.toLowerCase())
            )
          );
          if (!hasColor) return false;
        }

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

        if (filters.inStockOnly && !product.inStock) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sort === 'price-asc') return a.price - b.price;
        if (sort === 'price-desc') return b.price - a.price;
        if (sort === 'bestselling') return (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0);
        if (sort === 'newest') return (b.isNewDrop ? 1 : 0) - (a.isNewDrop ? 1 : 0);
        return 0;
      });
  }, [filters, sort]);

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>FILTERS {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
          </button>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            SHOWING <strong className="text-white">{tShirtProducts.length}</strong> OVERSIZED TEES
          </span>
        </div>

        <ProductSort currentSort={sort} onSortChange={setSort} />
      </div>

      {/* Main Content */}
      <div className="flex gap-8 items-start">
        <ProductFilters
          filters={filters}
          onFilterChange={setFilters}
          onClearFilters={handleClearFilters}
          activeCount={activeFilterCount}
          isOpenMobile={mobileFilterOpen}
          onCloseMobile={() => setMobileFilterOpen(false)}
          categoryLocked={true}
        />

        <div className="flex-1 min-w-0">
          <ProductGrid products={tShirtProducts} columns="3" />
        </div>
      </div>
    </div>
  );
}
