import type { AppProps } from 'next/app';
import Layout from '@/components/common/layouts/Layout';
import '@/styles/colors.css';
import '@/styles/effects.css';
import '@/styles/fonts.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
