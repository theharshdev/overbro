import React from 'react';
import Link from 'next/link';
import { Truck, ShieldCheck, RefreshCw, Zap, ArrowRight } from 'lucide-react';

export const FreeShippingBanner: React.FC = () => {
  return (
    <section className="bg-neutral-900 border-y border-neutral-800 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 border border-neutral-800 p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl shadow-xl">
          <div className="space-y-3 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold rounded-full">
              <Zap className="w-3.5 h-3.5" />
              <span>LIMITED PROMO</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              FREE SHIPPING ON ALL ORDERS ABOVE ₹999
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Stock up on our heavyweight 250–320 GSM oversized tees to unlock automatic complimentary express shipping across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-white text-neutral-950 px-8 py-3.5 text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-colors text-center flex items-center justify-center gap-2 rounded-xl shadow-md"
            >
              <span>EXPLORE ALL DROPS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
