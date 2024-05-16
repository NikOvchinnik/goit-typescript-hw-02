import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY: string = import.meta.env.VITE_API_KEY;
const headers = {
  Authorization: `Client-ID ${ACCESS_KEY}`,
};

export const fetchImages = async<T> (image: string, page: number): Promise<T> => {
  const searchUrl: string = `/search/photos?page=${page}&per_page=20&query=${image}`;
  const response: AxiosResponse<T> = await axios.get(searchUrl, { headers });
  return response.data;
};
