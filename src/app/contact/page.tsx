'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: 'Order Status & Tracking',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: 'CONTACT' }]} />

      {/* Hero Header */}
      <div className="mt-6 mb-16 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-400 font-bold block">
          COMMUNITY & CONCIERGE
        </span>
        <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
          CONNECT WITH OVERBRO
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal pt-1">
          Questions about your drop order, sizing guidance, or bulk requests? Our support team is online 6 days a week to help you out.
        </p>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-2">
              DIRECT REACH
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We respond to all verified inquiries within 4 business hours.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email Card */}
            <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center shrink-0 text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                  EMAIL CONCIERGE
                </span>
                <a
                  href="mailto:support@overbro.in"
                  className="text-sm font-bold text-white hover:underline"
                >
                  support@overbro.in
                </a>
                <p className="text-[11px] text-neutral-500 mt-1">
                  For orders, exchange requests, and general help.
                </p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center shrink-0 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                  WHATSAPP PRIORITY
                </span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-white hover:underline"
                >
                  +91 98765 43210
                </a>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Instant order assistance and fit guidance.
                </p>
              </div>
            </div>

            {/* Atelier Card */}
            <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center shrink-0 text-white">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                  DESIGN ATELIER
                </span>
                <span className="text-sm font-bold text-white block">
                  Overbro Studios Delhi
                </span>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                  Studio 14, Okhla Phase III, Near NSIC Metro, New Delhi, DL - 110020
                </p>
              </div>
            </div>

            {/* Support Hours */}
            <div className="p-5 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center shrink-0 text-white">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-0.5">
                  DISPATCH & SUPPORT HOURS
                </span>
                <span className="text-xs font-bold text-white block">
                  Monday – Saturday: 10:00 AM – 7:00 PM IST
                </span>
                <p className="text-[11px] text-neutral-500 mt-1">
                  Orders placed on Sunday are dispatched early Monday morning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="mb-8 pb-6 border-b border-neutral-800">
            <div className="flex items-center gap-2 mb-1 text-xs font-mono uppercase tracking-wider text-neutral-400">
              <MessageSquare className="w-4 h-4 text-white" />
              <span>DIRECT INQUIRY DESK</span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-white">
              SEND A MESSAGE
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Fill in your details and our team will get back to you shortly.
            </p>
          </div>

          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                MESSAGE RECEIVED
              </h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. A concierge ticket has been created and our team will reply to <span className="text-white">{formData.email}</span> shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    orderNumber: '',
                    subject: 'Order Status & Tracking',
                    message: '',
                  });
                }}
                className="mt-4 px-6 py-2.5 bg-neutral-900 border border-neutral-800 text-xs uppercase font-bold text-white hover:bg-neutral-800 tracking-wider rounded-xl shadow-md"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arjun Mehta"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="arjun@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                    ORDER NUMBER (OPTIONAL)
                  </label>
                  <input
                    type="text"
                    value={formData.orderNumber}
                    onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                    placeholder="e.g. OB-772941"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                    TOPIC
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Order Status & Tracking">Order Status & Tracking</option>
                    <option value="Size & Fit Guidance">Size & Fit Guidance</option>
                    <option value="Size or Product Exchange">Size or Product Exchange Request</option>
                    <option value="Wholesale & Collabs">Wholesale / Brand Collaborations</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5 font-bold">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your inquiry in detail..."
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-neutral-950 font-black uppercase text-xs tracking-widest rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>SUBMIT INQUIRY</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
