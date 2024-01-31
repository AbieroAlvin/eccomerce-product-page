import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import product1 from "../assets/images/image-product-1-thumbnail.jpg";
import product2 from "../assets/images/image-product-2-thumbnail.jpg";
import product3 from "../assets/images/image-product-3-thumbnail.jpg";
import product4 from "../assets/images/image-product-4-thumbnail.jpg";
import productMain1 from "../assets/images/image-product-1.jpg";
import productMain2 from "../assets/images/image-product-2.jpg";
import productMain3 from "../assets/images/image-product-3.jpg";
import productMain4 from "../assets/images/image-product-4.jpg";

const images = [product1, product2, product3, product4];
const main = [productMain1, productMain2, productMain3, productMain4];

const ThumbnailSlider = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
  };

  const nextProduct = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevProduct = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="flex flex-col  gap-6 sm:max-w-[400px] sm:p-4 w-full">
      <div className="w-full relative group">
        <img
          src={main[selectedImageIndex]}
          alt={`Main ${selectedImageIndex + 1}`}
          className="w-full sm:rounded-md"
        />
        {/* {left arrow} */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-White text-Black cursor-pointer">
          <FaChevronLeft onClick={() => prevProduct()} size={20} />
        </div>
        {/* {right arrow} */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-White text-Black cursor-pointer">
          <FaChevronRight onClick={() => nextProduct()} size={20} />
        </div>
      </div>
      <div className="hidden sm:flex gap-3.5 h-[80px] w-[200px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
            className={`${
              index === selectedImageIndex
                ? "opacity-70 border-[2px] border-orange-500"
                : ""
            } w-[82px] h-[82px] rounded-md hover:opacity-70 cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailSlider;
