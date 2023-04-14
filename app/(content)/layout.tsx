import './globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { previewData } from 'next/headers';
import ThemeProvider from './theme-provider';
import NavBar from './components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-white font-light dark:bg-stone-800 dark:text-stone-200">

        {previewData()
          && (
          <div className="w-100 bg-yellow-300 text-black text-center py-2 font-bold">
            {/* Show preview mode information */}
            Preview Mode
          </div>
          )}

        <div />
        {}
        <ThemeProvider>
          <div className="shadow-md ">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 ">
              <NavBar />
            </div>
          </div>
          <div className="container mx-auto max-w-7xl py-6">
            {children}
          </div>
          {/* Social Media Icons */}
          <div className="fixed bottom-0 py-5 right-3 md:bg-transparent md:w-auto bg-white dark:bg-stone-800 w-full  text-right">
            <Link href="https://www.linkedin.com/in/taha-cankurt-4950b3bb/">
              <Image className="inline-block dark:invert cursor-pointer" src="/linkedin.svg" alt="Linkedin Svg" width="38" height="38" style={{ fill: 'red' }} />
            </Link>
            <Link href="https://github.com/tahacankurt" className="ml-4">
              <Image className="inline-block dark:invert" src="/github.svg" alt="Github Svg" width="38" height="38" />
            </Link>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
