'use client';

import React from 'react';
import { getRandomNumber } from '../../utils';

function ElementLoader({
  containerClassName = null, rowCount = 3,
} : {
    containerClassName: string | null, rowCount:number
}) {
  // TODO: Fix double render issue
  return (
    <div role="status" className={`max-w-sm animate-pulse ${containerClassName}`}>
      {[...Array(rowCount)].map((x, i) => {
        const length = getRandomNumber(40, 100, 10);
        const className = `h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[${length}%] mb-2.5`;
        // eslint-disable-next-line react/no-array-index-key
        return <div className={className} key={i} />;
      })}
    </div>
  );
}

export default ElementLoader;
