import ThumbnailSlider from "./ThumbnailSlider";
import CartMain from "./CartMain";

const ProductPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-12 items-center  w-full justify-center">
      <ThumbnailSlider />
      <CartMain />
    </div>
  );
};

export default ProductPage;
