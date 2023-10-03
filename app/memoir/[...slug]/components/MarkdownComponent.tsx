// eslint-disable-next-line max-len
/* eslint react/jsx-props-no-spreading: 0 jsx-a11y/heading-has-content: 0  */
/* eslint react/no-children-prop: 0  */
/* @ts-ignore  */

import React from 'react';
import Image from 'next/image';

const MarkdownComponent = {
  p: ({ node, ...props } : {node : any}) => <p className="text-black my-4 text-justify" {...props} />,
  strong: ({ node, ...props } : {node : any}) => <strong className="font-bold" {...props} />,
  // Map `h1` (`# heading`) to use `h2`s.
  h1: ({ node, ...props } : {node : any}) => <h1 className="text-4xl mb-4 mt-10" {...props} />,
  h2: ({ node, ...props } : {node : any}) => <h2 className="text-3xl mb-4 mt-10" {...props} />,
  h3: ({ node, ...props } : {node : any}) => <h3 className="text-2xl mb-4 mt-10" {...props} />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: ({ node, ...props } : {node : any}) => <Image width="800" height="400" className="m-auto my-10 text-center" src={node.src} {...props} alt="Blog Post" loading="lazy" />,
  li: ({ node, ...props } : {node : any}) => <li className="text-black my-4 text-justify list-disc containsTaskList" {...props} />,
  th: ({ node, ...props } : {node : any}) => <th className="text-left min-w-[200px]" {...props} />,
  table: ({ node, ...props } : {node : any}) => <table className="my-8" {...props} />,
};

export default MarkdownComponent;
