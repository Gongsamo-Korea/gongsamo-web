import { rest } from 'msw';
import { sampleNewsletter } from './data/newsletters';
import { sampleBanner } from './data/banners';

export const handlers = [
  rest.get('http://localhost:3000/api/articles', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword') || '';
    const nowPage = parseInt(req.url.searchParams.get('page') || '1', 10);
    const size = parseInt(req.url.searchParams.get('size') || '8', 10);

    const filteredItem = (keyword: any, nowPage: any, size: any) => {
      const result = sampleNewsletter;
      if (keyword !== '') {
        return result.filter(
          (newsletter) => newsletter.content.toLowerCase().indexOf(keyword.toLowerCase()) > -1,
        );
      }
      return result;
    };

    return res(
      ctx.status(200),
      ctx.json({
        keyword,
        nowPage,
        size,
        totalEntries: filteredItem(keyword, nowPage, size).length,
        totalPages: Math.ceil(filteredItem(keyword, nowPage, size).length / size),
        results: filteredItem(keyword, nowPage, size).slice((nowPage - 1) * size, nowPage * size),
      }),
    );
  }),
  rest.get('http://api.gongsamo.kr/banners', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(sampleBanner));
  }),

  rest.get('http://localhost:3000/api/articles/:id', (req, res, ctx) => {
    const id = req.params.id;
    const newsletter = sampleNewsletter.find((newsletter: any) => newsletter.id === id);
    if (newsletter) {
      return res(ctx.status(200), ctx.json(newsletter));
    } else {
      return res(ctx.status(404));
    }
  }),
];
