import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type NewsletterState = {
  newsletter: string;
  setNewsletter: (newsletter: string) => void;
};

export const useNewsletterStore = create<NewsletterState>()(
  devtools(
    (set) => ({
      newsletter: '',
      setNewsletter: (newsletter) => {
        set((state) => ({ ...state, newsletter }));
      },
    }),
    {
      name: 'banner-store',
    },
  ),
);
