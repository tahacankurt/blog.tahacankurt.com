'use client';

import React from 'react';
import Link from 'next/link';
import { IPost } from '../../../typings';
import styles from './blogListItem.module.css';

type Props = {
  blogItem: IPost;
  // eslint-disable-next-line react/require-default-props
  categorySlug?: string | null;
};

function BlogItem({ blogItem, categorySlug = null } : Props) {
  const postUrl = `/memoir/${categorySlug ? `${categorySlug}/` : ''}${blogItem.slug}`;
  return (
    <Link
      href={`${postUrl}`}
      className={styles.itemLink}
    >
      <h1 className={styles.itemTitle}>
        {blogItem.title}
      </h1>
    </Link>
  );
}

export default BlogItem;
