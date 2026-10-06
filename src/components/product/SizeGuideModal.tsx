'use client';

import React, { useEffect } from 'react';
import { X, Ruler, Info } from 'lucide-react';
import { ProductCategory } from '@/types/product';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: ProductCategory;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  isOpen,
  onClose,
  category,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tShirtSizes = [
    { size: 'S', chest: '44"', length: '29"', shoulder: '21.5"', sleeve: '9.0"' },
    { size: 'M', chest: '46"', length: '30"', shoulder: '22.5"', sleeve: '9.5"' },
    { size: 'L', chest: '48"', length: '31"', shoulder: '23.5"', sleeve: '10.0"' },
    { size: 'XL', chest: '50"', length: '32"', shoulder: '24.5"', sleeve: '10.5"' },
    { size: 'XXL', chest: '52"', length: '33"', shoulder: '25.5"', sleeve: '11.0"' },
  ];

  const sizes = tShirtSizes;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 p-6 sm:p-8 shadow-2xl text-white rounded-3xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-neutral-300" />
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-white">
                250+ GSM OVERSIZED T-SHIRT SIZE MATRIX
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors rounded-full hover:bg-neutral-900"
              aria-label="Close size guide"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Fit Manifesto Note */}
          <div className="mt-4 p-4 bg-neutral-900 border border-neutral-800 flex items-start gap-3 text-xs rounded-2xl">
            <Info className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <div className="text-neutral-300 space-y-1">
              <p className="font-semibold text-white uppercase tracking-wider">
                DESIGNED FOR AN AUTHENTIC OVERSIZED SILHOUETTE
              </p>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Our garments are intentionally engineered with 3-4 inches of extra ease across the chest and exaggerated drop shoulders. Order your normal regular size to achieve the curated baggy streetwear look. Size down only if you prefer a slim/standard fit.
              </p>
            </div>
          </div>

          {/* Sizing Table */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-neutral-900">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-widest font-mono">
                  <th className="py-2.5 px-3">Size</th>
                  <th className="py-2.5 px-3">Chest (Inches)</th>
                  <th className="py-2.5 px-3">Body Length</th>
                  <th className="py-2.5 px-3">Shoulder Drop</th>
                  <th className="py-2.5 px-3">Sleeve Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 font-mono">
                {sizes.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-900/50">
                    <td className="py-3 px-3 font-bold text-white">{row.size}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.chest}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.length}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.shoulder}</td>
                    <td className="py-3 px-3 text-neutral-300">{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Model Note */}
          <div className="mt-6 pt-4 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-neutral-400">
            <span>Model in campaign is 6'1" (185cm) wearing Size L.</span>
            <span className="font-mono text-neutral-300">All measurements in inches (tolerance +/- 0.5")</span>
          </div>

          {/* Action button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full mt-6 bg-white text-neutral-950 font-bold uppercase tracking-wider py-3 text-xs hover:bg-neutral-200 transition-colors rounded-xl shadow-md"
          >
            GOT IT, RETURN TO PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
};
