"use client"; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../search/page';
import PhotoCard from '../components/PhotoCard';


const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  

 

  const fetchPhotos = async (query = '') => {
    setLoading(true);
    try {
      const endpoint = query
        ? `${UNSPLASH_API_URL}/search/photos?query=${query}&client_id=${ACCESS_KEY}`
        : `${UNSPLASH_API_URL}/photos?client_id=${ACCESS_KEY}`;
      const response = await axios.get(endpoint);
      const data = query ? response.data.results : response.data;
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(query);
  }, [query]);

//   useEffect(() => {
//     if (query) {
//       fetchPhotos(query);
//     }
//   }, [query]);

  return (
    <main>
  <SearchBar query={query} setQuery={setQuery} photos={photos} />
  
  <div className="container mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4 -mt-14 z-50">
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : (
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-6 md:gap-8">
  {photos.length > 0 &&
    photos.map((photo) => (
      <div key={photo.id} className="mb-4 break-inside-avoid">
        <PhotoCard photo={photo} className="w-full" /> {/* Ensure it takes full width */}
      </div>
    ))
  }
</div>
    )}
    
  </div>
</main>

  

  );
}
