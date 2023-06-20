'use client';

import React from 'react';
import { PortableText } from '@portabletext/react';
import RichTextComponents from './RichTextComponent';

function BlockContent({ postDetail }: any) {
  return (
    <PortableText
          // Pass in block content straight from Sanity.io
      value={postDetail.body}
      components={RichTextComponents}
    />
  );
}

export default BlockContent;
