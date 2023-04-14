import Image from 'next/image';
import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

type Props = {
  galleryItem: Visual;
};

export default function GalleryItem({ galleryItem }: Props) {
  const { title, media } = galleryItem;
  return (
    <div className="lg:p-4 mt-1 sm:p-0">
      {media.resource_type === 'video' ? (
        <div className="transition-all duration-700 hover:scale-105 hover:saturate-100 duration-700 cursor-pointer lg:hover:scale-105 lg:grayscale lg:hover:grayscale-0">
          <a href={media.url} target="_blank" rel="noreferrer">
            <HoverVideoPlayer
              videoClassName="rounded-lg"
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
          <Image
            alt={title}
            className="transition-all duration-700 hover:scale-105 hover:saturate-100 shadow-2xl rounded-lg cursor-pointer lg:hover:scale-105 lg:grayscale lg:hover:grayscale-0 "
            src={galleryItem.media.url}
            width={1227}
            height={1636}
            referrerPolicy="no-referrer"
          />
        </a>
      )}
    </div>
  );
}
