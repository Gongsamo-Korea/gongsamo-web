import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchNewsletter from './SearchNewsletter';
import * as newsletterAPI from '@/apis/newsletter';
import { server } from '@/mocks/server';

jest.mock('@/apis/newsletter', () => {
  const actualModule = jest.requireActual('@/apis/newsletter');
  return {
    __esModule: true,
    ...actualModule,
  };
});

const originalAlert = window.alert;
const mockedAlert = jest.fn();

beforeAll(() => {
  server.listen();
  Object.assign(window, {
    alert: mockedAlert,
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
  Object.assign(window, {
    alert: originalAlert,
  });
});

describe('SearchNewsletter', () => {
  it('콘텐츠를 검색할 수 있다.', async () => {
    const mockedFetchNewsletters = jest.spyOn(newsletterAPI, 'fetchNewsletters');

    render(<SearchNewsletter />);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('보고 싶은 콘텐츠를 검색하세요.');

    await user.type(input, '테스트');
    await user.keyboard('{Enter}');

    expect(mockedFetchNewsletters).toBeCalledWith({ query: '테스트' });
  });

  it('검색어를 입력하지 않으면 검색할 수 없다.', async () => {
    const mockedFetchNewsletters = jest.spyOn(newsletterAPI, 'fetchNewsletters');

    render(<SearchNewsletter />);

    const user = userEvent.setup();
    const input = screen.getByPlaceholderText('보고 싶은 콘텐츠를 검색하세요.');

    await user.type(input, ' ');
    await user.keyboard('{Enter}');

    expect(mockedFetchNewsletters).not.toBeCalled();
    expect(mockedAlert).toBeCalledWith('검색어를 입력해주세요.');
  });
});
