import styled from '@emotion/styled';
import CategoryTag from '@/components/Category/CategoryTag';
import { CATEGORIES } from '@/contents/category';
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
        <CategoryTag category={{ id: 0, name: '전체' }} onClick={onClickCategory} />
        {categories.map((category: any) => (
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
