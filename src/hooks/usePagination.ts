import { dotts } from '@/components/Newsletter/NewsletterPagination';

const getPages = (length: number, inc: number = 1) => Array.from({ length }, (_, i) => i + inc);

export default function usePagination(totalPages: number, page: number) {
  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return getPages(totalPages);
  }
  // -> 1 2 3 4 ... 10
  if (page <= 5) {
    return [1, 2, 3, 4, 5, 6, 7, dotts, totalPages];
  }
  // -> 1 ... 4 5 6 ... 10
  if (page < totalPages - 4) {
    return [
      1,
      dotts,
      page - 4,
      page - 3,
      page - 2,
      page - 1,
      page,
      Number(page) + 1,
      Number(page) + 2,
      Number(page) + 3,
      Number(page) + 4,
      dotts,
      totalPages,
    ];
  }
  // -> 1 ... 7 8 9 10
  return [1, dotts, ...getPages(7, totalPages - 6)];
}
