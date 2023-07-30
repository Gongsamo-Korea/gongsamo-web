import Link from 'next/link';
import styled from '@emotion/styled';
import { useEffect } from 'react';

import { useNewslettersStore } from '@/stores/newsletters';

import SearchNewsletter from '@/components/Newsletter/SearchNewsletter';
import Categories from '@/components/Category/Categories';
import NewsletterPagination from '@/components/Newsletter/NewsletterPagination';
import ContentCard from '@/components/ui/cards/ContentCard';
import Typography24 from '@/components/ui/textStyles/Typography24';
import theme from '@/styles/theme';
import TitleBox from '@/components/ui/titleBoxes/TitleBox';
import { motion } from 'framer-motion';
import { contentVariants } from '@/styles/interactions';

const Newsletter = ({ articles, page, totalPages, keyword, categories }: any) => {
  useEffect(() => {
    useNewslettersStore.getState().setNewsletters(articles, page, totalPages, keyword);
  }, [articles]);

  return (
    <PageWrapper
      variants={contentVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <InfoSection>
        <TitleBox
          title="지난 뉴스레터를 모아봤어요"
          description="매주 화요일과 목요일! 김칩에 발행된 콘텐츠를 모아보세요."
        />
        <SearchSection>
          <SearchNewsletter />
          <Categories categories={categories} />
        </SearchSection>
      </InfoSection>

      <ContentsSection>
        {articles.length ? (
          <ContentCardWrapper>
            {articles.map((article: any) => (
              <Link key={article.id} href={`/newsletter/${article.id}`} target="_blank">
                {
                  <ContentCard
                    key={article.id}
                    title={article.title}
                    subtitle={article.issue_number}
                    date={new Date(article.issue_date).toLocaleDateString('ko-KR')}
                    thumbnail="/images/intro_04.png"
                    tags={article.tags}
                    contents={article.table_of_content}
                    backgroundColor={
                      [
                        theme.colors.blue1,
                        theme.colors.green1,
                        theme.colors.yellow1,
                        theme.colors.red1,
                      ][Math.floor(Math.random() * 4)]
                    }
                  />
                }
              </Link>
            ))}
          </ContentCardWrapper>
        ) : (
          <NoContentsWrapper>
            <Typography24 text="검색된 컨텐츠가 없어요 😅" color={theme.colors.gray9} />
          </NoContentsWrapper>
        )}

        <NewsletterPagination totalPages={totalPages} page={page} keyword={keyword} />
      </ContentsSection>
    </PageWrapper>
  );
};

const PageWrapper = styled(motion.div)`
  padding: 14rem 8rem 30rem 8rem;
  width: 100%;
`;

const InfoSection = styled.section`
  max-width: 70rem;
  margin: 0 auto;
`;

const SearchSection = styled.section`
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
`;

const ContentsSection = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const ContentCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px 15px;
  width: 100%;
  margin: 0 auto;
  margin-top: 10rem;
`;

const NoContentsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export async function getServerSideProps(context: any) {
  const { keyword = '', page = 1 } = context.query;

  const res = await fetch(`https://api.gongsamo.kr/articles?keyword=${keyword}&page=${page}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const results = await res.json();

  useNewslettersStore
    .getState()
    .setNewsletters(results.results, page, Number(results.total_pages) - 1, keyword);

  const getCategories = await fetch('https://api.gongsamo.kr/categories');
  const categories = await getCategories.json();

  return {
    props: {
      articles: useNewslettersStore.getState().newsletters,
      totalPages: useNewslettersStore.getState().totalPages,
      page: useNewslettersStore.getState().page,
      keyword,
      categories,
    },
  };
}

export default Newsletter;
