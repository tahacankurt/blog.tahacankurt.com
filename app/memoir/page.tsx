import React from 'react';

import Head from 'next/head';
import { Metadata } from 'next';
import BlogItem from './components/BlogListItem';
import CountryCategoryContainer from './components/CountryCategoryContainer';
import {
  ICountryPost, ICountryPostResponse, IPost, IPostResponse,
} from '../../typings';
import { CONTENT_SERVICE_URL } from '../../env';
import { defaultContentFetchOptions } from '../constants';

export const metadata: Metadata = {
  title: 'Memoir | Taha Cankurt',
  description: 'Software Engineer | Aka: Digital Nomad | Memoir',
  openGraph: {
    images: ['og.jpg'],
    title: 'Memoir | Taha Cankurt',
    description: 'Software Engineer | Aka: Digital Nomad | Memoir',
  },
};

async function getPosts() : Promise<{
  travelBlogPostCategories: ICountryPostResponse, technicalBlogPosts: IPostResponse
}> {
  const [travelBlogPostsRes, technicalBlogPostsRes] = await Promise.all([
    fetch(`${CONTENT_SERVICE_URL}/api/post/travel-blog?${new URLSearchParams({ is_grouped: 'true' })}`, defaultContentFetchOptions),
    fetch(`${CONTENT_SERVICE_URL}/api/post/technic-blog`, defaultContentFetchOptions),
  ]);

  if (!travelBlogPostsRes.ok || !technicalBlogPostsRes.ok) {
    throw new Error('Failed to fetch data');
  }

  return {
    travelBlogPostCategories: await travelBlogPostsRes.json(),
    technicalBlogPosts: await technicalBlogPostsRes.json(),
  };
}

export default async function Blog() {
  const {
    travelBlogPostCategories: {
      data: travelBlogPostCategories,
    }, technicalBlogPosts: {
      data: technicalBlogPosts,
    },
  } = await getPosts();

  return (
    <>
      <Head>
        <title>Taha Cankurt</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Software Engineer | Personal Website" />
      </Head>
      <div className="grid grid-cols-12 xl:gap-12 ">
        <div className="col-span-12 xl:col-span-8 order-2 xl:order-1">
          <div className="grid grid-cols-12">
            {travelBlogPostCategories.map((countryCategory : ICountryPost) => (
              <CountryCategoryContainer
                key={countryCategory.id}
                countryDetail={countryCategory}
              />
            ))}
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 order-1 xl:order-2 mt-8">
          <h2 className="text-3xl">
            {'< Hello Nerd >'}
          </h2>
          {technicalBlogPosts?.map((blogItem: IPost) => (
            <div className="mt-4">
              <BlogItem blogItem={blogItem} categorySlug="dev" />
            </div>
          ))}
        </div>
      </div>
    </>

  );
}
