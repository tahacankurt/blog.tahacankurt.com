import { CloudinaryAsset } from 'sanity-plugin-cloudinary';

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface IGalleryItem extends Base {
  title: string,
  media: CloudinaryAsset,
  tags: Array,
}

interface Slug {
  current: string
}

export interface Post extends Base {
  title: string,
  description: string,
  slug: Slug,
  body: any,
  mainImage: CloudinaryAsset,
}
