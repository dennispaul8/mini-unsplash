"use client";

import { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';

const SearchBar = ({ query, setQuery, photos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
   const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value);
    }
  };

  return (
    
    <div className="h-72 p-4 border-4  md:mx-auto bg-slate-200 mt-auto overflow-hidden">
      <div className='mr-4'>
      <DarkModeToggle/>
      </div>
      
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center mb-6 w-full gap-2 md:gap-0">
      <input
        type="text"
        placeholder="Search photos..."
        onKeyDown={handleKeyDown}
        className="border border-gray-300 mt-6 p-2 rounded-md md:rounded-md w-4/5 md:max-w-lg dark:border-gray-600 dark:bg-gray-900 dark:text-white"
      />
     
    </form>
    
    {query && photos.length >= 0 && (
      <div className="text-center">
        {photos.length > 0 ? (
          <p className="text-lg sm:text-xl md:text-3xl font-semibold text-blue-950">
            Search results for <span className="text-slate-500">&quot;{query}&quot;</span>
          </p>
        ) : (
          <p className="text-lg sm:text-xl md:text-3xl font-semibold text-blue-950">
            No results found for <span className="text-slate-500">&quot;{query}&quot;</span>
          </p>
        )}
      </div>
    )}
  </div>
  
    
  );
};

export default SearchBar;
