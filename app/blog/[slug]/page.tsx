import React from 'react';

export default function Page({
  params,
}: {
  params: { slug: string };
// eslint-disable-next-line no-undef
}): JSX.Element {
  return (
    <h1>
      Blog Detail
      {params.slug}
    </h1>
  );
}
