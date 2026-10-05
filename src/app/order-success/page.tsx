'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowRight, Package, Truck, ShoppingBag, Sparkles } from 'lucide-react';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'UB-894210';
  const [latestOrder, setLatestOrder] = useState<any>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ubro-latest-order');
      if (stored) {
        setLatestOrder(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
      {/* Confirmation Badge */}
      <div className="w-20 h-20 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-900 border border-neutral-800 text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold mb-3 rounded-full">
        <Sparkles className="w-3.5 h-3.5" />
        <span>PAYMENT CONFIRMED // ORDER PLACED</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
        THANK YOU FOR YOUR DROP.
      </h1>

      <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-lg mx-auto">
        Your order <strong className="text-white font-mono">{orderId}</strong> is confirmed and entered into our warehouse dispatch queue.
      </p>

      {/* Order Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10 text-left">
        <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-1 rounded-2xl shadow-md">
          <span className="text-[10px] font-mono text-neutral-400 uppercase">
            ORDER IDENTIFIER
          </span>
          <p className="text-sm font-bold font-mono text-white">{orderId}</p>
          <span className="text-[10px] text-neutral-400 block">Save for support tracking</span>
        </div>

        <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-1 rounded-2xl shadow-md">
          <span className="text-[10px] font-mono text-neutral-400 uppercase">
            ESTIMATED DISPATCH
          </span>
          <p className="text-sm font-bold text-white uppercase">WITHIN 24 HOURS</p>
          <span className="text-[10px] text-neutral-400 block">Track via SMS & WhatsApp</span>
        </div>

        <div className="p-5 bg-neutral-950 border border-neutral-800 space-y-1 rounded-2xl shadow-md">
          <span className="text-[10px] font-mono text-neutral-400 uppercase">
            DOORSTEP DELIVERY
          </span>
          <p className="text-sm font-bold text-white uppercase">2–4 BUSINESS DAYS</p>
          <span className="text-[10px] text-neutral-400 block">7-day free exchange window</span>
        </div>
      </div>

      {/* Ordered Items Preview if available */}
      {latestOrder && latestOrder.items && latestOrder.items.length > 0 && (
        <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-8 text-left mb-10 space-y-4 rounded-3xl shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              ORDERED SILHOUETTES ({latestOrder.items.length})
            </span>
            <span className="text-xs font-mono font-bold text-white">
              TOTAL: ₹{latestOrder.total?.toLocaleString('en-IN')}
            </span>
          </div>

          <div className="divide-y divide-neutral-900">
            {latestOrder.items.map((it: any, idx: number) => (
              <div key={idx} className="py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-16 bg-neutral-900 overflow-hidden border border-neutral-800 flex-shrink-0 rounded-xl">
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">{it.name}</h4>
                    <span className="text-[10px] text-neutral-400 font-mono">
                      SIZE: {it.size} • QTY: {it.quantity}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-white">
                  ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-400 flex flex-col sm:flex-row justify-between gap-2">
            <span>Delivering to: <strong className="text-neutral-300">{latestOrder.shippingAddress}</strong></span>
            <span>Payment: <strong className="text-neutral-300">{latestOrder.paymentMethod}</strong></span>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/shop"
          className="w-full sm:w-auto bg-white text-neutral-950 px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 rounded-xl shadow-md"
        >
          <span>CONTINUE SHOPPING</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <Link
          href="/account"
          className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-neutral-600 transition-colors flex items-center justify-center gap-2 rounded-xl"
        >
          <Package className="w-4 h-4" />
          <span>VIEW IN ACCOUNT</span>
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-xs font-mono uppercase text-neutral-400">
          LOADING ORDER DETAILS...
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
