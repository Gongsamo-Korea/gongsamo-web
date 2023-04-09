import AppScripts from '@/components/AppScripts/AppScripts';
import { GlobalStyle } from '@/styles';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>
      <AppScripts />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>{children}</div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
