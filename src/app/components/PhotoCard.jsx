import { useState } from 'react';
import Image from 'next/image';
import { decode } from 'blurhash';

const PhotoCard = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  
  const blurDataURL = () => {
    if (!photo.blur_hash || photo.blur_hash.length < 6) {
      return '/path-to-your-default-placeholder-image.jpg';
    }
    
    const pixels = decode(photo.blur_hash, 32, 32);
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(32, 32);
    imageData.data.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
  };

  return (
    <div className="relative pt-4">
    <Image
      src={photo.urls.small}
      alt={photo.alt_description}
      width={500}
      height={300}
      className="rounded-lg object-cover"
      onLoadingComplete={() => setIsLoaded(true)}
      placeholder="blur"
      blurDataURL={blurDataURL()}
    />
    <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-2 w-full">
      <p className="text-xs sm:text-sm">{photo.user.name}</p>
      <p className="text-xs sm:text-sm">{photo.user.location || ' '}</p>
    </div>
  </div>
  
  );
};

export default PhotoCard;
