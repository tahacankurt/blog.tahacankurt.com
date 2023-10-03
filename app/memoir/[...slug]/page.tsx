import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CONTENT_SERVICE_URL,
  SITE_URL,
} from '../../../env';
import { IPost } from '../../../typings';
import PostContent from './components/PostContent';
import { defaultContentFetchOptions } from '../../constants';

type Props = {
  params: { slug: [] }
}

async function getPost(slug: []) {
  // Fully dynamic category slug ['category','post']: /:category/:post  || ['category'] /:category
  const res = await fetch(`${CONTENT_SERVICE_URL}/api/post/detail/${slug.slice(-1)}`, defaultContentFetchOptions);
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page({ params }: Props) {
  const { data: postDetail } : { data:IPost } = await getPost(params.slug);
  return (
    postDetail.id && <PostContent postDetail={postDetail} />
  );
}

// Generate dynamic meta data;
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { data: postDetail } : any = await getPost(params.slug);
  const imagePath = `${CONTENT_SERVICE_URL}/${postDetail.main_image_path}`;
  return {
    title: postDetail.title,
    description: postDetail?.caption,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      images: [imagePath],
      title: postDetail.title,
      description: postDetail?.caption,
    },
  };
}
