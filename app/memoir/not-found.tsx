import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className="text-center mt-24">
      <h2 className="text-6xl">Not Found</h2>
      <p className="text-xl mt-10">Fancy not found alagori will be here</p>
      <div className="mt-10">
        <Link href="/" className="text-3xl ">Return Home</Link>
      </div>
    </div>
  );
}
