import { useState } from 'react';
import theme from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { ContentCardProps } from '@/types/props';
import Typography15 from '@/components/ui/textStyles/Typography15';
import Typography13 from '@/components/ui/textStyles/Typography13';
import Typography11 from '@/components/ui/textStyles/Typography11';

const ContentCard = ({
  backgroundColor,
  color,
  tags,
  title,
  subtitle,
  date,
  author,
  contents,
  thumbnail,
}: ContentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper
      backgroundColor={backgroundColor ?? theme.colors.blue1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <TitleWrapper>
        {subtitle && (
          <Typography13 text={`${subtitle}호`} color={color ?? theme.colors.gray9} weight={400} />
        )}
        <Typography15 text={title} color={color ?? theme.colors.gray9} weight={700} />
        {date && <Typography11 text={date} color={color ?? theme.colors.gray9} weight={400} />}
        {author && <Typography11 text={author} color={color ?? theme.colors.gray9} weight={400} />}
      </TitleWrapper>

      {isHovered && contents ? (
        <InfoWrapper>
          {contents.map((content: any) => (
            <ContentWrapper>
              <Typography13 text={content} color={color ?? theme.colors.gray9} weight={400} />
            </ContentWrapper>
          ))}
        </InfoWrapper>
      ) : (
        <ThumbnailWrapper>
          <Image
            src={thumbnail ?? ''}
            alt={'thumbnail'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
          <TagWrapper>
            {tags &&
              tags.map((tag: any, index: any) => (
                <Tag key={tag.id} index={index}>
                  <Typography11 text={tag.name} color={theme.colors.gray9} weight={400} />
                </Tag>
              ))}
          </TagWrapper>
        </ThumbnailWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled('div')<{ backgroundColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  padding: 0px;
  width: 37rem;
  height: 24rem;

  flex: none;
  flex-grow: 0;

  background: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${({ theme }) => theme.colors.gray8};

  transition: all 0.2s ease-in-out;

  img {
    filter: gray;
    -webkit-filter: grayscale(1);
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    img {
      filter: none;
      -webkit-filter: grayscale(0);
      transition: all 0.5s ease-in-out;
    }
    transform: scale(1.01);
  }
`;

const TitleWrapper = styled.div`
  flex: 1;
  padding: 1.6rem;
`;

const InfoWrapper = styled.ul`
  gap: 0.4rem;
  height: 100%;
  padding: 0 1.6rem;
  margin-bottom: 1.6rem;
  overflow-y: hidden;
  text-overflow: ellipsis;
  white-space: normal;
`;

const ContentWrapper = styled.li`
  margin-bottom: 1.6rem;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  position: relative;
`;

const TagWrapper = styled.div`
  position: absolute;
  bottom: 1.4rem;
  right: 1.6rem;
  display: flex;
  gap: 0.8rem;
`;

const Tag = styled.div<{ index: number }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 1.2rem;

  background: ${({ index, theme }) =>
    [theme.colors.yellow1, theme.colors.blue1, theme.colors.green1][index]};

  border: 1px solid ${({ theme }) => theme.colors.gray9};
  border-radius: 16px;

  flex: none;
  flex-grow: 0;
`;

export default ContentCard;
