'use client';

/* eslint react/jsx-props-no-spreading: 0 jsx-a11y/heading-has-content: 0  */
/* eslint react/no-children-prop: 0 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './postDetail.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Theme from 'react-syntax-highlighter/dist/esm/styles/hljs/foundation';

import MarkdownComponent from './MarkdownComponent';

function BlockContent({ postDetail }: any) {
  return (
    <div className="w-full">
      <ReactMarkdown
        components={{
          ...MarkdownComponent,
          // eslint-disable-next-line react/no-unstable-nested-components
          code({
            node, inline, className, children, ...props
          }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                className="my-8"
                children={String(children).replace(/\n$/, '')}
                style={Theme}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      >
        {postDetail.description}
      </ReactMarkdown>
    </div>
  );
}

export default BlockContent;
