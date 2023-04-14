import { CloudinaryAsset } from 'sanity-plugin-cloudinary';

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

export interface GalleryItem extends Base {
  title: string,
  media: CloudinaryAsset,
  tags: Array,
}
