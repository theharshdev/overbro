'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useCartStore } from '@/store/useCartStore';
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Landmark,
  Lock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi NCR',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const {
    items,
    getSubtotal,
    getDiscount,
    getShippingFee,
    getFinalTotal,
    getItemCount,
    coupon,
    clearCart,
  } = useCartStore();

  // Form states
  const [formData, setFormData] = useState({
    email: 'harsh.streetwear@example.com',
    phone: '9876543210',
    firstName: 'Harsh',
    lastName: 'Kushwaha',
    address: 'Plot 104, Saket',
    apartment: 'South Delhi',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110017',
  });

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [upiId, setUpiId] = useState('harsh@okhdfcbank');

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getSubtotal() : 0;
  const discount = mounted ? getDiscount() : 0;
  const shipping = mounted ? getShippingFee() : 0;
  const total = mounted ? getFinalTotal() : 0;
  const count = mounted ? getItemCount() : 0;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    setIsProcessing(true);

    // Mock payment authorization delay
    setTimeout(() => {
      const orderId = `UB-${Math.floor(100000 + Math.random() * 900000)}`;
      // Save order info to localStorage for the Order Success & Account pages
      const orderSummary = {
        orderId,
        date: new Date().toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        items: [...items],
        total,
        subtotal,
        discount,
        shipping,
        paymentMethod:
          paymentMethod === 'upi'
            ? 'UPI (Google Pay / PhonePe)'
            : paymentMethod === 'card'
            ? 'Credit / Debit Card'
            : 'NetBanking (All Major Banks)',
        shippingAddress: `${formData.firstName} ${formData.lastName}, ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}`,
        phone: formData.phone,
        email: formData.email,
      };

      try {
        const pastOrders = JSON.parse(
          localStorage.getItem('ubro-orders') || '[]'
        );
        localStorage.setItem(
          'ubro-orders',
          JSON.stringify([orderSummary, ...pastOrders])
        );
        localStorage.setItem('ubro-latest-order', JSON.stringify(orderSummary));
      } catch (err) {
        console.error('Storage error', err);
      }

      clearCart();
      router.push(`/order-success?orderId=${orderId}`);
    }, 1200);
  };

  if (mounted && items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-xl font-bold uppercase text-white">YOUR BAG IS EMPTY</h1>
        <p className="text-xs text-neutral-400">
          Add items to your bag before proceeding to checkout.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-white text-neutral-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
        >
          GO TO SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs
        items={[{ label: 'CART', href: '/cart' }, { label: 'CHECKOUT' }]}
      />

      <div className="mt-4 mb-8 pb-6 border-b border-neutral-800">
        <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400 font-bold block mb-1">
          SECURE 256-BIT ENCRYPTED CHECKOUT
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
          CHECKOUT
        </h1>
      </div>

      <form onSubmit={handleSubmitOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Customer & Delivery Details (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Information */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white text-neutral-950 text-[10px] font-bold flex items-center justify-center">
                    1
                  </span>
                  CONTACT INFORMATION
                </h2>
                <span className="text-[10px] text-neutral-400 uppercase font-mono">
                  FOR SMS & ORDER TRACKING
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    MOBILE NUMBER (FOR OTP/UPDATES) *
                  </label>
                  <div className="flex">
                    <span className="bg-neutral-900 border border-r-0 border-neutral-800 rounded-l-xl px-3 py-2.5 text-xs text-neutral-400 font-mono flex items-center">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 bg-neutral-900 border border-neutral-800 rounded-r-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white text-neutral-950 text-[10px] font-bold flex items-center justify-center">
                    2
                  </span>
                  DELIVERY ADDRESS
                </h2>
                <span className="text-[10px] text-neutral-400 uppercase font-mono">
                  ALL INDIA DOORSTEP DISPATCH
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                  STREET ADDRESS / BUILDING / HOUSE NO. *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  placeholder="e.g. Plot 104, Saket, South Delhi"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    CITY *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    STATE *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-white cursor-pointer"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-1.5">
                    PINCODE *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    maxLength={6}
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs font-mono text-white focus:outline-none focus:border-white"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h2 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-white text-neutral-950 text-[10px] font-bold flex items-center justify-center">
                    3
                  </span>
                  PAYMENT METHOD
                </h2>
                <span className="text-[10px] text-emerald-400 uppercase font-mono font-bold flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  MOCKED GATEWAY
                </span>
              </div>

              {/* Payment Selectors */}
              <div className="space-y-3">
                {/* UPI Option */}
                <label
                  className={`p-4 border rounded-2xl block cursor-pointer transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-neutral-900 border-white'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'upi'}
                        onChange={() => setPaymentMethod('upi')}
                        className="accent-white"
                      />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white block">
                          UPI (Instant & Recommended)
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          Google Pay, PhonePe, Paytm, CRED & UPI QR
                        </span>
                      </div>
                    </div>
                    <QrCode className="w-5 h-5 text-neutral-400" />
                  </div>

                  {paymentMethod === 'upi' && (
                    <div className="mt-3 pt-3 border-t border-neutral-800">
                      <label className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                        ENTER UPI ID OR SCAN QR ON NEXT STEP:
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank"
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-white"
                      />
                    </div>
                  )}
                </label>

                {/* Cards Option */}
                <label
                  className={`p-4 border rounded-2xl block cursor-pointer transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-neutral-900 border-white'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'card'}
                        onChange={() => setPaymentMethod('card')}
                        className="accent-white"
                      />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white block">
                          Credit / Debit Card
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          Visa, Mastercard, RuPay & American Express
                        </span>
                      </div>
                    </div>
                    <CreditCard className="w-5 h-5 text-neutral-400" />
                  </div>
                </label>

                {/* NetBanking Option */}
                <label
                  className={`p-4 border rounded-2xl block cursor-pointer transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-neutral-900 border-white'
                      : 'bg-neutral-950 border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'netbanking'}
                        onChange={() => setPaymentMethod('netbanking')}
                        className="accent-white"
                      />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-white block">
                          NetBanking
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          HDFC, ICICI, SBI, Axis, Kotak & 50+ Banks
                        </span>
                      </div>
                    </div>
                    <Landmark className="w-5 h-5 text-neutral-400" />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <div className="bg-neutral-950 border border-neutral-800 rounded-3xl p-6 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                  ORDER SUMMARY ({count})
                </h3>
                <Link
                  href="/cart"
                  className="text-[11px] text-neutral-400 hover:text-white underline font-semibold uppercase"
                >
                  EDIT BAG
                </Link>
              </div>

              {/* Items List Mini */}
              <div className="max-h-64 overflow-y-auto divide-y divide-neutral-900 pr-1">
                {items.map((item) => (
                  <div key={item.id} className="py-3 flex gap-3 items-center">
                    <div className="relative w-12 h-16 bg-neutral-900 rounded-xl shrink-0 overflow-hidden border border-neutral-800">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white uppercase truncate">
                        {item.name}
                      </h4>
                      <span className="text-[10px] text-neutral-400 block font-mono">
                        SIZE: {item.size} • QTY: {item.quantity}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-white">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Details */}
              <div className="space-y-2 pt-3 border-t border-neutral-800 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount ({coupon?.code})</span>
                    <span className="font-mono">-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono text-white">
                    {shipping === 0 ? (
                      <strong className="text-emerald-400">FREE</strong>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-neutral-800 text-base font-bold text-white">
                  <span className="uppercase tracking-wider">Total to Pay</span>
                  <span className="font-mono">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Complete Order Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-white text-neutral-950 py-4 text-xs font-black uppercase tracking-widest rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 select-none shadow-xl"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                    <span>AUTHORIZING PAYMENT...</span>
                  </div>
                ) : (
                  <>
                    <span>PLACE ORDER • ₹{total.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>30-Day Purchase Protection • Free Returns</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
