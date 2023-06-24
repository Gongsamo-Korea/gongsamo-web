import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography17 from '../textStyles/Typography17';

interface LandingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

const LandingButton = ({ text, color, ...HTMLButtonElement }: LandingButtonProps) => {
  return (
    <ButtonWrapper color={color} onClick={HTMLButtonElement.onClick}>
      <Typography17 text={text} color={theme.colors.gray9} weight={700} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 24px;
  background: ${({ color }) => color};

  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 0px 86px 86px 86px;
  width: fit-content;
`;

export default LandingButton;
