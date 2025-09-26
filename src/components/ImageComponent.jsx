import { useEffect, useState } from "react";

const ImageComponent = ({ className, src, width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading...`,
  );
  useEffect(() => {
    const img = new Image();
    if (src) {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src); // only set when loaded
      };
    }
    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image...`);

    return () => {
      img.onload = null; // clear up func
    };
  }, [src, width, height]);

  return (
    <div>
      <img
        className={
          currentSrc === src || !src ? className : `${className} blur-sm`
        }
        src={currentSrc}
        alt=""
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageComponent;
