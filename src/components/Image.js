import { useState, useEffect } from 'react';
import filler from '../images/filler.jpg';

function Image({ src, alt, onClick, className }) {
  const [isLoadError, setIsLoadError] = useState(false);

  useEffect(() => setIsLoadError(false), [src]);

  function handleLoadError() {
    setIsLoadError(true);
  }

  return (
    <img
      onClick={onClick}
      src={isLoadError ? filler : src}
      alt={`Фото: ${alt ? alt : ''}`}
      className={className}
      onError={handleLoadError}
    />
  );
}

export default Image;
