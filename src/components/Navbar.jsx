import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/logo.svg";
import Avatar from "../assets/images/image-avatar.png";

import Cart from "../assets/images/icon-cart.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState(false);

  const handleClick = () => setOpen(!open);
  const handleCart = () => setCart(!cart);
  return (
    <div className="bg-transparent w-full mx-auto">
      <nav className="w-full flex justify-between items-center mx-auto max-w-[1080px] py-3 px-4 md:px-0">
        <div className="flex gap-6 items-center">
          {/* logo & menu */}
          <div className="w-full flex items-center gap-4 justify-between">
            {/* open & close menu */}
            <div onClick={handleClick} className="md:hidden z-40">
              <FaBars size={25} className="text-Black cursor-pointer" />
            </div>
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </div>
          {/* navigation */}
          <div className="hidden items-center md:flex">
            <ul className="flex justify-between gap-6 text-Black  text-[13px] items-center">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* overlay */}
        {open ? (
          <div className="bg-black/60 fixed w-full h-screen z-20 top-0 left-0"></div>
        ) : (
          ""
        )}

        {/* cart & profile */}
        <div className="flex gap-5 items-center">
          <div className="relative" onClick={() => handleCart()}>
            <img src={Cart} alt="shopping cart" className="cursor-pointer" />
            <div className="text-[10px] rounded-full text-white bg-Black p-[3px] w-[14px] h-[14px] items-center flex justify-center absolute top-[-5px] right-0">
              5
            </div>
          </div>
          <div className="hover:border-[2px] rounded-full hover:border-orange-500 ">
            <img
              src={Avatar}
              alt="avatar"
              className="md:h-[40px] md:w-[40px] h-[30px] w-[30px] cursor-pointer"
            />
          </div>
        </div>

        {/* mobile */}
        <div
          className={`fixed top-0 w-1/2 h-full z-50 duration-500 bg-white ease-in-out py-[10px] px-[10px] rounded-md shadow-xl ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <nav className="flex flex-col">
            {/* close */}
            <div onClick={handleClick} className="mb-8">
              <FaTimes size={25} className="text-Black cursor-pointer" />
            </div>
            <ul className="flex flex-col justify-between gap-6 text-Black  text-[14px] pl-12">
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline underline-offset-8">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

      {cart && (
        <div
          className={`absolute left-[40%] ${
            cart ? "top-[100px]" : "top-[-100%]"
          }`}
        >
          <Cart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
