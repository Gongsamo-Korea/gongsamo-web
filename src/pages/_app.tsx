import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { queryClient } from '@/services/query';
import '@/styles/fonts.css';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/styles';
import theme from '@/styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps) {
  // if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  //   import('../mocks');
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
