import React, { useEffect, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { IPlace } from '../../../typings';
import ImageLoader from '../SkeletonLoader/ImageLoader';
import ElementLoader from '../SkeletonLoader/ElementLoader';
import BadgeList from '../Badge/List';

const getGooglePlaceDetail = async (placeId: string) => {
  const res = await fetch(`/api/place/${placeId}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

const getGooglePlacePhoto = async (photoRef: string) => {
  const res = await fetch(`/api/placePhoto/${photoRef}`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res;
};

function PlaceItem({ place } : { place:IPlace }) {
  const [googlePlace, setGooglePlace] = useState<IPlace | null>(place);
  const [isPlaceDetailLoading, setIsPlaceDetailLoading] = useState<boolean>(true);

  const [placePhoto, setGooglePlacePhoto] = useState<any>(null);
  const [isPlacePhotoLoading, setIsPlacePhotoLoading] = useState<boolean>(true);

  useEffect(() => {
    getGooglePlaceDetail(place.place_map_id).then(({ data }) => {
      setIsPlaceDetailLoading(false);

      getGooglePlacePhoto(data.placePhotoReference).then((r) => r.blob().then((blob) => {
        const url = URL.createObjectURL(blob);
        setGooglePlacePhoto(url);
        setIsPlacePhotoLoading(false);
      }));

      // Combine data from google place and content service api's place data
      setGooglePlace({ ...data, ...place });
    });
  }, [place]);

  return (
    <div>
      {googlePlace
        && (
        <div className="relative">
          <BadgeList badgeList={place.tags} />

          <div style={{ height: '200px' }} className="relative">
            {isPlacePhotoLoading ? <ImageLoader />
              : (
                placePhoto && (
                  <Image
                    alt="place photo"
                    className="w-full rounded-xl neubrutalItem"
                    fill
                    objectFit="cover"
                    placeholder={isPlacePhotoLoading ? 'blur' : 'empty'}
                    src={placePhoto}
                  />
                )
              )}
          </div>

          <div>
            {isPlaceDetailLoading ? <ElementLoader rowCount={4} containerClassName="mt-4" /> : (
              googlePlace
              && (
                <div>
                  <a href={googlePlace.url}>
                    <h2 className="mt-3 text-xl">{googlePlace.name}</h2>
                  </a>
                  <div className="grid grid-cols-2">
                    <div className="text-green-600">
                      <h3 className="mt-0.5">{googlePlace.businessStatus}</h3>
                    </div>
                    <div className="text-black ">
                      <a href={googlePlace.url} target="_blank" rel="noreferrer">
                        <MapPinIcon width={24} className="float-right" />
                      </a>
                    </div>
                    <div className="col-span-2 mt-3">
                      <p>
                        {googlePlace.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

        </div>
        )}
    </div>
  );
}

export default PlaceItem;
