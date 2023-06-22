import { rest } from 'msw';
import { sampleNewsletter } from './data/newsletters';
import { PageableRequest } from '@/models/pageable';
export const handlers = [
  rest.get('http://localhost:3000/api/articles', (req, res, ctx) => {
    const keyword = req.url.searchParams.get('keyword') || '';
    const nowPage = parseInt(req.url.searchParams.get('page') || '1', 10);
    const size = parseInt(req.url.searchParams.get('size') || '8', 10);

    // const { keyword = '', page = 1, size = 8 } = req.params as unknown as PageableRequest;
    // console.log(sampleNewsletter);
    console.log(keyword, nowPage, size);
    return res(
      ctx.status(200),
      // ctx.json(sampleNewsletter),
      ctx.json({
        keyword,
        nowPage,
        size,
        // newsletters: sampleNewsletter,
        totalEntries: sampleNewsletter.length,
        totalPages: Math.ceil(sampleNewsletter.length / size),
        results: sampleNewsletter.slice((nowPage - 1) * size, nowPage * size),
      }),
    );
  }),
];

// rest.get(`http://localhost:3000/api/articles`, (req, res, ctx) => {
//   // const { keyword = '', page = 1, size = 8 } = req.params as unknown as PageableRequest;

//   return res(
//     ctx.status(200),
//     // ctx.json(sampleNewsletter),
//     ctx.json({
//       // keyword,
//       // page,
//       // size,
//       newsletters: sampleNewsletter,
//       totalEntries: sampleNewsletter.length,
//       // totalPages: Math.ceil(sampleNewsletter.length / size),
//       // results: sampleNewsletter.slice((page - 1) * size, page * size),
//     }),
//   );
// }),
// ];
