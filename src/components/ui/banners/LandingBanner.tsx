import styled from '@emotion/styled';
import theme from '@/styles/theme';
import SymbolGreenIcon from '@/components/ui/icons/SymbolGreenIcon';
import SymbolOrangeIcon from '@/components/ui/icons/SymbolOrangeIcon';
import SymbolYellowIcon from '@/components/ui/icons/SymbolYellowIcon';
import SymbolRedIcon from '@/components/ui/icons/SymbolRedIcon';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography34 from '@/components/ui/textStyles/Typography34';
import Slider from 'react-slick';
import { ArrowProps, BannerProps } from '@/models/banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { contentVariants } from '@/styles/interactions';
import { motion } from 'framer-motion';

const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return <NextCustomArrow className={className} style={{ ...style }} onClick={onClick} />;
};

const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return <PrevCustomArrow className={className} style={{ ...style }} onClick={onClick} />;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  touchThreshold: 1000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const LandingBanner = ({ banners }: any) => {
  const addDefaultSrc = (ev: React.SyntheticEvent) => {
    let target = ev.target as HTMLImageElement;
    target.src = '/images/banner.webp';
  };
  const isInternalLink = (url: string) => {
    const currentHostname = window.location.hostname;
    const urlHostname = new URL(url).hostname;

    return currentHostname === urlHostname;
  };

  return (
    <Wrapper
      variants={contentVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <BannerInfoWrapper>
        <SymbolIconWrapper>
          <SymbolGreenIcon />
          <SymbolOrangeIcon />
          <SymbolYellowIcon />
          <SymbolRedIcon />
        </SymbolIconWrapper>
        <Typography34
          text={`재미있는 국제개발협력\n생태계, 공적인사적모임과\n함께 작당해요!`}
          color={theme.colors.gray9}
          marginTop="2.4rem"
        />
        <InputWrapper>
          <link
            rel="stylesheet"
            href="https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form_style.css"
          />
          <div id="stb_subscribe">
            <form
              action="https://stibee.com/api/v1.0/lists/HW8_Sv3t4TdL_N2XDOPULUk12OGV/public/subscribers"
              method="POST"
              target="_blank"
              acceptCharset="utf-8"
              className="stb_form"
              name="stb_subscribe_form"
              id="stb_subscribe_form"
            >
              <fieldset className="stb_form_set">
                <input
                  type="text"
                  className="stb_form_set_input"
                  id="stb_email"
                  name="email"
                  required={true}
                  placeholder="이메일 주소"
                />
                <div className="stb_form_msg_error" id="stb_email_error"></div>
              </fieldset>

              <fieldset className="stb_form_set">
                <input
                  type="text"
                  className="stb_form_set_input"
                  id="stb_name"
                  name="name"
                  placeholder="이름(닉네임)"
                />
                <div className="stb_form_msg_error" id="stb_name_error"></div>
              </fieldset>

              <div className="stb_form_policy">
                <label>
                  <input type="checkbox" id="stb_policy" value="stb_policy_true" />
                  <span>(필수)</span>
                  <button
                    id="stb_form_modal_open"
                    data-modal="stb_form_policy_modal"
                    className="stb_form_modal_open_btn"
                    type="button"
                  >
                    개인정보 수집 및 이용
                  </button>
                  에 동의합니다.
                </label>
                <div className="stb_form_msg_error" id="stb_policy_error"></div>
                <div
                  className="stb_form_modal stb_form_policy_text blind"
                  id="stb_form_policy_modal"
                >
                  <div className="stb_form_modal_body">
                    <h1 className="stb_form_modal_title">개인정보 수집 및 이용</h1>
                    <p className="stb_form_modal_text">
                      뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된 정보는
                      발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우
                      즉시 파기됩니다.
                    </p>
                    <div className="stb_form_modal_btn">
                      <button
                        id="stb_form_modal_close"
                        className="stb_form_modal_close_btn"
                        data-modal="stb_form_policy_modal"
                        type="button"
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                  <div className="stb_form_modal_bg" id="stb_form_modal_bg"></div>
                </div>
              </div>

              <div className="stb_form_result" id="stb_form_result"></div>

              <fieldset className="stb_form_set_submit">
                <button
                  type="submit"
                  className="stb_form_submit_button"
                  id="stb_form_submit_button"
                  style={{ backgroundColor: theme.colors.blue1 }}
                >
                  <Typography17 text={'김칩 구독하기'} color={theme.colors.gray9} weight={700} />
                </button>
              </fieldset>
            </form>
          </div>
          <script
            type="text/javascript"
            src="https://s3.ap-northeast-2.amazonaws.com/resource.stibee.com/subscribe/stb_subscribe_form.js"
          ></script>
        </InputWrapper>
      </BannerInfoWrapper>
      <BannerImageWrapper>
        {banners ? (
          <Slider {...settings}>
            {banners?.map((banner: BannerProps, index: number) => {
              return (
                <BannerImg
                  key={`banner-${index}`}
                  src={banner.thumbnail_url}
                  alt={banner.banner_text}
                  onClick={() =>
                    window.open(
                      banner.hyper_link_url,
                      isInternalLink(banner.hyper_link_url) ? '_self' : '_blank',
                    )
                  }
                  onError={addDefaultSrc}
                />
              );
            })}
          </Slider>
        ) : (
          <BannerImg src={'/images/banner.webp'} alt={'공적인사적모임'} />
        )}
      </BannerImageWrapper>
    </Wrapper>
  );
};

const CustomArrow = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  z-index: 999;

  &:before {
    color: ${({ theme }) => theme.colors.gray9};
    font-size: 4rem;
    opacity: 0.1;
  }
`;

const NextCustomArrow = styled(CustomArrow)`
  right: 0;
`;

const PrevCustomArrow = styled(CustomArrow)`
  left: 0;
`;

const Wrapper = styled(motion.div)`
  padding: 8rem 8rem 6rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 8rem;

  #stb_subscribe {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: initial;
    border: none;
    padding: 0;

    .stb_form_set {
      padding-bottom: 0.6rem;

      input {
        display: flex;
        align-items: center;
        padding: 20px;
        width: 100%;

        background: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.gray9};
        border-radius: 10px;

        &:nth-last-of-type(2) {
          margin-top: 0.6rem;
        }
      }
    }

    .stb_form_policy {
      margin-top: 0.6rem;
    }

    .stb_form_submit_button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 12px 24px;
      background: ${({ color }) => color};

      border: 1px solid ${({ theme }) => theme.colors.gray9} !important;
      border-radius: 0px 86px 86px 86px;
      width: fit-content;
      align-items: center;
    }
  }
`;

const BannerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  flex: 1;
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
  max-width: 50%;
  cursor: pointer;
`;

const BannerImg = styled.img`
  width: 100%;
  aspect-ratio: 6/4;
  object-fit: cover;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
`;

export default LandingBanner;
