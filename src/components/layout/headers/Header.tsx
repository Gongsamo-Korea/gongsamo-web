import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography17 from '@/components/ui/textStyles/Typography17';

export const MENU_ITEMS = [
  {
    id: 1,
    name: '웰컴투공사모',
    url: '/about',
  },
  {
    id: 2,
    name: '김칩',
    url: '/newsletter',
  },
  {
    id: 3,
    name: '문의하기',
    url: '/contact',
  },
];

const Header = () => {
  return (
    <HeaderWrapper>
      <Link href="/">
        <LogoWrapper>
          <LogoImg src="/images/gongsamo_logo.png" alt="logo"></LogoImg>
        </LogoWrapper>
      </Link>
      <HeaderContent>
        {MENU_ITEMS.map((item) => {
          return (
            <Link href={item.url} key={item.id}>
              <MenuLink>
                <Typography17 text={item.name} color={theme.colors.gray9} />
              </MenuLink>
            </Link>
          );
        })}
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  position: sticky;
  top: 0;
  z-index: 100;

  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -o-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const LogoWrapper = styled.h1`
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 13.5rem;
  height: 2.5rem;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
  color: ${({ theme }) => theme.colors.gray9};
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
