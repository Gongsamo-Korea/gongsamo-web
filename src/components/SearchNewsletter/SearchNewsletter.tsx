import { FormEvent, KeyboardEvent, useState } from 'react';
import { fetchNewsletters } from '@/apis/newsletter';
import { useNewslettersStore } from '@/stores/newsletters';

const SearchNewsletter = () => {
  const [query, setQuery] = useState('');
  const { query: searchQuery, setPageableNewsletters } = useNewslettersStore();

  const handleInput = (event: FormEvent) => {
    setQuery((event.target as HTMLInputElement).value);
  };

  const handleSubmit = async (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;

    if (!query.trim()) {
      window.alert('검색어를 입력해주세요.');
      return;
    }

    const newsletters = await fetchNewsletters({ query });
    setPageableNewsletters(query, newsletters);
    setQuery('');
  };

  return (
    <>
      <input
        type="search"
        placeholder="보고 싶은 콘텐츠를 검색하세요."
        required
        value={query}
        onInput={handleInput}
        onKeyUp={handleSubmit}
      />
      {searchQuery && <p>{searchQuery}</p>}
    </>
  );
};

export default SearchNewsletter;
