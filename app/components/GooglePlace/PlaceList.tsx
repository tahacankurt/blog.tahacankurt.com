'use client';

import React, { useRef } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import PlaceItem from './PlaceItem';
import { scroll } from '../../utils';
import { IPlace } from '../../../typings';

function PlaceList({ listTitle = 'Featured Places', places } : { places: IPlace[], listTitle:string}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>

      <div className="grid grid-cols-12 items-center">
        <div className="col-span-10">
          <h1 className="text-3xl my-3">{listTitle}</h1>
        </div>
        <div className="col-span-2">
          <button className="align-middle mr-2" onClick={() => scroll({ elemRef: containerRef, direction: 'right' })} type="button">
            <ChevronLeftIcon width={24} className="float-right " />
          </button>
          <button
            type="button"
            className="float-right"
            onClick={() => {
              if (containerRef.current) {
                scroll({ elemRef: containerRef, direction: 'left' });
              }
            }}
          >
            <ChevronRightIcon width={24} className="float-right " />
          </button>
        </div>
      </div>

      <div className="flex pr-4 md:space-x-8 scroll-smooth snap-mandatory snap-x overflow-scroll" ref={containerRef}>
        {places.map((place) => (
          <div className="w-full mr-4 md:basis-1/3 snap-center md:scroll-ml-9 shrink-0 " key={place.id}>
            <PlaceItem place={place} />
          </div>
        ))}
      </div>

    </div>

  );
}

export default PlaceList;
