import React, { useState } from 'react';
import Image from 'next/image';
import { IGalleryItem } from '../../../typings';
import styles from '../../page.module.css';
import { CONTENT_SERVICE_URL } from '../../../env';
import Badge from '../../components/Badge/Badge';

type Props = {
  galleryItem: IGalleryItem;
};

const resizeW = 800;

export default function GalleryItem({ galleryItem }: Props) {
  const resizedImagePath = `${CONTENT_SERVICE_URL}/resized/w-${resizeW}/${galleryItem.image_path}`;
  const imagePath = `${CONTENT_SERVICE_URL}/${galleryItem.image_path}`;
  const [showBadge, setShowBadge] = useState(false);

  return (
    <div className="mt-1 lg:p-0 md:p-4 p-1" key={galleryItem.id}>
      {galleryItem?.resource_type === 'video' ? (
        <div className="transition-all duration-700  hover:saturate-100 cursor-pointer lg:grayscale lg:hover:grayscale-0">
          {/* <a href={galleryItem?.url} target="_blank" rel="noreferrer"> */}
          {/*  <HoverVideoPlayer */}
          {/*    videoClassName={`rounded-lg ${styles.neuBrutalFrame}`} */}
          {/*    loop={false} */}
          {/*    videoSrc={media?.url} */}
          {/*    loadingOverlay={( */}
          {/*      <div className="loading-overlay"> */}
          {/*        <div className="loading-spinner" /> */}
          {/*      </div> */}
          {/*  )} */}
          {/*  /> */}
          {/* </a> */}
        </div>
      ) : (
        <a
          href={imagePath}
          target="_blank"
          rel="noreferrer"
          className="relative"
          onMouseOver={() => { setShowBadge(true); }}
          onMouseLeave={() => { setShowBadge(false); }}
          onFocus={() => { setShowBadge(true); }}
        >
          {showBadge
              && (
              <div className="absolute top-1 z-40 -right-4">
                <Badge>
                  {galleryItem.city.name}
                  {' '}
                  <span className="ml-2">
                    {' '}
                    {galleryItem.city.country.emoji}
                  </span>
                </Badge>
              </div>
              )}
          <Image
            src={resizedImagePath}
            width={resizeW}
            loading="lazy"
            height={500}
            className={`${styles.neuBrutalFrame}`}
            alt={galleryItem.description}
          />
        </a>
      )}
    </div>
  );
}
