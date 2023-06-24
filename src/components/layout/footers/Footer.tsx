import styled from '@emotion/styled';
import Link from 'next/link';
import Typography15 from '@/components/ui/textStyles/Typography15';
import { MENU_ITEMS } from '@/components/layout/headers/Header';
import KakaoIcon from '@/components/ui/icons/KakaoIcon';
import InstagramIcon from '../../ui/icons/InstagramIcon';
import env from '@/config';
import theme from '@/styles/theme';

const Footer = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg src="/images/gongsamo_logo.png" alt="logo"></LogoImg>
      </LogoWrapper>
      <ContentWrapper>
        <address>
          <Typography15
            text={'서울시 종로구 삼일대로 428 500호 공익경영센터'}
            color={theme.colors.gray6}
          />
          <Typography15 text={'555-555-5555'} color={theme.colors.gray6} />
          <Typography15 text={'0044moim@gmail.com'} color={theme.colors.gray6} />
        </address>
      </ContentWrapper>
      <MenuContainer>
        <MenuList>
          {MENU_ITEMS.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                <MenuLink>
                  <Typography15 text={item.name} color={theme.colors.gray6} />
                </MenuLink>
              </Link>
            );
          })}
        </MenuList>
      </MenuContainer>
      <BottomWrapper>
        <Typography15
          text={`\u00A92023 Gongsamo. All rights reserved.`}
          color={theme.colors.gray6}
        />
        <SocialMediaWrapper>
          <Link href={env.links.subcribe_newsletter} target="_blank">
            <Typography15 text={'뉴스레터 구독하기'} color={theme.colors.gray6} />
          </Link>
          <Link href={env.links.kakao} target="_blank">
            <KakaoIcon color={theme.colors.gray6} />
          </Link>
          <Link href={env.links.instagram} target="_blank">
            <InstagramIcon color={theme.colors.gray6} />
          </Link>
        </SocialMediaWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5.2rem 8rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const LogoWrapper = styled.h1`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 13.5rem;
  height: 2.5rem;
`;

const ContentWrapper = styled.div`
  margin-top: 4rem;
`;

const MenuContainer = styled.div`
  margin-top: 2rem;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 2.6rem;
`;

const MenuLink = styled.div`
  cursor: pointer;
  p {
    font-weight: 400;

    &:hover {
      font-weight: 700;
    }
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
`;

export default Footer;
