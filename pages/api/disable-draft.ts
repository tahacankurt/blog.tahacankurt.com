// route handler with secret and slug
import { draftMode } from 'next/headers';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/prefer-default-export
export default function exit(req : NextApiRequest, res : NextApiResponse) {
  res.clearPreviewData();
  res.writeHead(307, { Location: '/' });
  res.end();
}
