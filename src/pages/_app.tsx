import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import { queryClient } from '@/services/query';
import '@/styles/fonts.css';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyle } from '@/styles';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
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
