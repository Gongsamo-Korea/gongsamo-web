import theme from '@/styles/theme';
import styled from '@emotion/styled';
import { TitleBoxProps } from '@/types/props';
import Typography34 from '@/components/ui/textStyles/Typography34';
import Typography20 from '@/components/ui/textStyles/Typography20';
import Typography24 from '@/components/ui/textStyles/Typography24';
import Typography15 from '@/components/ui/textStyles/Typography15';
import { motion } from 'framer-motion';
import { titleVariants } from '@/styles/interactions';
import { useMediaQuery } from 'react-responsive';

const TitleBox = ({ title, description }: TitleBoxProps) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Wrapper
      variants={titleVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      {isMobile ? (
        <Typography24 text={title} color={theme.colors.gray9} weight={700} type={`h2`} />
      ) : (
        <Typography34 text={title} color={theme.colors.gray9} weight={700} type={`h2`} />
      )}
      {description &&
        (isMobile ? (
          <Typography15
            text={description}
            color={theme.colors.gray9}
            weight={400}
            type={`p`}
            textAlign="center"
          />
        ) : (
          <Typography20 text={description} color={theme.colors.gray9} weight={400} type={`p`} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
`;

export default TitleBox;
