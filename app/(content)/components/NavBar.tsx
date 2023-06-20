'use client';

import React from 'react';
import Link from 'next/link';
// import { THEME, ThemeContext } from '../theme-provider';
import styles from './navbar.module.css';

interface INavLink {
  children: React.ReactNode;
  className : string,
  href: string;
}

function NavLink({ children, href, className }: INavLink) {
  return <Link href={href} className={className}>{children}</Link>;
}

export default function NavBar() {
  // const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="grid grid-cols-6 lg:grid-cols-9  gap-4">
      <div className="flex col-span-1 justify-left items-center">
        <NavLink className={styles.logo} href="/">T</NavLink>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <NavLink className={styles.navLink} href="/blog">Stories</NavLink>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <NavLink className={styles.navLink} href="/gallery">Gallery</NavLink>
      </div>
      <div className="text-right lg:col-end-11">
        <a className={styles.mailIcon} href="mailto:cankurt.taha@gmail.com">
          <div className={styles.envelope}>test</div>
        </a>
        {/* {theme === THEME.DARK ? (
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
        )} */}
      </div>
    </nav>
  );
}
