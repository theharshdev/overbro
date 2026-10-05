'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Product, ProductSize } from '@/types/product';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductGallery } from '@/components/product/ProductGallery';
import { SizeSelector } from '@/components/product/SizeSelector';
import { ColorSelector } from '@/components/product/ColorSelector';
import { QuantitySelector } from '@/components/cart/QuantitySelector';
import { ProductAccordion } from '@/components/product/ProductAccordion';
import { SizeGuideModal } from '@/components/product/SizeGuideModal';
import { WishlistButton } from '@/components/product/WishlistButton';
import { ProductGrid } from '@/components/product/ProductGrid';
import { useCartStore } from '@/store/useCartStore';
import { useToastStore } from '@/store/useToastStore';
import {
  ShoppingBag,
  Zap,
  Truck,
  RotateCcw,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({
  product,
  relatedProducts,
}) => {
  const router = useRouter();
  const { addItem } = useCartStore();
  const { addToast } = useToastStore();

  // Find first in-stock size
  const firstInStockSize =
    product.sizes.find((s) => s.inStock)?.size || product.sizes[0].size;

  const [selectedSize, setSelectedSize] = useState<ProductSize>(firstInStockSize);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || ''
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  const activeColorObj =
    product.colors.find((c) => c.name === selectedColor) || product.colors[0];

  const currentSizeOption = product.sizes.find((s) => s.size === selectedSize);
  const maxStock = currentSizeOption ? currentSizeOption.stockCount : 10;
  const isOutOfStock = !currentSizeOption || !currentSizeOption.inStock;

  const handleAddToCart = () => {
    if (isOutOfStock) return;
    setIsAdding(true);
    addItem(
      product,
      selectedSize,
      activeColorObj.name,
      activeColorObj.hex,
      quantity
    );
    addToast(
      'ADDED TO BAG',
      `${product.name} (Size: ${selectedSize}, Qty: ${quantity}) has been added.`,
      'success'
    );
    setTimeout(() => setIsAdding(false), 400);
  };

  const handleBuyNow = () => {
    if (isOutOfStock) return;
    addItem(
      product,
      selectedSize,
      activeColorObj.name,
      activeColorObj.hex,
      quantity
    );
    router.push('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'SHOP', href: '/shop' },
          { label: 'OVERSIZED TEES', href: '/t-shirts' },
          { label: product.name },
        ]}
      />

      {/* Main 2-Column Product Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-6">
        {/* Left Column: Image Gallery (7 Cols) */}
        <div className="lg:col-span-7">
          <ProductGallery
            images={product.images}
            productName={product.name}
            badge={product.badge}
            gsm={product.gsm}
          />
        </div>

        {/* Right Column: Product Controls & Information (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header & Badges */}
          <div className="space-y-2 border-b border-neutral-800 pb-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold">
                {product.collectionLabel} • {product.gsm} GSM HEAVYWEIGHT
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              {product.name}
            </h1>

            <p className="text-xs text-neutral-400 font-medium">
              {product.subtitle}
            </p>

            {/* Ratings & Reviews */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-white">
                {product.rating}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs text-neutral-400 underline underline-offset-4">
                {product.reviewCount} Verified Reviews
              </span>
            </div>

            {/* Price block */}
            <div className="flex items-baseline gap-3 pt-3">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm sm:text-base font-mono text-neutral-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
              {product.discountPercentage && (
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-900/60 px-2 py-0.5">
                  SAVE {product.discountPercentage}%
                </span>
              )}
            </div>
            <span className="text-[10px] text-neutral-400 block">
              Inclusive of all taxes. Free shipping applied at checkout on orders over ₹999.
            </span>
          </div>

          {/* Color Selector */}
          <ColorSelector
            colors={product.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
          />

          {/* Size Selector */}
          <SizeSelector
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
            onOpenSizeGuide={() => setSizeGuideOpen(true)}
          />

          {/* Quantity & Action Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                QUANTITY:
              </span>
              <QuantitySelector
                quantity={quantity}
                max={maxStock}
                onDecrease={() => setQuantity((q) => Math.max(1, q - 1))}
                onIncrease={() => setQuantity((q) => Math.min(maxStock, q + 1))}
                size="md"
              />
            </div>

            {/* Main Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                className={`py-4 px-6 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border select-none ${
                  isOutOfStock
                    ? 'bg-neutral-900 border-neutral-800 text-neutral-600 cursor-not-allowed'
                    : isAdding
                    ? 'bg-emerald-500 text-neutral-950 border-emerald-500'
                    : 'bg-white text-neutral-950 border-white hover:bg-neutral-200'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}</span>
              </button>

              <button
                type="button"
                disabled={isOutOfStock}
                onClick={handleBuyNow}
                className={`py-4 px-6 text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 border select-none ${
                  isOutOfStock
                    ? 'bg-neutral-950 border-neutral-900 text-neutral-600 cursor-not-allowed'
                    : 'bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 hover:border-white'
                }`}
              >
                <Zap className="w-4 h-4" />
                <span>BUY NOW</span>
              </button>
            </div>

            {/* Wishlist Link Button */}
            <div className="pt-2">
              <WishlistButton
                productId={product.id}
                productName={product.name}
                size="md"
                showText={true}
                className="w-full py-3 bg-neutral-900/60 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700"
              />
            </div>
          </div>

          {/* Quick Perks Strip */}
          <div className="grid grid-cols-3 gap-2 py-4 border-y border-neutral-900 text-center">
            <div className="p-2 space-y-1">
              <Truck className="w-4 h-4 text-neutral-400 mx-auto" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider block">
                FREE SHIPPING
              </span>
              <span className="text-[9px] text-neutral-400 block">Orders over ₹999</span>
            </div>
            <div className="p-2 space-y-1">
              <RotateCcw className="w-4 h-4 text-neutral-400 mx-auto" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider block">
                7-DAY EXCHANGES
              </span>
              <span className="text-[9px] text-neutral-400 block">Doorstep pickup</span>
            </div>
            <div className="p-2 space-y-1">
              <ShieldCheck className="w-4 h-4 text-neutral-400 mx-auto" />
              <span className="text-[10px] font-bold text-white uppercase tracking-wider block">
                CASH ON DELIVERY
              </span>
              <span className="text-[9px] text-neutral-400 block">Available nationwide</span>
            </div>
          </div>

          {/* Detailed Product Accordion */}
          <ProductAccordion product={product} />
        </div>
      </div>

      {/* Complete the Look / Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 pt-12 border-t border-neutral-800">
          <div className="mb-8">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
              COMPLETE THE DRIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              YOU MAY ALSO LIKE
            </h2>
          </div>

          <ProductGrid products={relatedProducts} columns="4" />
        </section>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={sizeGuideOpen}
        onClose={() => setSizeGuideOpen(false)}
        category={product.category}
      />
    </div>
  );
};
