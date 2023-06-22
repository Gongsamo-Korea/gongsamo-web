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
        <InputWrapper>
        <InputText
          type="search"
          placeholder="키워드로 보고 싶은 콘텐츠를 검색하세요."
          required
          value={query}
          onInput={handleInput}
          onKeyUp={handleSubmit}
        />
        <Icon>
          <SearchIcon />
        </Icon>
        </InputWrapper>
      </Wrapper>
      {searchQuery && <p>{searchQuery}</p>}
    </>
  );
};

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 16px;
`

const InputWrapper = styled('div')`
  display: inline-block;
  position: relative;
  width: 100%;
  /* height: 56px */

`

const Icon = styled('i')`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  
  display: inline-block;
  margin-top: -1rem;
`

const InputText = styled('input')`
  margin: 0;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;

  box-sizing: border-box;
  background-color: #fff;
  
  border: 0.0625rem solid #212529;
  border-radius: 0.4rem;

  transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  height: 60px;
  width:100%;
`


export default SearchNewsletter;
