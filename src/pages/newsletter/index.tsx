import Link from 'next/link';
import SearchNewsletter from '@/components/SearchNewsletter/SearchNewsletter';
import Categories from '@/components/Category/Categories';
import { fetchNewsletters } from '@/apis/newsletter';
import { useNewslettersStore } from '@/stores/newsletters';

const Newsletter = () => {
  const { newsletters, query, page, totalPages, setNextPage } = useNewslettersStore();
  const hasNextPage = page < totalPages;

  const handleFetchNext = async () => {
    const nextNewsletters = await fetchNewsletters({ query, page: page + 1 });
    setNextPage(nextNewsletters.results);
  };

  return (
    <>
      <main>
        <h2>지난 뉴스레터 모아보기</h2>
        <h3>
          김칩에 발행된 콘텐츠를 모아보세요!
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
        {hasNextPage && <button onClick={handleFetchNext}>더보기</button>}
      </section>
    </>
  );
};

export default Newsletter;
