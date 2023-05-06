import styled from '@emotion/styled';
import React from 'react';
import SearchIcon from '../icons/SearchIcon';

const SearchInput = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="검색어를 입력하세요." />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  min-width: 24rem;

  background: var(--white);
  border: 1px solid var(--gray9);
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--gray9);
`;

const IconWrapper = styled.div``;

export default SearchInput;
