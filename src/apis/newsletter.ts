import { Newsletter } from '@/models/newsletter';
import {
  PageableRequest,
  PageableRequestImpl,
  PageableResponse,
  PageableResponseImpl,
} from '@/models/pageable';
import { httpClient } from '@/services/http';

type FetchNewslettersRequestPayload = PageableRequest;
type FetchNewsletterResponsePayload = PageableResponse<Newsletter>;

export const fetchNewsletters = async (params: FetchNewslettersRequestPayload) => {
  const requestPayload = new PageableRequestImpl(params);
  const response = await httpClient.get<FetchNewsletterResponsePayload>('/api/newsletters', {
    params: requestPayload,
  });
  const responsePayload = new PageableResponseImpl(response.data);
  return responsePayload;
};
