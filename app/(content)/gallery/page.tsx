import React from 'react';
import { groq } from 'next-sanity';
import Masonry from 'react-masonry-css';
import client from '../../../lib/sanity.client';
import MasonaryGallery from './components/MasonryGallery';

const getGalleryItemsQuery = groq`
 *[_type == "visual"]{
  ...
} | order(_createdAt desc)`;

export default async function Gallery() {
  const galleryItems = await client.fetch(getGalleryItemsQuery);
  return (
    <MasonaryGallery galleryItems={galleryItems} />
  );
}
