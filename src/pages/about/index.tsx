import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Image from 'next/image';
import ContentCard from '@/components/ui/cards/ContentCard';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography28 from '@/components/ui/textStyles/Typography28';
import Typography24 from '@/components/ui/textStyles/Typography24';
import MemberIntroductionCard from '@/components/About/MemberIntroductionCard';
import { MORE_INFO } from '@/contents/about';
import Link from 'next/link';
import TitleBox from '@/components/ui/titleBoxes/TitleBox';
import { contentVariants, titleVariants } from '@/styles/interactions';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });
  return (
    <Wrapper>
      <TitleBox
        title="공적인사적모임을 소개해요"
        description={
          isMobile
            ? '공적인사적모임이 궁금하셨다구요?\n그렇다면 아주 잘 찾아오셨어요!'
            : '공적인사적모임이 궁금하셨다구요? 그렇다면 아주 잘 찾아오셨어요!'
        }
      />
      <IntroductionWrapper>
        <IntroductionImageWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Image
            src="/images/gongsamo_logo_vertical.png"
            alt={'gongsamo logo image'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </IntroductionImageWrapper>
        <IntroductionTextWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography17
            text="공적인사적모임은 ‘사적인 느슨한 연대로 국제개발협력 분야의 공적인 문제를 해결한다’는 뜻을 가진 청년 모임이에요."
            color={theme.colors.gray9}
          />
          <Typography17
            text="점으로 흩어져 있던 국제개발협력 분야의 청년들과 뉴스레터 ‘김칩’을 통해 목소리를 주고 받으며 시작했어요. 4명의 활동가로 시작했지만 뜻이 맞는 이들이 꾸준히 합류해 어느새 44명의 청년들과 함께하고 있어요."
            color={theme.colors.gray9}
            marginTop="1.4rem"
          />
          <Typography17
            text="공적인사적모임은 여러분과 함께 작당하고 싶어요.
            혼자서는 목소리를 내지 못했던 것, 해보지 못했던 것, 바꾸지 못했던 것을
            저희와 함께 시도하고 도전해보면 좋겠어요."
            color={theme.colors.gray9}
            marginTop="1.4rem"
          />
        </IntroductionTextWrapper>
      </IntroductionWrapper>
      <MoreInfoWrapper>
        <CustomTitle
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {isMobile ? (
            <Typography24
              text={`공적인사적모임 이야기가\n더 궁금하다면`}
              color={theme.colors.gray9}
              weight={700}
            />
          ) : (
            <Typography28
              text="공적인사적모임 이야기가 더 궁금하다면"
              color={theme.colors.gray9}
              weight={700}
            />
          )}
        </CustomTitle>
        <ContentCardWrapper
          variants={contentVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          {MORE_INFO.map((info, index) => (
            <Link key={index} href={info.link} target={info.openInNewTab ? '_blank' : '_self'}>
              <ContentCard
                key={index}
                title={info.title}
                date={info.date}
                link={info.link}
                openInNewTab={info.openInNewTab}
                thumbnail={info.thumbnail}
                backgroundColor={
                  [
                    theme.colors.blue1,
                    theme.colors.green1,
                    theme.colors.yellow1,
                    theme.colors.red1,
                  ][Math.floor(Math.random() * 4)]
                }
              />
            </Link>
          ))}
        </ContentCardWrapper>
      </MoreInfoWrapper>
      <MemberIntroductionWrapper>
        <CustomTitle
          variants={titleVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <Typography28
            text="공적인사적모임을 함께 만들고 있는 팀원들이에요"
            color={theme.colors.gray9}
            weight={700}
          />
        </CustomTitle>
        <MemberIntroductionCard />
      </MemberIntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 14rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rem;

  @media screen and (max-width: 1024px) {
    padding: 5rem 1.6rem 20rem;
    gap: 4rem;
  }
`;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  max-width: 90rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const IntroductionImageWrapper = styled(motion.div)`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  flex: none;
  flex-grow: 0;
  display: flex;
  padding: 5rem;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 20rem;
    height: 20rem;
    padding: 4rem;
  }
`;

const IntroductionTextWrapper = styled(motion.div)``;

const MoreInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const CustomTitle = styled(motion.div)``;

const ContentCardWrapper = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(37rem, 1fr));
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }
`;

const MemberIntroductionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;

export default About;
