import Navbar from "./Navbar";
import ProductPage from "./ProductPage";

const Layout = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <ProductPage />
    </div>
  );
};

export default Layout;
