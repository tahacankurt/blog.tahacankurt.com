import React from 'react';
import { groq } from 'next-sanity';
import BlogItem from './components/BlogListItem';
import client from '../../../lib/sanity.client';
import { Post } from '../../../typings';

const getBlogPosts = groq`
 *[_type == "post"]{
  ...
} | order(_createdAt desc)`;

export default async function Blog() {
  const blogItems = await client.fetch(getBlogPosts);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {blogItems.map((blogItem: Post) => (
        <BlogItem blogItem={blogItem} />
      ))}

    </div>
  );
}
