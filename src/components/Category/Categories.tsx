import styled from '@emotion/styled';
import CategoryTag from '@/components/Category/CategoryTag';
import { CATEGORIES } from '@/contents/category';
import { useRouter } from 'next/router';
import Slider from 'react-slick';

const Categories = () => {
  const router = useRouter();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };

  const onClickCategory = (category: any) => {
    if (category === '전체') {
      return router.replace({
        pathname: '/newsletter',
      });
    }
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
      <StyledSlider {...settings}>
        {CATEGORIES.map((category) => (
          <CategoryTag key={category.id} category={category} onClick={onClickCategory} />
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
    width: 600px;
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
