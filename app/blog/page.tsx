import Link from 'next/link';
import React from 'react';

export default function Blog() {
  return (
    <>
      <h1 className="mt-4">
        <Link href={`blog/${'article-1'}`}>Article 1</Link>
      </h1>
      <h1 className="mt-4">
        <Link href={`blog/${'article-2'}`}>Article 2</Link>
      </h1>
    </>
  );
}
