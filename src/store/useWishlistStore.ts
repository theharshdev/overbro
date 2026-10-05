import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistState {
  productIds: string[];
  toggleWishlist: (productId: string) => boolean; // returns true if added, false if removed
  isInWishlist: (productId: string) => boolean;
  removeFromWishlist: (productId: string) => void;
  clearWishlist: () => void;
  getWishlistCount: () => number;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      productIds: [],

      toggleWishlist: (productId: string) => {
        const current = get().productIds;
        const exists = current.includes(productId);
        if (exists) {
          set({ productIds: current.filter((id) => id !== productId) });
          return false;
        } else {
          set({ productIds: [...current, productId] });
          return true;
        }
      },

      isInWishlist: (productId: string) => {
        return get().productIds.includes(productId);
      },

      removeFromWishlist: (productId: string) => {
        set({ productIds: get().productIds.filter((id) => id !== productId) });
      },

      clearWishlist: () => {
        set({ productIds: [] });
      },

      getWishlistCount: () => {
        return get().productIds.length;
      },
    }),
    {
      name: 'ubro-wishlist-storage',
    }
  )
);
