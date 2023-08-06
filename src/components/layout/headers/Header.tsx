import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography17 from '@/components/ui/textStyles/Typography17';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Squash as Hamburger } from 'hamburger-react';

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
    <HeaderWrapper>
      <ItemWrapper>
        <Link href="/">
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
        <HeaderContent isOpen={isMenuOpen}>
          {MENU_ITEMS.map((item) => {
            return (
              <Link href={item.url} key={`header-${item.id}`}>
                <MenuLink>
                  <Typography17 text={item.name} color={theme.colors.gray9} />
                </MenuLink>
              </Link>
            );
          })}
        </HeaderContent>
      </ItemWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  position: sticky;
  top: 0;
  z-index: 100;

  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -o-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 140rem;
  padding: 1.6rem 8rem;
  @media screen and (max-width: 1024px) {
    padding: 0.8rem 1.6rem;
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

  @media (max-width: 1024px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 6rem;
    right: 0;
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.gray5};
    border-radius: 5px;
    padding: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
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

export default Header;
