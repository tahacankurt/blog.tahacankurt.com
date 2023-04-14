import Link from 'next/link';
import React from 'react';
import BlogItem from './components/BlogItem';

export default function Blog() {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 sm:px-6">
      <Link className="mt-5" href={`blog/${'article-1'}`}>
        <BlogItem />
      </Link>
      <Link className="mt-5" href={`blog/${'article-1'}`}>
        <BlogItem />
      </Link>
      <Link className="mt-5" href={`blog/${'article-1'}`}>
        <BlogItem />
      </Link>
      <Link className="mt-5" href={`blog/${'article-1'}`}>
        <BlogItem />
      </Link>
      <Link className="mt-5" href={`blog/${'article-1'}`}>
        <BlogItem />
      </Link>
    </div>
  );
}
