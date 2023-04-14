'use client';

import React from 'react';

function BlogItem() {
  return (
    <a
      href="https://google.com"
      className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-stone-900 dark:border-stone-700 dark:hover:bg-stone-800"
    >
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
        Noteworthy technology
        acquisitions 2021
      </h1>
      <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
        Here are the biggest enterprise technology
        acquisitions of 2021 so far, in reverse chronological order.
        acquisitions of 2021 so far, in reverse chronological order.
        acquisitions of 2021 so far, in reverse chronological order.
        acquisitions of 2021 so far, in reverse chronological order.
        acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </a>
  );
}

export default BlogItem;
