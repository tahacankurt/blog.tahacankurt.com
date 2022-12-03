"use client";
import Link from "next/link";
import { createContext, useContext, useState } from "react";
import { THEME, ThemeContext } from "../theme-provider";
import { LightBulbIcon, MoonIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="grid grid-cols-6 gap-4">
      <div>
        <Link href="/">Taha Cankurt</Link>
      </div>
      <div>
        <Link href="/blog">Blog</Link>
      </div>
      <div>
        <Link href="/gallery">Gallery</Link>
      </div>
      <div className="col-span-3 text-right">
        {theme === THEME.DARK ? (
          <LightBulbIcon className="h-6 w-6 cursor-pointer float-right" onClick={()=>{setTheme(THEME.LIGHT)}}/>
        ) : (
          <MoonIcon  className="h-6 w-6 cursor-pointer float-right" onClick={()=>{setTheme(THEME.DARK)}}/>
        )}
      </div>
    </nav>
  );
}
