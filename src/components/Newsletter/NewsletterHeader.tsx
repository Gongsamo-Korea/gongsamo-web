import styled from '@emotion/styled';
import Typography28 from '@/components/ui/textStyles/Typography28';
import Typography17 from '@/components/ui/textStyles/Typography17';
import theme from '@/styles/theme';

const NewsLetterHeader = () => {
  return (
    <Wrapper>
      <Typography28
        text={'김칩 다시보기'}
        color={theme.colors.gray9}
        textAlign="left"
        marginTop="0.5rem"
      />
      <Typography17
        text={'매주 화요일과 목요일! 김칩에 발행된 콘텐츠를 모아보세요!'}
        color={theme.colors.gray9}
        textAlign="left"
        marginTop="0.5rem"
      />
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

export default NewsLetterHeader;
