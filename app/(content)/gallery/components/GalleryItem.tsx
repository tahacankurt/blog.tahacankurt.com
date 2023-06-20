import { CldImage } from 'next-cloudinary';
import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { IGalleryItem } from '../../../../typings';
import styles from '../../page.module.css';

type Props = {
  galleryItem: IGalleryItem;
};

export default function GalleryItem({ galleryItem }: Props) {
  const { media } = galleryItem;
  return (
    <div className="mt-1 lg:p-0 md:p-4 p-1">
      {media.resource_type === 'video' ? (
        <div className="transition-all duration-700  hover:saturate-100 cursor-pointer  lg:grayscale lg:hover:grayscale-0">
          <a href={media.url} target="_blank" rel="noreferrer">
            <HoverVideoPlayer
              videoClassName={`rounded-lg ${styles.neuBrutalFrame}`}
              loop={false}
              videoSrc={media.url}
              loadingOverlay={(
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
            )}
            />
          </a>

        </div>
      ) : (
        <a href={media.url} target="_blank" rel="noreferrer">
          <CldImage
            alt="ts"
            className={`${styles.neuBrutalFrame}`}
            width="500"
            height="600"
            src={galleryItem.media.public_id}
          />
        </a>
      )}
    </div>
  );
}
