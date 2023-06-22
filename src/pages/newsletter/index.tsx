import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useNewslettersStore } from '@/stores/newsletters';

import SearchNewsletter from '@/components/SearchNewsletter/SearchNewsletter';
import Categories from '@/components/Category/Categories';

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
      <main>
        <h2>지난 뉴스레터 모아보기</h2>
        <h3>
          김치앤칩스에 발행된 콘텐츠를 모아보세요!
          <br />
          검색도 가능하쥬
        </h3>
      </main>
      <section>
        <SearchNewsletter />
        <Categories />
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
