import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos';
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const fetchUnsplashPhotos = async () => {
  try {
    const { data } = await axios.get(`${UNSPLASH_API_URL}?client_id=${ACCESS_KEY}`);
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};