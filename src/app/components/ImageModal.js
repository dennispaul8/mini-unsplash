import React from 'react';

const ImageModal = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 h-auto pb-12  rounded-md max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.urls.regular}
          alt={photo.alt_description}
          className="w-full h-auto rounded-tl-lg rounded-tr-lg"
        />
        <div className="mt-4 text-left pl-6">
          {/* <p className="text-lg text-gray-800 dark:text-white">{photo.alt_description || 'No description'}</p> */}
          <p className="text-md text-gray-900 font-semibold dark:text-gray-400">{photo.user.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {photo.user.location || ''}
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default ImageModal;
