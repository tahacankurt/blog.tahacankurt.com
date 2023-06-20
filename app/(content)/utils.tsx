'use client';

import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import client from '../../lib/sanity.client';

// eslint-disable-next-line import/prefer-default-export
export function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}
