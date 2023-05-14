import { GlobalStyle } from '@/styles';
import Head from 'next/head';
import Header from '@/components/layout/headers/Header';
import Footer from '@/components/layout/footers/Footer';
import AppScripts from '@/components/AppScripts/AppScripts';

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
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
