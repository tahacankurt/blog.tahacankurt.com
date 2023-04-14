'use client';

import Masonry from 'react-masonry-css';
import React from 'react';
import GalleryItem from './GalleryItem';

type Props = {
  galleryItems: Visual[];
};

export default function MasonaryGallery({ galleryItems }: Props) {
  return (
    <div>
      <Masonry
        breakpointCols={{
          default: 3,
          500: 2,
        }}
        className="masonry-grid"
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
      </Masonry>
    </div>
  );
}
