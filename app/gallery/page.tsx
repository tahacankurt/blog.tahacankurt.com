import React from 'react';
import { Metadata } from 'next';

import MasonaryGallery from './components/MasonryGallery';
import { CONTENT_SERVICE_URL } from '../../env';
import { IGalleryItemResponse } from '../../typings';
import { defaultContentFetchOptions } from '../constants';

export const metadata: Metadata = {
  title: 'Gallery | Taha Cankurt',
  description: 'Software Engineer | Aka: Digital Nomad',
  openGraph: {
    images: ['og.jpg'],
    title: 'Gallery | Taha Cankurt',
    description: 'Software Engineer | Aka: Digital Nomad',
  },
};

async function getVisuals() : Promise<IGalleryItemResponse[]> {
  const res = await fetch(`${CONTENT_SERVICE_URL}/api/visual`, defaultContentFetchOptions);
  const jsonRes = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return jsonRes;
}

export default async function Gallery() {
  const { data: galleryItems }: any = await getVisuals();
  return (<MasonaryGallery galleryItems={galleryItems} />);
}
