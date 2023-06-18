import styled from '@emotion/styled';
import theme from '@/styles/theme';
import SymbolGreenIcon from '../icons/SymbolGreenIcon';
import SymbolOrangeIcon from '../icons/SymbolOrangeIcon';
import SymbolYellowIcon from '../icons/SymbolYellowIcon';
import SymbolRedIcon from '../icons/SymbolRedIcon';
import Typography52 from '../textStyles/Typography52';
import DefaultInput from '../inputs/DefaultInput';
import LandingButton from '../buttons/LandingButton';
import env from '@/config';

const LandingBanner = () => {
  return (
    <Wrapper>
      <BannerInfoWrapper>
        <SymbolIconWrapper>
          <SymbolGreenIcon />
          <SymbolOrangeIcon />
          <SymbolYellowIcon />
          <SymbolRedIcon />
        </SymbolIconWrapper>
        <Typography52
          text={`재미있는 국제개발협력\n생태계, 공적인사적모임과\n함께 작당해요!`}
          color={theme.colors.gray9}
          marginTop="2.4rem"
        />
        <InputWrapper>
          <DefaultInput placeholder={'이메일 주소'} />
          <DefaultInput placeholder={'이름(닉네임)'} />
        </InputWrapper>
        <ButtonWrapper>
          <LandingButton
            text={'놓친 뉴스레터 다시보기'}
            color={theme.colors.red2}
            onClick={() => {
              window.open(env.links.subcribe_newsletter);
            }}
          />
          <LandingButton text={'구독하기'} color={theme.colors.blue1} />
        </ButtonWrapper>
      </BannerInfoWrapper>
      <BannerImageWrapper>
        <BannerImg src="/images/banner.webp" alt="landing_banner" />
      </BannerImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

const BannerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  flex: 1;
  width: 100%;
  max-width: 660px;
`;

const SymbolIconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 32px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 8px;
`;

const BannerImageWrapper = styled.div`
  flex-shrink: 0;
  width: 55%;
  max-width: 894px;
`;

const BannerImg = styled.img`
  width: 100%;
  aspect-ratio: auto;
`;

export default LandingBanner;
