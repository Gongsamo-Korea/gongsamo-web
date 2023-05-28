import ContentCard from '@/components/ui/cards/ContentCard';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography28 from '@/components/ui/textStyles/Typography28';
import Typography34 from '@/components/ui/textStyles/Typography34';
import { MORE_INFO } from '@/contents/about';
import theme from '@/styles/theme';
import styled from '@emotion/styled';
import Image from 'next/image';

const About = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography34
          text="공적인사적모임을 소개합니다!"
          color={theme.colors.gray9}
          textAlign="center"
        />
        <Typography17
          text="공적인사적모임은 뭐하는 곳일까요? 어떤 일을 할까요? 어떻게 만들어졌을까요?"
          color={theme.colors.gray9}
          textAlign="center"
          marginTop="1.2rem"
        />
      </TitleWrapper>
      <IntroductionWrapper>
        <IntroductionImageWrapper>
          <Image
            src="/images/contents_thumbnail.jpg"
            alt={'thumbnail'}
            priority={true}
            width={240}
            height={240}
          />
        </IntroductionImageWrapper>
        <IntroductionTextWrapper>
          <Typography17
            text="공적인사적모임은 국내최초 국제개발협력 활동가 커뮤니티로, 대장 오의석이 만들고 어쩌구 잘 해서 국내 최대의 힙한 커뮤니티가 되었고 어쩌구... 하와이 연수까지 가게되는데 어쩌구.... 공적인사적모임에 오신걸 환영합니다!"
            color={theme.colors.gray9}
          />
          <Typography17
            text="공적인사적모임은 국내최초 국제개발협력 활동가 커뮤니티로, 대장 오의석이 만들고 어쩌구 잘 해서 국내 최대의 힙한 커뮤니티가 되었고 어쩌구... 하와이 연수까지 가게되는데 어쩌구.... 공적인사적모임에 오신걸 환영합니다!"
            color={theme.colors.gray9}
            marginTop="1.4rem"
          />
          <Typography17
            text="공적인사적모임은 국내최초 국제개발협력 활동가 커뮤니티로, 대장 오의석이 만들고 어쩌구 잘 해서 국내 최대의 힙한 커뮤니티가 되었고 어쩌구... 하와이 연수까지 가게되는데 어쩌구.... 공적인사적모임에 오신걸 환영합니다!"
            color={theme.colors.gray9}
            marginTop="1.4rem"
          />
        </IntroductionTextWrapper>
      </IntroductionWrapper>
      <MoreInfoWrapper>
        <Typography28
          text="공적인사적모임 이야기가 더 궁금하다면"
          color={theme.colors.gray9}
          weight={700}
        />
        <ContentCardWrapper>
          {MORE_INFO.map((info, index) => (
            <ContentCard
              key={index}
              title={info.title}
              subtitle={info.subtitle}
              date={info.date}
              contents={info.contents}
              tags={info.tags}
            />
          ))}
        </ContentCardWrapper>
      </MoreInfoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 14rem 14.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14rem;
`;

const TitleWrapper = styled.div``;

const IntroductionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  max-width: 90rem;
`;

const IntroductionImageWrapper = styled.div`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  flex: none;
  flex-grow: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

const IntroductionTextWrapper = styled.div``;

const MoreInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const ContentCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

export default About;
