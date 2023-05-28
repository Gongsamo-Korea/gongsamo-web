import { useState } from 'react';
import styled from '@emotion/styled';
import theme from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import Typography17 from '@/components/ui/textStyles/Typography17';
import Typography15 from '@/components/ui/textStyles/Typography15';
import Typography13 from '@/components/ui/textStyles/Typography13';
import { MEMBERS } from '@/contents/about';

const MemberIntroductionCard = () => {
  const [selectedTeam, setSelectedTeam] = useState<number>(0);

  return (
    <Wrapper>
      <IndexButtonWrapper>
        {MEMBERS.map((team, index) => (
          <IndexButton key={index} onClick={() => setSelectedTeam(index)} index={index}>
            <Typography17
              text={`${team.team}팀`}
              color={theme.colors.gray9}
              weight={selectedTeam === index ? 700 : 400}
            />
          </IndexButton>
        ))}
      </IndexButtonWrapper>
      <TeamIntroductionWrapper>
        {MEMBERS[selectedTeam].introduction && (
          <TeamIntroduction>
            <Typography17
              text={MEMBERS[selectedTeam].introduction}
              color={theme.colors.gray9}
              textAlign="center"
            />
          </TeamIntroduction>
        )}
        <MembersWrapper>
          {MEMBERS[selectedTeam].members.map((member, index) => (
            <MemberItem key={index}>
              <ImageWrapper>
                <Image
                  src={member.image}
                  alt={'member profile image'}
                  priority={true}
                  width={120}
                  height={120}
                />
              </ImageWrapper>
              <Typography17 text={member.name} color={theme.colors.gray9} weight={700} />
              <Typography15 text={member.introduction} color={theme.colors.gray9} />
              <Link href={member.link} target="_blank">
                <Typography13
                  text="Learn more"
                  color={theme.colors.gray6}
                  style={{ fontStyle: 'italic', textDecoration: 'underline' }}
                />
              </Link>
            </MemberItem>
          ))}
        </MembersWrapper>
      </TeamIntroductionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const IndexButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

const IndexButton = styled.button<{ index: number }>`
  padding: 0.8rem 2.4rem;

  /* green2 */

  background: ${({ index, theme }) =>
    [theme.colors.green2, theme.colors.yellow2, theme.colors.blue2, theme.colors.red2][index]};

  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray9};
  border-radius: 1.6rem 1.6rem 0px 0px;

  flex: none;
  order: 0;
  flex-grow: 0;

  &:hover {
    background: ${({ index, theme }) =>
      [theme.colors.green3, theme.colors.yellow3, theme.colors.blue3, theme.colors.red3][index]};
  }

  &:active {
    background: ${({ index, theme }) =>
      [theme.colors.green1, theme.colors.yellow1, theme.colors.blue1, theme.colors.red1][index]};
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

  padding: 2.4rem 2.4rem;
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
  align-items: center;
  gap: 0.8rem;
`;

const ImageWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.gray9};
  flex: none;
  flex-grow: 0;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default MemberIntroductionCard;
