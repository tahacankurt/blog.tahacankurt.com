import React from 'react';
import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from '../../../page.module.css';

const RichTextComponents = {

  block: {
    h1: ({ children }: any) => <h1 className="text-4xl mb-4 mt-14">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl mb-4 mt-14">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl mb-4 mt-14">{children}</h3>,
    normal: ({ children }: any) => <p className="text-black my-4 text-justify">{children}</p>,
    blockquote: ({ children }: any) => <p className="text-black text-justify border-l-4 border-gray-500 pl-4 my-8">{children}</p>,
  },
  types: {
    code: (props : any) => (
      <div className="my-2">
        <SyntaxHighlighter language={props.value.language} className="my-14">
          {props.value.code}
        </SyntaxHighlighter>
      </div>
    ),
    image: ({ value }: any) => (
      <div className="relative w-full my-10">
        <Image
          alt={value.alt || ' '}
          loading="lazy"
          src={value.asset.url}
          width="0"
          height="0"
          sizes="100vw"
          className={`w-full h-auto ${styles.neuBrutalFrame}`}
        />
      </div>
    ),
    // eslint-disable-next-line max-len
    callToAction: ({ value, isInline }: { value: { url: string, text: string }, isInline: boolean }) => (isInline ? (
      <a href={value.url}>{value.text}</a>
    ) : (
      <div className="callToAction">{value.text}</div>
    )),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-bold">
        {children}
      </strong>
    ),
  },
};

export default RichTextComponents;
