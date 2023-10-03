'use client';

import React, { useRef } from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import BlogItem from './BlogListItem';
import { ICountryPost } from '../../../typings';
import { scroll } from '../../utils';

type Props = {
  countryDetail: ICountryPost;
};

function CountryCategoryContainer({ countryDetail } : Props) {
  const containerRef = useRef(null);
  const hasSingleCity = countryDetail.posts.length === 1;

  return (
    <div className={`${!hasSingleCity ? 'col-span-12' : 'col-span-12 md:col-span-6'} mt-8`}>
      <div className="grid grid-cols-12 items-center mt-6 md:mt-0">

        <div className="col-span-9 ">
          <h1 className="text-3xl w-full">
            <span className="mr-3">{countryDetail.emoji}</span>
            {' '}
            {countryDetail.slug
              ? (
                <a href={`/memoir/${countryDetail.slug}`}>
                  {countryDetail.title}
                </a>
              ) : countryDetail.title}
          </h1>
        </div>

        {
          countryDetail.posts.length > 2 && (
          <div className="col-span-3 text-right">
            <button className="align-middle mr-2" onClick={() => scroll({ elemRef: containerRef, direction: 'right' })} type="button">
              <ChevronLeftIcon width={24} className="float-right " />
            </button>
            <button className="align-middle " onClick={() => scroll({ elemRef: containerRef, direction: 'left' })} type="button">
              <ChevronRightIcon width={24} className="float-right " />
            </button>
          </div>
          )
        }

      </div>

      <div className="flex flex-nowrap overflow-scroll scroll-smooth snap-mandatory snap-x w-full mt-4" ref={containerRef}>
        {countryDetail.posts.map((post) => (
          <div className={`${hasSingleCity ? 'w-full' : 'w-full md:w-1/2'} snap-start flex-grow-0 flex-shrink-0 pr-0 md:pr-5`} key={post.id}>
            <BlogItem blogItem={post} categorySlug={countryDetail.slug} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default CountryCategoryContainer;
