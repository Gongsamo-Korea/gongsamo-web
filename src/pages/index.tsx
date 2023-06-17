import LandingBanner from '@/components/ui/banners/LandingBanner';
import LandingButton from '@/components/ui/buttons/LandingButton';
import Typography52 from '@/components/ui/textStyles/Typography52';
import theme from '@/styles/theme';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <HomeWrapper>
      <LandingBanner />
      <LandingSection>
        <TextWrapper>
          <Typography52
            type={'span'}
            text={`공적인 사적모임에서는\n국제개발협력 청년들을\n`}
            color={theme.colors.gray9}
          />
          <Typography52 type={'span'} text={`연결`} color={theme.colors.red3} />
          <Typography52
            type={'span'}
            text={`하고 위트있게 작당하며\n트렌디하게 `}
            color={theme.colors.gray9}
          />
          <Typography52 type={'span'} text={`공유`} color={theme.colors.blue3} />
          <Typography52 type={'span'} text={`해요`} color={theme.colors.gray9} />
        </TextWrapper>
        <SectionImageWapper>
          <SectionImage src={'/images/landing_section_img1.webp'} alt="section1" />
        </SectionImageWapper>
      </LandingSection>
      <LandingSection>
        <SectionImageWapper>
          <SectionImage src={'/images/landing_section_img2.webp'} alt="section1" />
        </SectionImageWapper>
        <RightTextWrapper>
          <Typography52
            type={'span'}
            text={`국제개발협력 NO1.뉴스레터\n`}
            color={theme.colors.gray9}
          />
          <Typography52 type={'span'} text={`김치앤칩스`} color={theme.colors.red3} />
          <Typography52
            type={'span'}
            text={`를 만들어\n지구 속 세계,\n세계 속 우리이야기를 전해요`}
            color={theme.colors.gray9}
          />

          <RightButtonWrapper marginTop={'72px'}>
            <LandingButton text={'놓친 뉴스레터 다시보기'} color={theme.colors.red2} />
            <LandingButton text={'구독하기'} color={theme.colors.blue1} />
          </RightButtonWrapper>
        </RightTextWrapper>
      </LandingSection>
      <YellowCircleElemnt />
      <LandingSection>
        <TextWrapper>
          <Typography52 type={'span'} text={`사적인 `} color={theme.colors.red3} />
          <Typography52 type={'span'} text={`느슨한 연대로\n`} color={theme.colors.gray9} />
          <Typography52 type={'span'} text={`공적인 `} color={theme.colors.blue3} />
          <Typography52 type={'span'} text={`문제를 해결해요`} color={theme.colors.gray9} />
          <ButtonWrapper marginTop={'72px'}>
            <LandingButton text={'작당 둘러보기'} color={theme.colors.red2} />
          </ButtonWrapper>
        </TextWrapper>
        <SectionImageWapper>
          <SectionImage src={'/images/landing_section_img3.webp'} alt="section3" />
        </SectionImageWapper>
      </LandingSection>
      <BlueCircleElemnt />
      <LandingSection>
        <SectionImageWapper>
          <SectionImage src={'/images/landing_section_img4.webp'} alt="section4" />
        </SectionImageWapper>
        <RightTextWrapper>
          <Typography52
            type={'span'}
            text={`공적인사적모임과 함께\n작당 어때요?`}
            color={theme.colors.gray9}
            textAlign="right"
          />
          <RightButtonWrapper marginTop={'72px'}>
            <LandingButton text={'공적인사적모임 활동\n둘러보기'} color={theme.colors.red2} />
            <LandingButton
              text={'국제개발협력 활동가\n오픈카톡방 참여하기'}
              color={theme.colors.red2}
            />
          </RightButtonWrapper>
          <RightButtonWrapper marginTop={'4px'}>
            <LandingButton text={'국개협 ON-AIR 제보하기'} color={theme.colors.blue1} />
            <LandingButton text={'국개협 무물 제보하기'} color={theme.colors.blue1} />
          </RightButtonWrapper>
        </RightTextWrapper>
      </LandingSection>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main``;

const LandingSection = styled.section`
  padding: 225px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: inline-block;
  width: 50%;
`;

const RightTextWrapper = styled.div`
  text-align: right;
`;

const SectionImageWapper = styled.div`
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

const YellowCircleElemnt = styled.div`
  position: absolute;
  width: 904px;
  height: 769px;
  right: 0;
  top: 2334px;

  /* yellow 100 */

  background: #fff9da;
  opacity: 0.2;
  filter: blur(143px);
`;

const BlueCircleElemnt = styled.div`
  position: absolute;
  width: 972px;
  height: 511px;
  left: -164px;
  top: 3410px;

  /* Aqua 200 */

  background: #c6f2f2;
  opacity: 0.3;
  filter: blur(143px);
`;
