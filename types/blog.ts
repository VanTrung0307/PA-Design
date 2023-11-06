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
  categories?: string[];
  area: string;
  location: string;
  leadArchitect: string;
  designTeam: string;
  visualImages: string;
  investor: string;
  photographs: string;
};
