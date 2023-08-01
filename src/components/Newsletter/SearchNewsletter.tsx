import { FormEvent, useEffect, useState } from 'react';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import CloseIcon from '../ui/icons/CloseIcon';
import theme from '@/styles/theme';
import { useNewslettersStore } from '@/stores/newsletters';

const SearchNewsletter = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const { keyword, setKeyword } = useNewslettersStore();

  useEffect(() => {
    setQuery(keyword);
  }, [keyword]);

  const handleClickCloseButton = () => {
    setKeyword('');
    router.replace({
      pathname: '/newsletter',
      query: {
        keyword: '',
        page: 1,
      },
    });
  };

  const handleInput = (event: FormEvent) => {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue === '') {
      setKeyword('');
    }

    setQuery((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.replace({
      pathname: '/newsletter',
      query: {
        keyword: query,
        page: 1,
      },
    });
  };

  return (
    <>
      <Wrapper>
        <FormContainer onSubmit={handleSubmit}>
          <InputText
            type="text"
            placeholder="키워드로 보고 싶은 콘텐츠를 검색해요."
            required
            value={query}
            onInput={handleInput}
          />

          <Icon onClick={(e) => (keyword !== '' ? handleClickCloseButton() : handleSubmit(e))}>
            {keyword ? (
              <CloseIcon color={theme.colors.gray8} />
            ) : (
              <SearchIcon width={20} height={20} color={theme.colors.gray8} />
            )}
          </Icon>
        </FormContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 16px;
`;

const FormContainer = styled('form')`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const Icon = styled('div')`
  position: absolute;
  top: 50%;
  right: 1.5rem;

  display: inline-block;
  margin-top: -1rem;
  cursor: pointer;
`;

const InputText = styled('input')`
  margin: 0;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;

  box-sizing: border-box;
  background-color: #fff;

  border: 0.0625rem solid #212529;
  border-radius: 0.4rem;

  transition:
    background-color 0.2s,
    border-color 0.2s,
    box-shadow 0.2s;
  height: 60px;
  width: 100%;
`;

export default SearchNewsletter;
