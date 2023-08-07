import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography15 from '@/components/ui/textStyles/Typography15';
import type { Category } from '@/models/category';
import { useEffect } from 'react';

const CategoryTag = ({
  category,
  onClick,
  selectedCategory,
}: {
  category: Category;
  onClick: (category: any) => void;
  selectedCategory: any;
}) => {
  return (
    <Wrapper
      background={
        [theme.colors.blue1, theme.colors.green1, theme.colors.yellow1, theme.colors.red1][
          Math.floor(Math.random() * 4)
        ]
      }
      onClick={() => onClick(category.id)}
      isSelected={selectedCategory == category.id}
    >
      <Typography15
        text={category.name}
        color={theme.colors.gray9}
        weight={selectedCategory == category.id ? 700 : 400}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button<{ background: string; isSelected: boolean }>`
  &:hover {
    p:first-of-type {
      font-weight: 700;
    }
  }
  display: inline-flex;
  align-items: center;

  box-sizing: border-box;
  padding: 0.1rem 1rem;

  border-radius: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray8};
  background: ${({ background }) => background};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.8)};
`;

export default CategoryTag;
