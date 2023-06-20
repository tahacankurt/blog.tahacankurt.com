import React from 'react';
import { groq } from 'next-sanity';
import Head from 'next/head';
import { Metadata } from 'next';
import BlogItem from './components/BlogListItem';
import client from '../../../lib/sanity.client';
import { Post } from '../../../typings';

export const metadata: Metadata = {
  title: 'Blog | Taha Cankurt',
  description: 'Software Engineer | Aka: Digital Nomad | Blog Page',
};

const getBlogPosts = groq`
 *[_type == "post"]{
  ...
} | order(_createdAt desc)`;

export default async function Blog() {
  const blogItems = await client.fetch(getBlogPosts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Head>
        <title>Taha Cankurt</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Software Engineer | Personal Website" />
      </Head>
      {blogItems.map((blogItem: Post) => (
        <BlogItem blogItem={blogItem} />
      ))}

    </div>
  );
}
