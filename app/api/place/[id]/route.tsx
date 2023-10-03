// eslint-disable camelcase

import { NextResponse } from 'next/server';
import { Client } from '@googlemaps/google-maps-services-js';
import { GOOGLE_MAPS_API_KEY } from '../../../../env';

// eslint-disable-next-line import/prefer-default-export
export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const client = new Client({});
  const placeRes = await client.placeDetails({
    params: {
      place_id: params.id,
      key: GOOGLE_MAPS_API_KEY || '',
      fields: ['url,photos,name,business_status,place_id'],
    },
  });

  const {
    name, place_id: placeId, url, photos, business_status: businessStatus,
  } = await placeRes.data.result;

  let placePhotoReference = null;

  if (photos?.[0]?.photo_reference) {
    placePhotoReference = photos[0].photo_reference;
  }

  const data = {
    placeId,
    businessStatus,
    name,
    url,
    placePhotoReference,
  };

  return NextResponse.json({ data });
}
