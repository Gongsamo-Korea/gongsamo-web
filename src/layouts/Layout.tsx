import AppScripts from '@/components/AppScripts/AppScripts';
import { GlobalStyle } from '@/styles';
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
      <GlobalStyle />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
