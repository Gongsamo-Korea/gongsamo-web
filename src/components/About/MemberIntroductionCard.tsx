import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Link from 'next/link';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography15 from '@/components/ui/textStyles/Typography15';
import Typography13 from '@/components/ui/textStyles/Typography13';
import { MEMBERS } from '@/contents/about';
import { motion } from 'framer-motion';
import { contentVariants } from '@/styles/interactions';
import { useMediaQuery } from 'react-responsive';

const MemberIntroductionCard = () => {
  const [selectedTeam, setSelectedTeam] = useState<number>(0);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <Wrapper
      variants={contentVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <IndexButtonWrapper>
        {MEMBERS.map((team, index) => (
          <IndexButton
            key={index}
            onClick={() => setSelectedTeam(index)}
            index={index}
            isCurrentIndex={selectedTeam === index}
          >
            {isMobile ? (
              <Typography15
                text={`${team.team}팀`}
                color={selectedTeam === index ? theme.colors.gray9 : theme.colors.gray7}
                weight={selectedTeam === index ? 700 : 400}
              />
            ) : (
              <Typography17
                text={`${team.team}팀`}
                color={selectedTeam === index ? theme.colors.gray9 : theme.colors.gray7}
                weight={selectedTeam === index ? 700 : 400}
              />
            )}
          </IndexButton>
        ))}
      </IndexButtonWrapper>
      <TeamIntroductionWrapper>
        {MEMBERS[selectedTeam].introduction && (
          <TeamIntroduction>
            {isMobile ? (
              <Typography15
                text={MEMBERS[selectedTeam].introduction}
                color={theme.colors.gray9}
                textAlign="center"
              />
            ) : (
              <Typography17
                text={MEMBERS[selectedTeam].introduction}
                color={theme.colors.gray9}
                textAlign="center"
              />
            )}
          </TeamIntroduction>
        )}
        <MembersWrapper>
          {MEMBERS[selectedTeam].members
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((member, index) => (
              <MemberItem key={index}>
                <MemberTitleWrapper>
                  <Typography17 text={member.name} color={theme.colors.gray9} weight={700} />
                  {member.link && (
                    <Link href={member.link} target="_blank">
                      <Typography13
                        text="Learn more"
                        color={theme.colors.gray6}
                        style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                      />
                    </Link>
                  )}
                </MemberTitleWrapper>
                <Typography15 text={member.introduction} color={theme.colors.gray9} />
              </MemberItem>
            ))}
        </MembersWrapper>
      </TeamIntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  width: 100%;
`;

const IndexButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.4rem;
`;

const IndexButton = styled.button<{ index: number; isCurrentIndex: boolean }>`
  padding: 0.8rem 2.4rem;
  width: 10rem;

  background: ${({ isCurrentIndex, theme, index }) =>
    isCurrentIndex
      ? [theme.colors.green2, theme.colors.yellow2, theme.colors.blue2, theme.colors.red2][index]
      : [theme.colors.green1, theme.colors.yellow1, theme.colors.blue1, theme.colors.red1][index]};

  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray9};
  border-radius: 1.6rem 1.6rem 0px 0px;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: ${({ index, theme }) =>
      [theme.colors.green2, theme.colors.yellow2, theme.colors.blue2, theme.colors.red2][index]};
    transition: all 0.3s ease-in-out;

    p {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.gray9};
    }
  }

  &:active {
    background: ${({ index, theme }) =>
      [theme.colors.green2, theme.colors.yellow2, theme.colors.blue2, theme.colors.red2][index]};
  }

  @media screen and (max-width: 1024px) {
    padding: 0.8rem 2rem;
    width: max-content;
  }
`;

const TeamIntroductionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6rem;

  background: ${({ theme }) => theme.colors.gray1};
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 0px 1.6rem 1.6rem 1.6rem;

  flex: none;
  order: 1;
  flex-grow: 0;

  padding: 4.8rem;

  @media screen and (max-width: 1024px) {
    padding: 2.4rem;
  }
`;

const TeamIntroduction = styled.div`
  width: 100%;
`;

const MembersWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 4rem 2rem;
`;

const MemberItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const MemberTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export default MemberIntroductionCard;
