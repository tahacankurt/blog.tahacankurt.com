'use client';

import React from 'react';
import Link from 'next/link';
import { Post } from '../../../../typings';
import styles from './blogListItem.module.css';

type Props = {
  blogItem: Post;
};

function BlogItem({ blogItem } : Props) {
  return (
    <Link
      href={`blog/${blogItem.slug.current}`}
      className={styles.itemLink}
    >
      <h1 className={styles.itemTitle}>
        {blogItem.title}
      </h1>
    </Link>
  );
}

export default BlogItem;
