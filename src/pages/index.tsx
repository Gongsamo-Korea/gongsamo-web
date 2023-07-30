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
import Head from 'next/head';

export default function Home({ banners }: any) {
  useEffect(() => {
    useBannerStore.getState().setBanners(banners);
  }, [banners]);

  const PageMetatags = () => {
    return (
      <Head>
        <title>공적인사적모임</title>
        <meta
          name="description"
          content="사적인 느슨한 연대로 국제개발협력 분야의 공적인 문제를 해결합니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/images/meta_image.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
    );
  };

  return (
    <HomeWrapper>
      <PageMetatags />

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

          <RightButtonWrapper marginTop={'72px'}>
            <Link href="/newsletter">
              <LandingButton
                text={'놓친 뉴스레터 다시보기'}
                color={theme.colors.red2}
                hoverColor={theme.colors.red3}
              ></LandingButton>
            </Link>
            <LandingButton
              text={'구독하기'}
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
          <ButtonWrapper marginTop={'72px'}>
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
          <RightButtonWrapper marginTop={'72px'}>
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
              text={'국개협 ON-AIR 제보하기'}
              color={theme.colors.blue1}
              hoverColor={theme.colors.blue2}
              onClick={() => {
                window.open(env.links.on_air);
              }}
            />
            <LandingButton
              text={'국개협 무물 제보하기'}
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
`;

const TextWrapper = styled(motion.div)`
  display: inline-block;
  width: 50%;
`;

const RightTextWrapper = styled(motion.div)`
  text-align: right;
`;

const SectionImageWrapper = styled(motion.div)`
  width: 50%;
  max-width: 700px;
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
