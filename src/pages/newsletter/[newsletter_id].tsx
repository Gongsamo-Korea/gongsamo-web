import { useNewsletterStore } from '@/stores/newsletter';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import parse from 'html-react-parser';

const NewsletterDetail = ({ newsletter }: any) => {
  useEffect(() => {
    useNewsletterStore.getState().setNewsletter(newsletter);
  }, [newsletter]);

  return <Wrapper>{parse(newsletter.content)}</Wrapper>;
};

const Wrapper = styled.div``;

export default NewsletterDetail;

export const getServerSideProps = async (context: any) => {
  const { newsletter_id } = context.query;

  const res = await fetch(`http://api.gongsamo.kr/articles/${newsletter_id}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const result = await res.json();
  useNewsletterStore.getState().setNewsletter(result);

  return {
    props: {
      newsletter: result,
    },
  };
};
