import styled from '@emotion/styled';

const NewsLetterHeader = () => {
  return (
    <Wrapper>
      <MainTitle>지난 뉴스레터 모아보기</MainTitle>
      <h3>매주 화요일과 목요일! 김칩에 발행된 콘텐츠를 모아보세요!</h3>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  gap: 30px;
`;

const MainTitle = styled('h2')`
  font-size: xx-large;
  font-weight: 700;
`;

export default NewsLetterHeader;
