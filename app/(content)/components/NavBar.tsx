'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LightBulbIcon, MoonIcon } from '@heroicons/react/24/outline';
import { THEME, ThemeContext } from '../theme-provider';

interface INavLink {
  children: React.ReactNode;
  href: string;
}

function NavLink({ children, href }: INavLink) {
  return <Link href={href} className="font-bold hover:opacity-70">{children}</Link>;
}

export default function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="grid grid-cols-4  gap-4">
      <div>
        <NavLink href="/">T / C</NavLink>
      </div>
      <div>
        <NavLink href="/blog">Stories</NavLink>
      </div>
      <div>
        <NavLink href="/gallery">Gallery</NavLink>
      </div>
      <div className="text-right">
        {theme === THEME.DARK ? (
          <LightBulbIcon
            className="h-6 w-6 cursor-pointer float-right"
            onClick={() => {
              setTheme(THEME.LIGHT);
            }}
          />
        ) : (
          <MoonIcon
            className="h-6 w-6 cursor-pointer float-right"
            onClick={() => {
              setTheme(THEME.DARK);
            }}
          />
        )}
      </div>
    </nav>
  );
}
