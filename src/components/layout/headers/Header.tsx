import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography17 from '@/components/ui/textStyles/Typography17';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Squash as Hamburger } from 'hamburger-react';
import { css } from '@emotion/react';

export const MENU_ITEMS = [
  {
    id: 1,
    name: '공사모 소개',
    url: '/about',
  },
  {
    id: 2,
    name: '김칩 다시보기',
    url: '/newsletter',
  },
  {
    id: 3,
    name: '문의하기',
    url: '/contact',
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <HeaderWrapper isOpen={isMenuOpen}>
      <ItemWrapper>
        <TitleWrapper isOpen={isMenuOpen}>
          <Link
            href="/"
            onClick={() => {
              if (isMenuOpen) setIsMenuOpen(false);
            }}
          >
            <LogoWrapper>
              {isMobile ? (
                <LogoImg src="/images/gongsamo_simple_logo.webp" alt="logo"></LogoImg>
              ) : (
                <LogoImg src="/images/gongsamo_logo.png" alt="logo"></LogoImg>
              )}
            </LogoWrapper>
          </Link>
          <MenuButton>
            <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={20} />
          </MenuButton>
        </TitleWrapper>
        <HeaderContent isOpen={isMenuOpen}>
          {MENU_ITEMS.map((item) => {
            return (
              <MenuLink key={`header-${item.id}`}>
                <Link
                  href={item.url}
                  onClick={() => {
                    if (isMenuOpen) setIsMenuOpen(false);
                  }}
                >
                  <Typography17 text={item.name} color={theme.colors.gray9} />
                </Link>
              </MenuLink>
            );
          })}
        </HeaderContent>
      </ItemWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;

  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -o-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};

  @media screen and (max-width: 1024px) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 100%;
        backdrop-filter: blur(27px);
        -webkit-backdrop-filter: blur(27px);
        -moz-backdrop-filter: blur(27px);
        -o-backdrop-filter: blur(27px);
        z-index: 99999;
      `}
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 140rem;
  padding: 1.6rem 8rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0 1.6rem;
    height: 100%;
  }
`;

const TitleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    padding: 1.6rem 0;

    ${({ isOpen, theme }) =>
      isOpen &&
      css`
        border-bottom: 1px solid ${theme.colors.gray5};
      `}
  }
`;

const LogoWrapper = styled.h1`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 13.5rem;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 3rem;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const HeaderContent = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  color: ${({ theme }) => theme.colors.gray9};
  width: max-content;

  @media screen and (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    margin-top: 4rem;
    width: 100%;
    gap: 4.8rem;
  }
`;

const MenuLink = styled.div`
  cursor: pointer;

  p {
    font-weight: 400;
    white-space: nowrap;
    text-align: center;

    &:hover {
      font-weight: 700;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;

    p {
      width: 100%;
      font-size: 2rem;
    }
  }
`;

export default Header;
