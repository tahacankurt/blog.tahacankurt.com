'use client';

import { definePreview } from 'next-sanity/preview';
import { projectId, dataset } from '../env';

const onPublicAccessOnly = () => {
  throw new Error('Unable to load preview you should logged in');
};

if (!projectId || !dataset) {
  throw new Error('Missing Project id or dataset');
}

const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
