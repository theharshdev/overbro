'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, ShoppingBag, ShieldCheck, Tag } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { CartItemComponent } from './CartItemComponent';
import { FreeShippingProgress } from './FreeShippingProgress';

export const CartDrawer: React.FC = () => {
  const router = useRouter();
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    getSubtotal,
    getDiscount,
    getShippingFee,
    getFinalTotal,
    getItemCount,
    coupon,
  } = useCartStore();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const shipping = getShippingFee();
  const finalTotal = getFinalTotal();
  const totalCount = getItemCount();

  const handleCheckoutClick = () => {
    closeDrawer();
    router.push('/checkout');
  };

  const handleViewBagClick = () => {
    closeDrawer();
    router.push('/cart');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-neutral-950 border-l border-neutral-800 flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-white" />
              <h2 className="text-sm font-bold tracking-widest uppercase text-white">
                YOUR BAG ({totalCount})
              </h2>
            </div>
            <button
              type="button"
              onClick={closeDrawer}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close bag drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="p-4 border-b border-neutral-900 bg-neutral-950">
            <FreeShippingProgress subtotal={subtotal} />
          </div>

          {/* Drawer Body / Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-2">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 border border-neutral-800 rounded-full flex items-center justify-center bg-neutral-900 text-neutral-500">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    YOUR BAG IS EMPTY
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 max-w-xs">
                    Your oversized streetwear wardrobe is waiting. Explore our latest heavyweight drops.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    closeDrawer();
                    router.push('/shop');
                  }}
                  className="mt-2 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-neutral-200 transition-colors"
                >
                  EXPLORE DROPS
                </button>
              </div>
            ) : (
              <div className="divide-y divide-neutral-900">
                {items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                    compact
                  />
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer / Summary */}
          {items.length > 0 && (
            <div className="border-t border-neutral-800 p-5 bg-neutral-900/50 space-y-4">
              {/* Active Coupon Badge if any */}
              {coupon && (
                <div className="flex items-center justify-between bg-neutral-900 border border-neutral-800 p-2.5 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>{coupon.code} APPLIED</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold">
                    -₹{discount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {/* Price Rows */}
              <div className="space-y-1.5 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount</span>
                    <span className="font-mono">-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className="font-mono text-white">
                    {shipping === 0 ? (
                      <strong className="text-emerald-400">FREE</strong>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-neutral-800 text-sm font-bold text-white">
                  <span className="uppercase tracking-wider">Total</span>
                  <span className="font-mono text-base">₹{finalTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTAs */}
              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="w-full bg-white text-neutral-950 text-xs font-extrabold uppercase tracking-widest py-3.5 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleViewBagClick}
                  className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-wider py-2.5 hover:text-white hover:border-neutral-700 transition-colors"
                >
                  VIEW FULL BAG & OFFERS
                </button>
              </div>

              {/* Secure guarantee note */}
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-300" />
                <span>Guaranteed Safe & Encrypted Checkout • Cash on Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
