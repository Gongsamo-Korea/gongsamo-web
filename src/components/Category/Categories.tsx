import styled from '@emotion/styled';
import CategoryTag from '@/components/Category/CategoryTag';
import ChevronButton from '@/components/Category/ChevronButton';
import { CATEGORIES } from '@/contents/category';
import { useRouter } from 'next/router';

const Categories = () => {
  const router = useRouter();

  const left = () => {
    console.log('left');
  };

  const right = () => {
    console.log('right');
  };

  const onClickCategory = (category: any) => {
    router.replace({
      pathname: '/newsletter',
      query: {
        keyword: category,
        page: 1,
      },
    });
  };

  return (
    <Wrapper>
      <ChevronButton direction="left" onClick={left} />
      {CATEGORIES.map((category, index) => (
        <CategoryTag key={index} category={category} onClick={onClickCategory} />
      ))}
      <ChevronButton direction="right" onClick={right} />
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

export default Categories;
