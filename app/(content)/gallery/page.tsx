import React from 'react';
import { groq } from 'next-sanity';
import { Metadata } from 'next';
import client from '../../../lib/sanity.client';
import MasonaryGallery from './components/MasonryGallery';

export const metadata: Metadata = {
  title: 'Gallery | Taha Cankurt',
  description: 'Software Engineer | Aka: Digital Nomad | Gallery Page',
};
const getGalleryItemsQuery = groq`
 *[_type == "visual"]{
  ...,
} | order(order asc)`;

export default async function Gallery() {
  const galleryItems = await client.fetch(getGalleryItemsQuery);
  return (<MasonaryGallery galleryItems={galleryItems} />);
}
