import styled from '@emotion/styled';
import ChevronLeft from '@/components/ui/icons/ChevronLeft';
import ChevronRight from '@/components/ui/icons/ChevronRight';

const ChevronButton = ({ direction, onClick }: { direction: string; onClick: () => void }) => {
  return (
    <Wrapper onClick={onClick}>{direction === 'left' ? <ChevronLeft /> : <ChevronRight />}</Wrapper>
  );
};

const Wrapper = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default ChevronButton;
