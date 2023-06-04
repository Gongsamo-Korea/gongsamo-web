import Head from 'next/head';
import Header from '@/components/layout/headers/Header';
import Footer from '@/components/layout/footers/Footer';
import AppScripts from '@/components/AppScripts/AppScripts';
import styled from '@emotion/styled';

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
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </div>
  );
};

const ContentWrapper = styled.div`
  height: auto;
  min-height: calc(100dvh - 45.2rem);
`;

export default Layout;
