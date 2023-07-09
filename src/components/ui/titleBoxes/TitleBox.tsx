import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { TitleBoxProps } from '@/types/props';
import Typography34 from '@/components/ui/textStyles/Typography34';
import Typography20 from '@/components/ui/textStyles/Typography20';

const TitleBox = ({ backgroundColor, title, description }: TitleBoxProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor ?? theme.colors.linear4}>
      <Typography34 text={title} color={theme.colors.gray9} weight={700} />
      {description && <Typography20 text={description} color={theme.colors.gray9} weight={400} />}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 5rem;
  gap: 1.4rem;

  width: 100%;

  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 1.6rem;

  flex: none;
  flex-grow: 0;
`;

export default TitleBox;
