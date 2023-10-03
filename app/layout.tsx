import './globals.css';
import React from 'react';

import { draftMode } from 'next/headers';
// eslint-disable-next-line camelcase
import { Bebas_Neue, Public_Sans } from 'next/font/google';
import ThemeProvider from './theme-provider';
import NavBar from './components/NavBar';
import SocialMediaContainer from './components/SocialMediaContainer';

const publicSans = Public_Sans({
  weight: ['400', '500', '600'],
  variable: '--font-public-sans',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  weight: ['400'],
  variable: '--font-bebas-neue',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${publicSans.variable} ${bebasNeue.variable} light`}>

      <head />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-white font-light dark:bg-stone-800 dark:text-stone-200">

        {draftMode().isEnabled
          && (
            <div className="w-100 bg-yellow-300 text-black text-center py-2 font-bold">
              {/* Show preview mode information */}
              Preview Mode
            </div>
          )}

        <ThemeProvider>
          <main>
            <div className="shadow-md ">
              <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-6 ">
                <NavBar />
              </div>
            </div>

            <div className="container mx-auto max-w-7xl py-0 md:py-6 px-4 mb-16 lg:mb-0">
              {children}
            </div>
            {/* Social Media Icons */}
            <SocialMediaContainer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
