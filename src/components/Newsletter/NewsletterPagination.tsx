import Link from 'next/link';
import usePagination from '@/hooks/usePagination';
import styled from '@emotion/styled';
import ChevronLeft from '@/components/ui/icons/ChevronLeft';
import ChevronRight from '@/components/ui/icons/ChevronRight';

export const dotts = '...';

const NewsletterPagination = ({ category, totalPages, page, keyword }: any) => {
  const pages = usePagination(totalPages, page);

  return (
    <Wrapper>
      {Number(page) !== 1 && (
        <Link href={`newsletter?keyword=${keyword}&page=${Number(page) - 1}`}>
          <ChevronLeft />
        </Link>
      )}
      <div className="flex items-center justify-center my-8">
        {pages.map((pageNumber, i) =>
          pageNumber === dotts ? (
            <span key={`page-${i}`}>{pageNumber}</span>
          ) : (
            <Link
              key={`page-${i}`}
              href={`newsletter?category=${category}&keyword=${keyword}&page=${pageNumber}`}
            >
              <LinkText selected={Number(pageNumber) === Number(page)}>
                {Number(pageNumber)}
              </LinkText>
            </Link>
          ),
        )}
      </div>
      {Number(page) < totalPages && (
        <Link href={`newsletter?page=${Number(page) + 1}`}>
          <ChevronRight />
        </Link>
      )}
    </Wrapper>
  );
};

type LinkTextProps = {
  selected: boolean;
};

const LinkText = styled.span<LinkTextProps>`
  border: ${(props: any) => (props.selected ? '1px solid black' : '1px solid white')};
  border-radius: 50%;
  margin: 10px;
  padding: 5px 10px;
  background-color: ${(props: any) => (props.selected ? 'black' : 'white')};
  color: ${(props: any) => (props.selected ? 'white' : 'black')};
`;

const Wrapper = styled('nav')`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

export default NewsletterPagination;
