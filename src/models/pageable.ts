export const PER_PAGE = 8;

type Pageable = {
  /**
   * 현재 페이지
   */
  page: number;
  /**
   * 한 페이지에 보여줄 데이터 수
   */
  perPage: number;
  /**
   * 총 데이터 수
   */
  totalEntries: number;
  /**
   * 총 페이지 수
   */
  totalPages: number;
};

export type PageableRequest = Partial<Pick<Pageable, 'page' | 'perPage'>> & {
  query: string;
};

export class PageableRequestImpl implements PageableRequest {
  page: number;
  perPage: number;
  query: string;

  constructor({ page = 1, perPage = PER_PAGE, query }: PageableRequest) {
    this.page = page;
    this.perPage = perPage;
    this.query = query;
  }
}

export type PageableResponse<T> = Pageable & {
  results: T[];
};

export class PageableResponseImpl<T> implements PageableResponse<T> {
  page: number;
  perPage: number;
  totalEntries: number;
  totalPages: number;
  results: T[];

  constructor({ page, perPage, totalEntries, totalPages, results }: PageableResponse<T>) {
    this.page = page;
    this.perPage = perPage;
    this.totalEntries = totalEntries;
    this.totalPages = totalPages;
    this.results = results;
  }

  // get hasNextPage() {
  //   return this.page < this.totalPages;
  // }
}
