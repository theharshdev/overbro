'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CartItemComponent } from '@/components/cart/CartItemComponent';
import { FreeShippingProgress } from '@/components/cart/FreeShippingProgress';
import { useCartStore } from '@/store/useCartStore';
import {
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  Tag,
  Check,
  Trash2,
  Lock,
} from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    getDiscount,
    getShippingFee,
    getFinalTotal,
    getItemCount,
    coupon,
    couponError,
    applyCoupon,
    removeCoupon,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getSubtotal() : 0;
  const discount = mounted ? getDiscount() : 0;
  const shipping = mounted ? getShippingFee() : 0;
  const total = mounted ? getFinalTotal() : 0;
  const count = mounted ? getItemCount() : 0;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      const success = applyCoupon(couponCode);
      if (success) {
        setCouponCode('');
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'SHOPPING BAG' }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 mb-8 pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
            REVIEW YOUR ORDER
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            SHOPPING BAG ({count})
          </h1>
        </div>

        {items.length > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-neutral-400 hover:text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>EMPTY BAG</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="py-24 text-center border border-neutral-800 bg-neutral-900/30 p-8 max-w-xl mx-auto space-y-4">
          <div className="w-16 h-16 border border-neutral-800 rounded-full flex items-center justify-center mx-auto bg-neutral-900 text-neutral-400">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-white">
            YOUR BAG IS CURRENTLY EMPTY
          </h2>
          <p className="text-xs text-neutral-400 leading-relaxed">
            You haven't added any oversized garments yet. Discover our latest drop of heavyweight tees and hoodies.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors"
            >
              <span>SHOP NEW DROPS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Items List & Free Shipping Progress (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Free Shipping Progress Indicator */}
            <FreeShippingProgress subtotal={subtotal} />

            {/* Items List */}
            <div className="bg-neutral-950 border border-neutral-800 p-4 sm:p-6 divide-y divide-neutral-900">
              {items.map((item) => (
                <CartItemComponent
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </div>

            {/* Reassurance banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">
                  DISPATCH IN 24H
                </span>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  Express delivery with live tracking SMS
                </span>
              </div>
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">
                  7-DAY FREE EXCHANGES
                </span>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  Instant size exchange pickup
                </span>
              </div>
              <div className="p-4 bg-neutral-900/60 border border-neutral-800 text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">
                  100% COMBED COTTON
                </span>
                <span className="text-[11px] text-neutral-400 mt-1 block">
                  240–450 GSM luxury pre-shrunk fleece
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Coupon (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 sticky top-24">
            {/* Coupon Code Card */}
            <div className="bg-neutral-950 border border-neutral-800 p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                <Tag className="w-4 h-4 text-neutral-400" />
                <span>PROMO & COUPON CODE</span>
              </div>

              {coupon ? (
                <div className="p-3 bg-neutral-900 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {coupon.code}
                    </span>
                    <p className="text-[10px] text-neutral-400 mt-0.5">
                      {coupon.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs text-neutral-500 hover:text-red-400 underline font-semibold"
                  >
                    REMOVE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-2">
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="e.g. UBRO10 or FIRSTDROP"
                      className="flex-1 bg-neutral-900 border border-neutral-800 px-3 py-2 text-xs font-mono uppercase text-white placeholder-neutral-500 focus:outline-none focus:border-white"
                    />
                    <button
                      type="submit"
                      className="bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-neutral-200 transition-colors"
                    >
                      APPLY
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-[11px] text-red-400 leading-tight">
                      {couponError}
                    </p>
                  )}
                  <p className="text-[10px] text-neutral-400">
                    Try using <strong className="text-neutral-300">UBRO10</strong> for 10% off or <strong className="text-neutral-300">FIRSTDROP</strong> for ₹200 off.
                  </p>
                </form>
              )}
            </div>

            {/* Price Summary Card */}
            <div className="bg-neutral-950 border border-neutral-800 p-5 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white pb-3 border-b border-neutral-800">
                PRICE BREAKDOWN
              </h3>

              <div className="space-y-2 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Bag Subtotal ({count} items)</span>
                  <span className="font-mono text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Coupon Discount</span>
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

                <div className="flex justify-between text-[11px] text-neutral-400">
                  <span>Estimated GST</span>
                  <span>INCLUDED IN PRICE</span>
                </div>

                <div className="pt-3 border-t border-neutral-800 flex justify-between items-baseline text-sm font-bold text-white">
                  <span className="uppercase tracking-wider">Grand Total</span>
                  <span className="text-lg font-mono">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => router.push('/checkout')}
                className="w-full bg-white text-neutral-950 py-4 text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>CHECKOUT • ₹{total.toLocaleString('en-IN')}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Encrypted 256-bit Payment Security</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
