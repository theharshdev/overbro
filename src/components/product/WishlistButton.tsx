'use client';

import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { useWishlistStore } from '@/store/useWishlistStore';
import { useToastStore } from '@/store/useToastStore';

interface WishlistButtonProps {
  productId: string;
  productName: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  productId,
  productName,
  size = 'md',
  className = '',
  showText = false,
}) => {
  const [mounted, setMounted] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addToast } = useToastStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const active = mounted ? isInWishlist(productId) : false;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const added = toggleWishlist(productId);
    if (added) {
      addToast('SAVED TO WISHLIST', `${productName} added to your wishlist.`, 'success');
    } else {
      addToast('REMOVED FROM WISHLIST', `${productName} removed.`, 'info');
    }
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={active ? `Remove ${productName} from wishlist` : `Add ${productName} to wishlist`}
      className={`transition-all duration-200 select-none flex items-center justify-center gap-2 ${
        active
          ? 'text-red-500 hover:text-red-400'
          : 'text-neutral-400 hover:text-white'
      } ${className}`}
    >
      <Heart
        className={`${iconSizes[size]} transition-transform ${
          active ? 'fill-red-500 scale-110' : 'hover:scale-110'
        }`}
      />
      {showText && (
        <span className="text-xs uppercase font-bold tracking-wider">
          {active ? 'IN WISHLIST' : 'SAVE TO WISHLIST'}
        </span>
      )}
    </button>
  );
};
