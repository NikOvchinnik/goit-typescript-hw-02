export interface imageObj {
  alt_description: string;
  id: string;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}

export interface imagesFetch {
  total: number;
  total_pages: number;
  results: imageObj[];
}