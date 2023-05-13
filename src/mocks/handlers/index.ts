import { RestHandler } from 'msw';
import newsletterHandler from './newsletter';

const handlers: RestHandler[] = [
  ...newsletterHandler,
];

export default handlers;