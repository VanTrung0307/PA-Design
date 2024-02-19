export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  city?: string;
  mainImage?: any;
  categoryImage?: any[];
  carouselImage?: any;
  categories?: string;
  create_at?: string;
  area: string;
  location: string;
  leadArchitect: string;
  designTeam: string;
  description: string;
};
