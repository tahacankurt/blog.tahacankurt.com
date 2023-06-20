'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SocialMediaContainer() {
  return (
    <div className="fixed bottom-0 py-5 px-3 right-0 md:bg-transparent md:w-auto bg-white w-full text-right social-media-container">
      <Link href="https://www.linkedin.com/in/taha-cankurt-4950b3bb/">
        <Image className="inline-block dark:invert cursor-pointer" src="/linkedin.svg" alt="Linkedin Svg" width="38" height="38" />
      </Link>
      <Link href="https://github.com/tahacankurt" className="ml-4">
        <Image className="inline-block dark:invert" src="/github.svg" alt="Github Svg" width="38" height="38" />
      </Link>
    </div>
  );
}

export default SocialMediaContainer;
