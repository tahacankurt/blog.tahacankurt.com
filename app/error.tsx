'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

// Error components must be Client Components

export default function Error({ error }: {
    error: Error
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center mt-24">
      <h1 className="text-9xl">500</h1>
      <h2 className="text-4xl mt-5">Something went wrong!</h2>
      <p className="text-xl mt-10">Fancy server error alagori will be here</p>
      <div className="mt-10">
        <Link href="/" className="text-3xl ">Return Home</Link>
      </div>
    </div>
  );
}
