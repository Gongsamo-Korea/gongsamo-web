import styled from '@emotion/styled';
import CategoryTag from '@/components/Category/CategoryTag';
import { useRouter } from 'next/router';
import Slider from 'react-slick';

const Categories = ({ categories }: any) => {
  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  console.log('선택된 카테고리', router.query.category);
  const onClickCategory = (category: number) => {
    if (category === 0) {
      return router.replace({
        pathname: '/newsletter',
      });
    }
    router.replace({
      pathname: '/newsletter',
      query: {
        keyword: '',
        category: category,
        page: 1,
      },
    });
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <CategoryTag
          category={{ id: 0, name: '전체' }}
          onClick={onClickCategory}
          selectedCategory={router.query.category}
        />
        {categories.map((category: any) => (
          <CategoryTag
            key={category.name}
            category={category}
            onClick={onClickCategory}
            selectedCategory={router.query.category}
          />
        ))}
      </StyledSlider>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 650px;
    height: 3.5rem;
  }
  .slick-active {
    display: flex;
    justify-content: center;
  }
  .slick-prev:before {
    color: black;
  }

  .slick-next:before {
    color: black;
  }
`;

export default Categories;
