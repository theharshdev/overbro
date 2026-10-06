'use client';

import React from 'react';
import { useToastStore } from '@/store/useToastStore';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToastStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-neutral-900 border border-neutral-700 text-white p-4 shadow-2xl flex items-start gap-3 transition-all duration-200 rounded-2xl"
        >
          {toast.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          {toast.type === 'error' && (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          )}
          {toast.type === 'info' && (
            <Info className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
          )}

          <div className="flex-1">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white">
              {toast.title}
            </h5>
            {toast.message && (
              <p className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                {toast.message}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="text-neutral-500 hover:text-white p-1 rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
