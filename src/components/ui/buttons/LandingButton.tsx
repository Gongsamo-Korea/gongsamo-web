import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Typography17 from '@/components/ui/textStyles/Typography17';

interface LandingButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  hoverColor?: string;
}

const LandingButton = ({ text, color, hoverColor, ...HTMLButtonElement }: LandingButtonProps) => {
  return (
    <ButtonWrapper color={color} onClick={HTMLButtonElement.onClick} hoverColor={hoverColor}>
      <Typography17 text={text} color={theme.colors.gray9} weight={700} />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ color: string; hoverColor?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 24px;
  background: ${({ color }) => color};

  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 0px 86px 86px 86px;
  width: fit-content;

  &:hover {
    background: ${({ hoverColor, color }) => hoverColor ?? color};
    transition: all 0.3s ease-in-out;
  }
`;

export default LandingButton;
