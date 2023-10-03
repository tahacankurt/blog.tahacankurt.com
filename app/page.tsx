import React from 'react';
import { Metadata } from 'next';
import styles from './page.module.css';
import SkillList from './components/SkillList';

export const metadata: Metadata = {
  title: 'Home Page | Taha Cankurt',
  description: 'Software Engineer | Aka: Digital Nomad',
  openGraph: {
    images: ['og.jpg'],
    title: 'Home Page | Taha Cankurt',
    description: 'Software Engineer | Aka: Digital Nomad',
  },
};

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div>
        <h1 className={styles.title}> Taha Cankurt</h1>
        <h2 className={styles.subTitle}>
          Software
          {' '}
          <span className={styles.highlight}>Engineer</span>
          {' '}
        </h2>
        <SkillList />
      </div>
      <div className="hidden lg:block">
        <object type="image/svg+xml" className="w-full" data="cat.svg">Svg</object>
      </div>
    </div>
  );
}
