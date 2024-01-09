// LazyLoadedImage.js
import { useRef, useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const LazyLoadedImage = ({ src, alt,className }) => {
  const imageRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(imageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Image
      ref={imageRef}
      src={isVisible ? src : ''}
      alt={alt}
      className={className}
    />
  );
};

export default LazyLoadedImage;
