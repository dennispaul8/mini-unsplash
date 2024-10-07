"use client";

import { useState } from 'react';

const SearchBar = ({ query, setQuery, photos }) => {
//   const [query, setQuery] = useState('');
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
    <div className="h-56 w-full p-4 border-4 md:container md:mx-auto bg-slate-200 mt-10 overflow-hidden">
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center mb-6 w-full gap-2 md:gap-0">
      <input
        type="text"
        placeholder="Search photos..."
        onKeyDown={handleKeyDown}
        className="border border-gray-300 p-2 rounded-t-md md:rounded-none md:rounded-l-md w-full md:max-w-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-b-md md:rounded-none md:rounded-r-md w-full md:w-auto"
      >
        Search
      </button>
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
