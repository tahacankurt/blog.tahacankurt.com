'use client';

import Masonry from 'react-masonry-css';
import React from 'react';
import GalleryItem from './GalleryItem';
import { IGalleryItem } from '../../../../typings';

type Props = {
  galleryItems: IGalleryItem[];
};

export default function MasonaryGallery({ galleryItems }: Props) {
  return (
    <div>
      <Masonry
        breakpointCols={{
          default: 3,
          500: 2,
        }}
        className="masonry-grid lg:mt-5"
        columnClassName="masonry-grid_column"
      >
        {/* eslint-disable-next-line max-len, no-underscore-dangle */}
        {galleryItems.map((galleryItem) => <GalleryItem key={galleryItem._id} galleryItem={galleryItem} />)}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style jsx global>
          {`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            .masonry-grid {
              display: flex;
            }

            .masonry-grid_column {
              padding-left: 3px; /* gutter size */
              background-clip: padding-box;
            }

            .masonry-grid_column span {
              width: 100% !important;
            }

            .next-image {
              object-fit: cover;
            }
          `}
        </style>

        {/* Hide social media bar on massonary gallery */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style global jsx>
          {`
          .social-media-container {
            display:none;
          }
        `}
        </style>
      </Masonry>
    </div>
  );
}
