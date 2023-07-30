import Header from '@/components/layout/headers/Header';
import Footer from '@/components/layout/footers/Footer';
import AppScripts from '@/components/AppScripts/AppScripts';
import styled from '@emotion/styled';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const BackgroundElements = () => {
    return (
      <BackgroundCircleElement>
        <PinkCircleElement />
        <LightPinkCircleElement />
        <GreenCircleElement />
        <YellowCircleElement />
      </BackgroundCircleElement>
    );
  };

  return (
    <Wrapper>
      <AppScripts />
      <Header />
      <BackgroundElements />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  height: auto;
  min-height: calc(100vh - 30rem);
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
`;

const BackgroundCircleElement = styled.div`
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const PinkCircleElement = styled.div`
  position: absolute;
  width: 36%;
  aspect-ratio: 1/1;
  left: 10%;
  top: 8px;

  background: #ffb5ea;
  filter: blur(197.5px);
`;

const LightPinkCircleElement = styled.div`
  position: absolute;
  width: 70%;
  aspect-ratio: 4/1;
  left: 30%;
  top: 426px;

  background: #ffe7e7;
  filter: blur(143px);
  z-index: 1;
`;

const GreenCircleElement = styled.div`
  position: absolute;
  width: 50%;
  aspect-ratio: 2/1;
  left: 10%;
  top: 525px;

  background: #c6f2f2;
  filter: blur(143px);
`;

const YellowCircleElement = styled.div`
  position: absolute;
  width: 46%;
  aspect-ratio: 1.2/1;
  left: 40%;
  top: -15px;

  background: #fff9da;
  filter: blur(143px);
`;

export default Layout;
