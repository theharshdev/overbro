'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGrid } from '@/components/product/ProductGrid';
import { PRODUCTS } from '@/data/products';
import { Search, X } from 'lucide-react';

function SearchPageContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || searchParams.get('search') || '';
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const q = searchParams.get('q') || searchParams.get('search') || '';
    setQuery(q);
  }, [searchParams]);

  const trimmed = query.trim().toLowerCase();
  const searchResults = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed) ||
          p.subtitle.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.fabric.toLowerCase().includes(trimmed)
      )
    : PRODUCTS;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'SEARCH' }]} />

      <div className="mt-4 mb-8 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          CATALOGUE DISCOVERY
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          SEARCH RESULTS
        </h1>
      </div>

      {/* Search Input Bar */}
      <div className="relative max-w-xl mb-8">
        <div className="relative flex items-center border border-neutral-800 bg-neutral-900 px-4 py-3 focus-within:border-white transition-colors">
          <Search className="w-5 h-5 text-neutral-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search oversized tees, hoodies, colors, GSM..."
            className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none uppercase tracking-wider font-semibold"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-neutral-500 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mb-6">
        <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
          SHOWING <strong className="text-white">{searchResults.length}</strong>{' '}
          {searchResults.length === 1 ? 'PIECE' : 'PIECES'}{' '}
          {trimmed && (
            <span>
              FOR <strong className="text-white">"{query}"</strong>
            </span>
          )}
        </span>
      </div>

      <ProductGrid
        products={searchResults}
        emptyMessage={`No oversized items matched "${query}".`}
      />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs font-mono uppercase text-neutral-400">
          SEARCHING CATALOGUE...
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
