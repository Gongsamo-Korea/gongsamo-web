import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { TitleBoxProps } from '@/types/props';
import Typography34 from '@/components/ui/textStyles/Typography34';
import Typography20 from '@/components/ui/textStyles/Typography20';

const TitleBox = ({ title, description }: TitleBoxProps) => {
  return (
    <Wrapper>
      <Typography34 text={title} color={theme.colors.gray9} weight={700} type={`h2`} />
      {description && (
        <Typography20 text={description} color={theme.colors.gray9} weight={400} type={`p`} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;

export default TitleBox;
