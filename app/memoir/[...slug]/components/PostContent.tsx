'use client';

import React from 'react';
import './postDetail.css';
import Image from 'next/image';
import styles from '../../../page.module.css';
import { ITag } from '../../../../typings';
import Tag from '../../../components/Tag';
import BlockContent from './BlockContent';
import { CONTENT_SERVICE_URL } from '../../../../env';
import PlaceList from '../../../components/GooglePlace/PlaceList';

function PostContent({ postDetail }: any) {
  const imagePath = `${CONTENT_SERVICE_URL}/${postDetail.main_image_path}`;
  return (
    <div className="w-full justify-center flex">
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style global jsx>
        {`
          .social-media-container {
            display:none;
          }
        `}
      </style>
      <div className="w-full lg:w-9/12">
        {postDetail.main_image_path
            && (
            <div className="md:min-h-[300px]">
              <Image
                src={imagePath}
                width="1920"
                loader={({ src }) => `${src}`}
                height="900"
                sizes="100vw"
                quality={100}
                loading="lazy"
                className={`${styles.neuBrutalFrame} w-full h-auto`}
                alt={postDetail.title}
              />
            </div>
            )}

        <div className="flex sm:flex-row flex-col justify-between mt-8">
          <div>
            <h1 className="text-4xl">{postDetail.title}</h1>
          </div>

          <div className="md:align-middle md:self-center self-end mt-4 md:mt-0">
            {postDetail.tags.map((tag:ITag, index: number) => (
              <Tag key={tag.id} title={tag.name} index={index} />
            ))}
          </div>

        </div>

        <div className="flex justify-center mt-3">
          <BlockContent
            postDetail={postDetail}
          />
        </div>

        {postDetail.places?.length > 0
          && (
          <div id="places">
            <hr className="my-6" />
            <PlaceList places={postDetail.places} listTitle="Give It a Shot" />
          </div>
          )}

      </div>
    </div>
  );
}

export default PostContent;
