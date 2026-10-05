import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
  columns?: '3' | '4';
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No oversized products found matching your criteria.',
  columns = '4',
}) => {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center border border-neutral-800 bg-neutral-900/30 p-8 rounded-3xl">
        <p className="text-sm font-bold uppercase tracking-wider text-neutral-400">
          {emptyMessage}
        </p>
        <p className="text-xs text-neutral-400 mt-2">
          Explore our complete oversized catalogue or check back for upcoming drops.
        </p>
      </div>
    );
  }

  const gridClass =
    columns === '3'
      ? 'grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6'
      : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6';

  return (
    <div className={gridClass}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} priority={index < 4} />
      ))}
    </div>
  );
};
