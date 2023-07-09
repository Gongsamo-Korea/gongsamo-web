import { BannerProps } from '@/models/banner';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type BannerState = {
  banners: BannerProps[];
  setBanners: (banners: BannerProps[]) => void;
};

export const useBannerStore = create<BannerState>()(
  devtools(
    (set) => ({
      banners: [],
      setBanners: (banners) => {
        set((state) => ({ ...state, banners }));
      },
    }),
    {
      name: 'banner-store',
    },
  ),
);
