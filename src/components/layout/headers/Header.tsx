import styled from '@emotion/styled';
import Link from 'next/link';
import SearchInput from '@/components/ui/inputs/SearchInput';
import Typography15 from '@/components/ui/textStyles/Typography15';

export const MENU_ITEMS = [
  {
    id: 1,
    name: '웰컴투공사모',
    url: '/intro',
  },
  {
    id: 2,
    name: '김치앤칩스',
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
                <Typography15 text={item.name} color={'--gray9'} />
              </MenuLink>
            </Link>
          );
        })}
        <SearchInput />
      </HeaderContent>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 14.4rem;
  border-bottom: 1px solid var(--gray5);
  position: sticky;
  top: 0;
  background: var(--white);
  z-index: 100;
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
  color: var(--gray9);
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
