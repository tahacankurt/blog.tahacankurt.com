'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SocialMediaContainer() {
  return (
    <div className="fixed bottom-0 py-5 px-3 right-0 md:bg-transparent md:w-auto bg-white w-full text-center md:text-right social-media-container">
      <div className="mr-2 md:mr-5 inline">
        In the guidance of AI, experienced by the developer
      </div>

      <Link href="https://openai.com/">
        <Image className="inline-block cursor-pointer w-5 md:w-10" src="/open_AI.svg" alt="Open Ai Svg" width="32" height="32" />
      </Link>
      <Link href="https://www.linkedin.com/in/taha-cankurt-4950b3bb/" className="ml-2 md:ml-4">
        <Image className="inline-block cursor-pointer w-5 md:w-10" src="/linkedin.svg" alt="Linkedin Svg" width="38" height="38" />
      </Link>
      <Link href="https://github.com/tahacankurt" className="ml-2 md:ml-4">
        <Image className="inline-block w-5 md:w-10" src="/github.svg" alt="Github Svg" width="38" height="38" />
      </Link>
    </div>
  );
}

export default SocialMediaContainer;
