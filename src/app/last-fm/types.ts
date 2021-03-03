interface IPaginationData {
  page: string;
  perPage: string;
  tag: string;
  total: string;
  totalPages: string;
}

export interface IArtist {
  mbid: string;
  name: string;
  url: string;
}

enum ImageSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRALARGE = 'extralarge',
}

export interface IImagesData {
  ['#text']: string;
  size: ImageSizes;
}

export interface IAlbum extends IArtist {
  ['@attr']: { rank?: string };
  artist: IArtist;
  image: IImagesData[];
}

export interface IAlbumsResponce {
  albums: {
    ['@attr']: IPaginationData;
    album: IAlbum[];
  };
}
