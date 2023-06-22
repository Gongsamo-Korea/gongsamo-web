import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useNewslettersStore } from '@/stores/newsletters';

import SearchNewsletter from '@/components/Newsletter/SearchNewsletter';
import Categories from '@/components/Category/Categories';
import NewsletterHeader from '@/components/Newsletter/NewsletterHeader';

const Newsletter = ({ articles, page, totalPages }: any) => {
  const { newsletters, query, setNextPage } = useNewslettersStore();
  const hasNextPage = page < totalPages;

  // const handleFetchNext = async () => {
  //   const nextNewsletters = await fetchNewsletters({ query, page: page + 1 });
  //   setNextPage(nextNewsletters.results);
  // };

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
      <section>
        <ol>
          {newsletters.map((newsletter) => (
            <li key={newsletter.id}>
              <Link href={`/newsletter/${newsletter.id}`}>
                <h3>{newsletter.title}</h3>
                <p>{newsletter.shortContent}</p>
                <p>{newsletter.createdAt}</p>
              </Link>
            </li>
          ))}
        </ol>
        {/* {hasNextPage && <button onClick={handleFetchNext}>더보기</button>} */}
      </section>
    </>
  );
};

const InfoSection = styled('section')`
  max-width: 700px;
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
