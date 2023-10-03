import { ReactNode } from 'react';

export interface ICountry {
    id: number,
    name: string,
    emoji: string,
}

export interface ICity {
    id: number,
    name: string,
    country: ICountry,
}


export interface IGalleryItem {
  id: number,
  description: string,
  image_path: string,
  resource_type: string,
  city: ICity,
}

export interface IGalleryItemResponse {
  data: IGalleryItem[],
}

interface Slug {
  current: string
}

export interface ITag {
  id: number,
  name: string,
}

export interface IPlaceGoogle {
  placeId: string,
  name: string,
  businessStatus: string,
  url: string,
  placePhotoReference: string,
}

export interface IPlace extends Partial<IPlaceGoogle> {
  id: string;
  place_map_id: string,
  description: string,
  tags: [],
}

export interface IPost {
  id: number,
  title: string,
  description: string,
  main_image_path: string,
  slug: Slug,
  country : {
    name: string,
    emoji: string,
    code: string,
  },
  tags: ITag[],
  places: IPlace[],
  body: any,
  mainImage: string,
}

export interface ICountryPost {
  id: number,
  title: string,
  emoji: string,
  posts: IPost[]
  slug: string | undefined,
}

export interface ICountryPostResponse {
  data: ICountryPost[],
}

export interface IPostResponse {
  data: IPost[],
}

export interface IBadge {
  id: string,
  children: ReactNode,
}

export interface IPlaceBadge extends IBadge {
  name: string,
}
