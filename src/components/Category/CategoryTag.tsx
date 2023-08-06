import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography15 from '@/components/ui/textStyles/Typography15';
import type { Category } from '@/models/category';

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
      borderWidth={selectedCategory == category.id ? '2px' : '1px'}
      onClick={() => onClick(category.id)}
    >
      <Typography15
        text={category.name}
        color={theme.colors.gray9}
        weight={selectedCategory == category.id ? 700 : 400}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button<{ background: string; borderWidth: string }>`
  &:hover {
    border: 0.2rem solid ${({ theme }) => theme.colors.gray9};
    p:first-of-type {
      font-weight: 600;
    }
  }
  display: inline-flex;
  align-items: center;

  box-sizing: border-box;
  padding: 0.1rem 1rem;

  border-radius: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.gray8};
  border-width: ${({ borderWidth }) => borderWidth};
  background: ${({ background }) => background};
`;

export default CategoryTag;
