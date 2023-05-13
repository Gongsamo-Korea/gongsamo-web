import { rest } from 'msw';
import { newsletters } from '../data/newsletters';
import { PageableRequest } from '@/models/pageable';

const newsletterHandler = [
  rest.get('/api/newsletters', (req, res, ctx) => {
    const { query, page = 1, perPage = 8 } = req.params as unknown as PageableRequest;
    return res(
      ctx.status(200),
      ctx.json({
        query,
        page,
        perPage,
        totalEntries: newsletters.length,
        totalPages: Math.ceil(newsletters.length / perPage),
        results: newsletters.slice((page - 1) * perPage, page * perPage),
      }),
    );
  }),
];

export default newsletterHandler;
