import LandingBanner from '@/components/ui/banners/LandingBanner';
import LandingButton from '@/components/ui/buttons/LandingButton';
import Typography48 from '@/components/ui/textStyles/Typography48';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import env from '@/config';
import { useBannerStore } from '@/stores/banners';
import { useEffect } from 'react';
import Link from 'next/link';
import { contentVariants, titleVariants } from '@/styles/interactions';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { useMediaQuery } from 'react-responsive';

export default function Home({ banners }: any) {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useEffect(() => {
    useBannerStore.getState().setBanners(banners);
  }, [banners]);

  return (
    <HomeWrapper>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SZD6RJ59WC"></Script>
      <Script>
        {` window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SZD6RJ59WC');`}
      </Script>
      <LandingBanner banners={banners} />
      <LandingSection>
        <TextWrapper
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography48
            type={'span'}
            text={`공적인 사적모임에서는\n국제개발협력 청년들을\n`}
            color={theme.colors.gray9}
          />
          <Typography48 type={'span'} text={`연결`} color={theme.colors.red3} />
          <Typography48
            type={'span'}
            text={`하고 위트있게 작당하며\n트렌디하게 `}
            color={theme.colors.gray9}
          />
          <Typography48 type={'span'} text={`공유`} color={theme.colors.blue3} />
          <Typography48 type={'span'} text={`해요`} color={theme.colors.gray9} />
        </TextWrapper>
        <SectionImageWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <SectionImage src={'/images/landing_section_img1.webp'} alt="section1" />
        </SectionImageWrapper>
      </LandingSection>
      <LandingSection>
        <SectionImageWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <SectionImage src={'/images/landing_section_img2.webp'} alt="section1" />
        </SectionImageWrapper>
        <RightTextWrapper
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography48
            type={'span'}
            text={`국제개발협력 NO1.뉴스레터\n`}
            color={theme.colors.gray9}
          />
          <Typography48 type={'span'} text={`김칩`} color={theme.colors.red3} />
          <Typography48
            type={'span'}
            text={`을 만들어\n지구 속 세계,\n세계 속 우리이야기를 전해요`}
            color={theme.colors.gray9}
          />

          <RightButtonWrapper marginTop={isMobile ? '20px' : '72px'}>
            <Link href="/newsletter">
              <LandingButton
                text={'놓친 뉴스레터 다시보기'}
                color={theme.colors.red2}
                hoverColor={theme.colors.red3}
              ></LandingButton>
            </Link>
            <LandingButton
              text={'김칩 구독하기'}
              color={theme.colors.blue1}
              hoverColor={theme.colors.blue2}
              onClick={() => window.open(env.links.subscribe_newsletter)}
            />
          </RightButtonWrapper>
        </RightTextWrapper>
      </LandingSection>
      <YellowCircleElement />
      <LandingSection>
        <TextWrapper
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography48 type={'span'} text={`사적인 `} color={theme.colors.red3} />
          <Typography48 type={'span'} text={`느슨한 연대로\n`} color={theme.colors.gray9} />
          <Typography48 type={'span'} text={`공적인 `} color={theme.colors.blue3} />
          <Typography48 type={'span'} text={`문제를 해결해요`} color={theme.colors.gray9} />
          <ButtonWrapper marginTop={isMobile ? '20px' : '72px'}>
            <LandingButton
              text={'작당 둘러보기'}
              color={theme.colors.red2}
              hoverColor={theme.colors.red3}
              onClick={() => {
                window.open(env.links.instagram);
              }}
            />
          </ButtonWrapper>
        </TextWrapper>
        <SectionImageWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <SectionImage src={'/images/landing_section_img3.webp'} alt="section3" />
        </SectionImageWrapper>
      </LandingSection>
      <BlueCircleElement />
      <LandingSection>
        <SectionImageWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <SectionImage src={'/images/landing_section_img4.webp'} alt="section4" />
        </SectionImageWrapper>
        <RightTextWrapper
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography48
            type={'span'}
            text={`공적인사적모임과 함께\n작당 어때요?`}
            color={theme.colors.gray9}
            textAlign="right"
          />
          <RightButtonWrapper marginTop={isMobile ? '20px' : '72px'}>
            <LandingButton
              text={'활동 둘러보기'}
              color={theme.colors.red2}
              hoverColor={theme.colors.red3}
              onClick={() => {
                window.open(env.links.notion_page);
              }}
            />
            <LandingButton
              text={'오픈카톡방 참여하기'}
              color={theme.colors.red2}
              hoverColor={theme.colors.red3}
              onClick={() => {
                window.open(env.links.kakao);
              }}
            />
          </RightButtonWrapper>
          <RightButtonWrapper marginTop={'4px'}>
            <LandingButton
              text={isMobile ? '국개협 ON-AIR\n제보하기' : '국개협 ON-AIR 제보하기'}
              color={theme.colors.blue1}
              hoverColor={theme.colors.blue2}
              onClick={() => {
                window.open(env.links.on_air);
              }}
            />
            <LandingButton
              text={isMobile ? '국개협 무물\n제보하기' : '국개협 무물 제보하기'}
              color={theme.colors.blue1}
              hoverColor={theme.colors.blue2}
              onClick={() => {
                window.open(env.links.ask_question);
              }}
            />
          </RightButtonWrapper>
        </RightTextWrapper>
      </LandingSection>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const LandingSection = styled.section`
  padding: 22.5rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    padding: 5rem 1.6rem 20rem;
    gap: 4rem;

    &:nth-of-type(2n + 1) {
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    &:nth-of-type(2n) {
      flex-wrap: wrap-reverse;
      justify-content: flex-start;
    }
  }
`;

const TextWrapper = styled(motion.div)`
  display: inline-block;
  width: 50%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const RightTextWrapper = styled(motion.div)`
  text-align: right;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const SectionImageWrapper = styled(motion.div)`
  width: 50%;
  max-width: 700px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonWrapper = styled.div<{ marginTop?: string }>`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop};
`;

const RightButtonWrapper = styled(ButtonWrapper)`
  justify-content: flex-end;
`;

const YellowCircleElement = styled.div`
  position: absolute;
  width: 904px;
  height: 769px;
  right: 0;
  top: 2334px;

  background: #fff9da;
  opacity: 0.2;
  filter: blur(143px);

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

const BlueCircleElement = styled.div`
  position: absolute;
  width: 972px;
  height: 511px;
  left: -164px;
  top: 3410px;

  background: #c6f2f2;
  opacity: 0.3;
  filter: blur(143px);

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 100%;
    top: 20%;
    z-index: -1;
  }
`;

export async function getServerSideProps() {
  const res = await fetch(`http://api.gongsamo.kr/banners`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const result = await res.json();
  useBannerStore.getState().setBanners(result);
  return {
    props: { banners: result },
  };
}
