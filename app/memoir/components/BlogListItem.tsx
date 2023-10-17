'use client';

import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => { setIsHovered(false) }}
      href={`${postUrl}`}
      className={styles.itemLink}
    >
      <div className="flex">
        <div className="w-3/4">
          <h1 className={styles.itemTitle}>
            {blogItem.title}
          </h1>
        </div>
        {
          (blogItem.day_passed && isHovered) ? (
            <div className="w-1/4 text-right">
              <h1 className={styles.itemTitle}>
                {blogItem.day_passed}
                {' '}
                D
              </h1>
            </div>
          ) : null
        }
      </div>

    </Link>
  );
}

export default BlogItem;
