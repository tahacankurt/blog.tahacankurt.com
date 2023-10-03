import { GOOGLE_MAPS_API_KEY } from '../../../../env';

// eslint-disable-next-line import/prefer-default-export
export async function GET(
  request: Request,
  { params }: { params: { reference: string } },
) {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${params.reference}&key=${GOOGLE_MAPS_API_KEY}`;
  const photo = await fetch(url);
  return photo;
}
