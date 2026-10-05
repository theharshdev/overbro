'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import {
  User,
  Package,
  Heart,
  MapPin,
  LogOut,
  Truck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
} from 'lucide-react';
import { useWishlistStore } from '@/store/useWishlistStore';
import { PRODUCTS, SINGLE_TSHIRT_IMAGE } from '@/data/products';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'profile' | 'wishlist'>('orders');
  const [orders, setOrders] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const { productIds } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem('ubro-orders');
      if (stored) {
        setOrders(JSON.parse(stored));
      } else {
        // Fallback realistic mock order
        setOrders([
          {
            orderId: 'UB-772941',
            date: '28 Sep 2026',
            total: 2598,
            status: 'Delivered',
            items: [
              {
                name: 'UBro Heavyweight Black Tee',
                size: 'L',
                color: 'Jet Black',
                price: 899,
                quantity: 1,
                image: SINGLE_TSHIRT_IMAGE,
              },
              {
                name: 'UBro Monolith 320 GSM Ultra-Heavy Tee',
                size: 'L',
                color: 'Pure Obsidian',
                price: 1199,
                quantity: 1,
                image: SINGLE_TSHIRT_IMAGE,
              },
            ],
            shippingAddress: 'Harsh Kushwaha, Plot 104, Saket, South Delhi, Delhi - 110017',
            paymentMethod: 'UPI (PhonePe)',
          },
        ]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const wishlistItems = mounted ? PRODUCTS.filter((p) => productIds.includes(p.id)) : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: 'ACCOUNT' }]} />

      <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-4 mb-8 pb-6 border-b border-neutral-800 gap-4">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
            MEMBER PROFILE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            HARSH KUSHWAHA
          </h1>
        </div>

        <div className="flex items-center gap-3 text-xs text-neutral-400 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>UBRO VIP MEMBER • MEMBER SINCE 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar (3 Cols) */}
        <div className="lg:col-span-3 bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden divide-y divide-neutral-900 select-none shadow-xl">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`w-full p-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'orders'
                ? 'bg-neutral-900 text-white border-l-2 border-l-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <Package className="w-4 h-4" />
              <span>ORDERS ({orders.length})</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('wishlist')}
            className={`w-full p-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'wishlist'
                ? 'bg-neutral-900 text-white border-l-2 border-l-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <Heart className="w-4 h-4" />
              <span>WISHLIST ({wishlistItems.length})</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('addresses')}
            className={`w-full p-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'addresses'
                ? 'bg-neutral-900 text-white border-l-2 border-l-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span>SAVED ADDRESSES</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`w-full p-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === 'profile'
                ? 'bg-neutral-900 text-white border-l-2 border-l-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <User className="w-4 h-4" />
              <span>PROFILE & SETTINGS</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-600" />
          </button>

          <div className="p-4">
            <button
              type="button"
              onClick={() => alert('Logged out successfully.')}
              className="w-full text-left flex items-center gap-3 text-xs text-neutral-500 hover:text-red-400 font-bold uppercase tracking-wider transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>LOGOUT</span>
            </button>
          </div>
        </div>

        {/* Main Tab Content Area (9 Cols) */}
        <div className="lg:col-span-9">
          {/* TAB 1: Orders */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div className="pb-3 border-b border-neutral-800 flex justify-between items-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  ORDER HISTORY & SHIPMENTS
                </h2>
                <span className="text-xs text-neutral-400 font-mono">
                  {orders.length} ORDERS PLACED
                </span>
              </div>

              {orders.length === 0 ? (
                <div className="p-12 text-center border border-neutral-800 bg-neutral-900/30 space-y-3 rounded-3xl">
                  <Package className="w-8 h-8 text-neutral-500 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    NO ORDERS YET
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block mt-2 bg-white text-neutral-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
                  >
                    SHOP NEW DROPS
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order, idx) => (
                    <div
                      key={idx}
                      className="bg-neutral-950 border border-neutral-800 p-5 space-y-4 rounded-3xl shadow-lg"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-neutral-800 gap-2">
                        <div>
                          <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                            ORDER // {order.orderId}
                          </span>
                          <span className="text-xs text-neutral-300 font-medium">
                            Placed on {order.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-neutral-900 border border-neutral-700 text-neutral-200 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            {order.status || 'Processing Dispatch'}
                          </span>
                          <span className="text-xs font-mono font-bold text-white">
                            ₹{order.total?.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="divide-y divide-neutral-900">
                        {order.items?.map((item: any, i: number) => (
                          <div key={i} className="py-2.5 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              {item.image && (
                                <div className="relative w-12 h-14 bg-neutral-900 overflow-hidden border border-neutral-800 flex-shrink-0 rounded-xl">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    sizes="48px"
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <h4 className="text-xs font-bold text-white uppercase">{item.name}</h4>
                                <span className="text-[10px] text-neutral-400 font-mono">
                                  SIZE: {item.size} • QTY: {item.quantity}
                                </span>
                              </div>
                            </div>
                            <span className="text-xs font-mono font-bold text-white">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-neutral-400">
                        <span>Paid via {order.paymentMethod}</span>
                        <button
                          type="button"
                          onClick={() => alert(`Tracking SMS sent for ${order.orderId}`)}
                          className="text-white hover:underline uppercase tracking-wider font-semibold text-xs"
                        >
                          TRACK PACKAGE →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Wishlist */}
          {activeTab === 'wishlist' && (
            <div className="space-y-6">
              <div className="pb-3 border-b border-neutral-800 flex justify-between items-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  SAVED ITEMS ({wishlistItems.length})
                </h2>
                <Link
                  href="/wishlist"
                  className="text-xs text-white hover:underline uppercase tracking-wider font-bold"
                >
                  FULL WISHLIST VIEW
                </Link>
              </div>

              {wishlistItems.length === 0 ? (
                <div className="p-12 text-center border border-neutral-800 bg-neutral-900/30 space-y-3 rounded-3xl">
                  <Heart className="w-8 h-8 text-neutral-500 mx-auto" />
                  <p className="text-xs font-bold uppercase tracking-wider text-white">
                    NO SAVED PIECES
                  </p>
                  <Link
                    href="/shop"
                    className="inline-block mt-2 bg-white text-neutral-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
                  >
                    EXPLORE DROPS
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlistItems.map((prod) => (
                    <div
                      key={prod.id}
                      className="p-4 bg-neutral-950 border border-neutral-800 flex gap-3 items-center rounded-2xl shadow-md"
                    >
                      <div className="relative w-16 h-20 bg-neutral-900 flex-shrink-0 border border-neutral-800 overflow-hidden rounded-xl">
                        <Image
                          src={prod.images[0]}
                          alt={prod.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-white uppercase truncate">
                          {prod.name}
                        </h4>
                        <span className="text-[10px] text-neutral-400 block font-mono">
                          {prod.gsm} GSM • ₹{prod.price.toLocaleString('en-IN')}
                        </span>
                        <Link
                          href={`/products/${prod.slug}`}
                          className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider text-white border-b border-white"
                        >
                          VIEW PRODUCT
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Saved Addresses */}
          {activeTab === 'addresses' && (
            <div className="space-y-6">
              <div className="pb-3 border-b border-neutral-800 flex justify-between items-center">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  SAVED DELIVERY ADDRESSES
                </h2>
                <button
                  type="button"
                  onClick={() => alert('New address modal')}
                  className="text-xs text-white hover:underline uppercase tracking-wider font-bold"
                >
                  + ADD NEW ADDRESS
                </button>
              </div>

              <div className="p-6 bg-neutral-950 border border-neutral-800 space-y-3 max-w-md rounded-3xl shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-neutral-900 border border-neutral-700 px-2.5 py-0.5 text-neutral-200 uppercase font-mono rounded-full">
                    DEFAULT ADDRESS
                  </span>
                  <span className="text-xs text-neutral-400 font-bold uppercase">HOME</span>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Harsh Kushwaha • +91 9876543210
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Plot 104, Saket, South Delhi<br />
                  New Delhi, Delhi - 110017
                </p>
                <div className="pt-2 flex gap-4 text-xs font-bold uppercase text-neutral-400">
                  <button type="button" className="hover:text-white transition-colors">EDIT</button>
                  <button type="button" className="hover:text-red-400 transition-colors">REMOVE</button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Profile & Settings */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="pb-3 border-b border-neutral-800">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  PERSONAL INFORMATION & NOTIFICATIONS
                </h2>
              </div>

              <div className="bg-neutral-950 border border-neutral-800 p-6 space-y-4 max-w-lg rounded-3xl shadow-lg">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    defaultValue="Harsh Kushwaha"
                    className="w-full bg-neutral-900 border border-neutral-800 p-3 text-xs text-white focus:outline-none focus:border-white rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    defaultValue="harsh.streetwear@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 p-3 text-xs text-white focus:outline-none focus:border-white rounded-xl"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    defaultValue="+91 9876543210"
                    className="w-full bg-neutral-900 border border-neutral-800 p-3 text-xs text-white focus:outline-none focus:border-white font-mono rounded-xl"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => alert('Profile preferences saved!')}
                    className="bg-white text-neutral-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors rounded-xl shadow-md"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
