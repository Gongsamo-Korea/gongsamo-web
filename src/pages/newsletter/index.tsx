import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useNewslettersStore } from '@/stores/newsletters';

import SearchNewsletter from '@/components/Newsletter/SearchNewsletter';
import Categories from '@/components/Category/Categories';
import NewsletterHeader from '@/components/Newsletter/NewsletterHeader';
import NewsletterContents from '@/components/Newsletter/NewsletterContents';

const Newsletter = ({ articles, page, totalPages }: any) => {
  useEffect(() => {
    useNewslettersStore.getState().setNewsletters(articles, page, totalPages);
  }, [articles]);

  return (
    <>
      <InfoSection>
        <NewsletterHeader />
        <SearchNewsletter />
        <Categories />
      </InfoSection>
      <ContentsSection>
        <Wrapper>
          {articles.map((article: any) => (
            <Link href={`/newsletter/${article.id}`}>
              {<NewsletterContents article={article} />}
            </Link>
          ))}
        </Wrapper>
      </ContentsSection>
    </>
  );
};

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px 15px;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`;

const InfoSection = styled('section')`
  max-width: 700px;
  margin: 0 auto;
`;

const ContentsSection = styled('section')`
  max-width: 1200px;
  margin: 0 auto;
`;

export async function getServerSideProps(context: any) {
  const { keyword = '', page = 1, size = 9 } = context.query;

  const res = await fetch(
    `http://localhost:3000/api/articles?keyword=${keyword}&page=${page}&size=${size}`,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );
  const { results, totalPages } = await res.json();
  useNewslettersStore.getState().setNewsletters(results, page, totalPages);
  return {
    props: {
      articles: useNewslettersStore.getState().newsletters,
      totalPages: useNewslettersStore.getState().totalPages,
      page: useNewslettersStore.getState().page,
    },
  };
}

export default Newsletter;
