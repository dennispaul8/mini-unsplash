"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../search/page';
import PhotoCard from '../components/PhotoCard';
import DarkModeToggle from '../components/DarkModeToggle';


const UNSPLASH_API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export default function Home() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1)
  const [searchPage, setSearchPage] = useState(1); 
  const [totalPages, setTotalPages] = useState(0);
  const [searchTotalPages, setSearchTotalPages] = useState(0); 


  const fetchDefaultPhotos = async () => {
    setLoading(true);
    try {
      const endpoint = `${UNSPLASH_API_URL}/photos?client_id=${ACCESS_KEY}&page=${page}&per_page=21`;
      const response = await axios.get(endpoint);
      setPhotos(response.data);
      setTotalPages(response.headers['x-total']); 
    } catch (error) {
      console.error('Error fetching default photos:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchPhotos = async () => {
    setLoading(true);
    try {
      const endpoint = `${UNSPLASH_API_URL}/search/photos?query=${query}&page=${searchPage}&client_id=${ACCESS_KEY}&per_page=21`;
      const response = await axios.get(endpoint);
      setPhotos(response.data.results);
      setSearchTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching search photos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) {
      fetchDefaultPhotos();
    }
  }, [page]);

  
  useEffect(() => {
    if (query) {
      fetchSearchPhotos();
    }
  }, [query, searchPage]);


  return (
    <main className='dark:text-white dark:bg-gray-900'>
      <SearchBar query={query} setQuery={setQuery} photos={photos} />

      <div className="flex-grow container mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 px-4 -mt-14 z-50">
    {loading ? (
      <p className="text-center">Loading...</p>
    ) : (
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 sm:gap-6 md:gap-8">
        {photos.length > 0 &&
          photos.map((photo) => (
            <div key={photo.id} className="mb-4 break-inside-avoid">
              <PhotoCard photo={photo} className="w-full" />
            </div>
          ))
        }
      </div>
    )}
  </div>


       <div className="sticky bottom-0 flex justify-center space-x-4 bg-white py-4 dark:text-white dark:bg-gray-900">
        {!query && page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-b-md  md:rounded-md w-full md:w-auto"
          >
            Previous
          </button>
        )}
        {!query && page < totalPages && (
          <button
            onClick={() => setPage(page + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-b-md  md:rounded-md w-full md:w-auto"
          >
            Next
          </button>
        )}

        {query && searchPage > 1 && (
          <button
            onClick={() => setSearchPage(searchPage - 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-b-md md:rounded-md w-full md:w-auto"
          >
            Previous
          </button>
        )}
        {query && searchPage < searchTotalPages && (
          <button
            onClick={() => setSearchPage(searchPage + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-b-md md:rounded-md w-full md:w-auto"
          >
            Next
          </button>
        )}
      </div>
    </main>



  );
}
