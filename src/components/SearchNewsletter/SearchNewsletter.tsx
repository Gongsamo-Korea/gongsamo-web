import { FormEvent, KeyboardEvent, useState } from 'react';
import { fetchNewsletters } from '@/apis/newsletter';
import { useNewslettersStore } from '@/stores/newsletters';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import styled from '@emotion/styled';

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
      <Wrapper>
        <Icon>
          <SearchIcon />
        </Icon>
        <InputText
          type="search"
          placeholder="보고 싶은 콘텐츠를 검색하세요."
          required
          value={query}
          onInput={handleInput}
          onKeyUp={handleSubmit}
        />
      </Wrapper>
      {searchQuery && <p>{searchQuery}</p>}
    </>
  );
};

const Wrapper = styled('span')`
  display: inline-block;
  position: relative;
`

const Icon = styled('i')`
  position: abolute;
  top: 50%;
  left: 0.75rem;
  
  display: inline-block;
  margin-top: -0.5rem;
`

const InputText = styled('input')`
  margin: 0;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;

  box-sizing: border-box;
  background-color: #fff;
  
  border: 0.0625rem solid #212529;
  border-radius: 0.4rem;

  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
`


export default SearchNewsletter;
