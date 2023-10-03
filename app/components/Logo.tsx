'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { THEME, ThemeContext } from '../theme-provider';

interface ILogo {
  src: string;
}

export default function Logo({ src }: ILogo) {
  const { theme } = useContext(ThemeContext);
  return <Image src={src} alt="Logo" width={150} height={150} style={{ filter: theme === THEME.DARK ? 'invert(1)' : 'none' }} />;
}
