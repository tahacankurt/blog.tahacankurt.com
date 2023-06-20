import { groq } from 'next-sanity';
import React from 'react';
import { Metadata } from 'next';
import client from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';
import BlockContent from './components/BlockContent';

type Props = {
  params: { slug: string }
}

const getPostItemQuery = groq`*[_type == "post" && slug.current == $slug][0]{
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

export default async function Page({
  params,
}: Props) {
  const postDetail: Post = await client.fetch(getPostItemQuery, { slug: params.slug });
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

// Generate dynamic meta data;
export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { slug } = params;
  const postDetail: Post = await client.fetch(getPostItemQuery, { slug });

  return {
    title: postDetail.title,
    description: postDetail?.description,
  };
}
