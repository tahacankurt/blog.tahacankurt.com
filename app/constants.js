import { CONTENT_X_API_KEY } from '../env';

// eslint-disable-next-line import/prefer-default-export
export const defaultContentFetchOptions = {
  headers: {
    'Content-type': 'application/json',
    'X-Api-Key': `${CONTENT_X_API_KEY}`,
  },
};
