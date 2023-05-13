import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/layouts/Layout';
import { queryClient } from '@/services/query';
import '@/styles/colors.css';
import '@/styles/effects.css';
import '@/styles/fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
