'use client';
import { useNewslettersStore } from '@/stores/newsletters';
// import { newsletters } from '../../mocks/data/newsletters';
import { useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Image from 'next/image';
import theme from '@/styles/theme';
import Typography20 from '@/components/ui/textStyles/Typography20';
import Typography13 from '../ui/textStyles/Typography13';
import Typography11 from '../ui/textStyles/Typography11';

const NewsletterContents = ({ article }: any) => {
  return (
    <Wrapper>
      <ArticleInfoWrapper>
        <Typography13
          text={`${article.issue_number}호`}
          color={theme.colors.gray9}
          textAlign="left"
          marginTop="0.3rem"
        />
        <Typography20
          text={article.title}
          color={theme.colors.gray9}
          textAlign="left"
          marginTop="0.5rem"
        />
        <Typography11
          text={new Date(article.issue_date).toLocaleDateString('ko-KR')}
          color={theme.colors.gray9}
          textAlign="left"
          marginTop="0.3rem"
        />
      </ArticleInfoWrapper>
      <ArticleImageWrapper>
        <Image
          src="/images/article-logo.png"
          alt={'article logo image'}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
        <ArticleTagsWrapper>
          {article.tags.map((tag: any) => (
            <TagItem key={tag.id}>{tag.name}</TagItem>
          ))}
        </ArticleTagsWrapper>
      </ArticleImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  border: 1px solid black;
`;

const ArticleInfoWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  background: #fdf8da;
  padding-left: 5px;
`;

const ArticleTagsWrapper = styled('div')`
  display: flex;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const TagItem = styled('div')`
  margin: 0.2rem;
  background: #fbe7de;
  border: 1px solid #212529;
  border-radius: 16px;
  padding: 0.3rem;
  min-width: 50px;
  height: 21px;
  text-align: center;
  font-size: 10px;
`;

const ArticleImageWrapper = styled('div')`
  position: relative;
  height: 120px;
`;

export default NewsletterContents;
