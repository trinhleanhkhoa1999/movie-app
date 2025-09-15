import { useEffect, useState } from "react";

const ImageComponent = ({ className, src, width, height }) => {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading...`,
  );
  console.log("🚀 ~ ImageComponent ~ currentSrc:", currentSrc);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      console.log("✅ Loaded:", img.src);
      setCurrentSrc(src); // only set when loaded
    };
    return () => {
      img.onload = null; // clear up func
    };
  }, [src]);

  return (
    <div>
      <img
        className={currentSrc === src ? className : `${className} blur-sm`}
        src={currentSrc}
        alt=""
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageComponent;
