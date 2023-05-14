import AppScripts from '@/components/AppScripts/AppScripts';
import Header from '@/components/common/headers/Header';
import { GlobalStyle } from '@/styles';
import Head from 'next/head';
import Footer from '@/components/common/footers/Footer';

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
