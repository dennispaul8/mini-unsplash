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
    <div className="box-content h-40 w-32 p-4 border-4 md:container md:mx-auto bg-slate-200 mt-10">
      <form onSubmit={handleSubmit} className="flex justify-center mb-6 w-full">
        <input
          type="text"
          placeholder="Search photos..."
          onKeyDown={handleKeyDown}
          className="border border-gray-300 p-2 rounded-l-md w-full md:max-w-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Search
        </button>
      </form>

      {query && photos.length >= 0 && (
        <div className="text-center">
          {photos.length > 0 ? (
            <p className='text-3xl font-semibold text-blue-950'>
              Search results for <span className='text-slate-500'>&quot;{query}&quot;</span>
            </p>
          ) : (
            <p  className='text-3xl font-semibold text-blue-950'>No results found for <span className='text-slate-500'>&quot;{query}&quot;</span></p>
          )}
        </div>
      )}
    </div>

    
  );
};

export default SearchBar;
