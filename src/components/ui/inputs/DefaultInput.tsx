import styled from '@emotion/styled';
import React from 'react';

interface DefaultInputProps {
  placeholder: string;
  type?: string;
}

const DefaultInput = ({ placeholder, type = 'text' }: DefaultInputProps) => {
  return (
    <Wrapper>
      <Input type={type} placeholder={placeholder} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 10px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray9};
  font-size: 1.4rem;
`;

const IconWrapper = styled.div``;

export default DefaultInput;
