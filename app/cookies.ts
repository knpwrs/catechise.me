import { createCookie } from 'remix';

const SELECTION_COOKIE_VERSION = 1;

export const catechism = createCookie(
  `cme:catechism:${SELECTION_COOKIE_VERSION}`,
);
export const translation = createCookie(
  `cme:translation:${SELECTION_COOKIE_VERSION}`,
);
