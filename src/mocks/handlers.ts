import { rest } from 'msw';
import { sampleNewsletter } from './data/newsletters';
export const handlers = [
  rest.get('http://localhost:3000/api/articles', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword') || '';
    const nowPage = parseInt(req.url.searchParams.get('page') || '1', 10);
    const size = parseInt(req.url.searchParams.get('size') || '8', 10);

    console.log(keyword, nowPage, size);
    return res(
      ctx.status(200),
      ctx.json({
        keyword,
        nowPage,
        size,
        totalEntries: sampleNewsletter.length,
        totalPages: Math.ceil(sampleNewsletter.length / size),
        results: sampleNewsletter.slice((nowPage - 1) * size, nowPage * size),
      }),
    );
  }),
];
