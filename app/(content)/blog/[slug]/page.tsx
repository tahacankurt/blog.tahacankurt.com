import { groq } from 'next-sanity';
import React from 'react';
import client from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';
import BlockContent from './components/BlockContent';

export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const getGalleryItemsQuery = groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
    title,
    body[]{
    ..., 
    asset->{
        ...,
        "_key": _id
      }
    }
  } | order(_createdAt desc)`;

  const postDetail: Post = await client.fetch(getGalleryItemsQuery, { slug: params.slug });
  return (
    <div className="flex justify-center mt-3">
      <div className="w-full lg:w-9/12 ">
        <h1 className="text-4xl my-6">
          {postDetail.title}
        </h1>
        <BlockContent
          // Pass in block content straight from Sanity.io
          postDetail={postDetail}
        />
      </div>

    </div>
  );
}
