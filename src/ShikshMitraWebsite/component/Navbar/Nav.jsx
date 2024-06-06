import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { FiX } from "react-icons/fi";

import { FaBars } from "react-icons/fa6";
import Whitelogo from "../../assets/SHIKSHAMITRA_logo.png";

import { IoMdSearch } from "react-icons/io";
import { motion } from 'framer-motion';
import "./Nav.css";


const Nav = () => {

  const [isScrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
 
  
  const [formData, setFormData] = useState({
    productName: "",
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

 

 

  // const fadeIn = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setMobileMenuOpen(false); // Close the mobile menu on resize
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    setFormData({
      ...formData,
      productName: value,
    });
  };

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsVisible(isScrollingDown ? false : true);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ y: { duration: 0.7 } }}
      style={{
        position: 'fixed',
        // top: 0,
        top:"15px",
        left: 0,
        right: 0,
        zIndex: 999,

      }}
      className="w-fulll nav-font " >
        {/* <body class="welcome">
  <span id="splash-overlay" class="splash"></span>
  <span id="welcome" class="z-depth-4"></span>
  </body> */}

      <div className="nav-font  w-[95%] mx-auto flex justify-around  items-center  px-3   ">
    
          <Link to="/">
           <div className="h-[80px] ">
           <img
              src={Whitelogo}
              alt="Logo"
              className=" w-full h-full scale-110 cursor-pointer  rounded-sm"
            />
           </div>
          </Link>
      

        {isMobile ? (
          <div className="flex items-center   duration-1000">
            <button
              className="text-black font-extrabold focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              <FaBars className="text-2xl text-white" />
            </button>
            {isMobileMenuOpen && (
              <div className="fixed top-0 left-0 h-full w-full bg-black text-gray-100 p-4 space-y-6 shadow-lg flex flex-col items-center duration-1000">
                <button
                  className=" focus:outline-none self-end duration-1000"
                  onClick={handleMobileMenuToggle}
                >
                  <FiX className="text-3xl mr-2 font-bold mt-2" />
                </button>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/"
                  className={`hover_animation cursor-pointer  hover:duration-700  p-1 rounded-md ${
                    isScrolled ? "" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  onClick={handleMobileMenuToggle}
                  to="/about"
                  className={`hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md ${
                    isScrolled ? "" : ""
                  }`}
                >
                  About
                </Link>

                
                <Link
                  to="/contact"
                  onClick={handleMobileMenuToggle}
                  className={` hover_animation cursor-pointer   hover:duration-700    p-1 rounded-md  ${
                    isScrolled ? "" : ""
                  }`}
                >
                  Contact
                </Link>

             
                <div className="relative group hidden sm:block">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-bar "
                  />
                  <IoMdSearch className="text-xl cursor-pointer text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200" />
                </div>
              </div>
            )}
          </div>
        ) : (
            <div
            // style={{marginRight:" 110px"}}
              className={`z-50 nav-font    mx-auto bg-cyan-700 px-10   space-x-5  rounded-lg p-1  text-black" `}>
              <Link
                to="/"
                onClick={scrollToTop}
                className={`hover_animation nav-font  text-[13px] text-gray-100  cursor-pointer hover:text-gray-100 hover:duration-700    p-1 rounded-md ${
                  isScrolled ? "" : ""
                }`}
              >
                HOME
              </Link>
              <Link
                to="/services"
                onClick={scrollToTop}
                className={`hover_animation nav-font  text-[13px] cursor-pointer text-gray-100 hover:text-gray-100 hover:duration-700    p-1 rounded-md ${
                  isScrolled ? "text-white" : ""
                }`}
              >
               SERVICES
              </Link>
              
              <Link
                to="/screenshot"
                onClick={scrollToTop}
                className={` hover_animation nav-font text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                  isScrolled ? "text-white" : ""
                }`}
              >
               SCREENSHOT
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className={` hover_animation nav-font text-gray-100   text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                  isScrolled ? "text-white" : ""
                }`}
              >
                CONTACT
              </Link>
              <Link
                to="/about"
                onClick={scrollToTop}
                className={` hover_animation text-gray-100 nav-font  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700    p-1 rounded-md  ${
                  isScrolled ? "text-white" : ""
                }`}
              >
              ABOUT
              </Link>
              <Link
                to="/demo"
                onClick={scrollToTop}
                className={` hover_animation nav-font text-gray-100 bg-cyan-600 px-3 py-2 rounded-lg  text-[13px] cursor-pointer  hover:text-gray-100 hover:duration-700  ${
                  isScrolled ? "text-white" : ""
                }`}
              >
              DEMO
              </Link>
            </div>
         
        )}

        {isMobileMenuOpen && isMobile && (
          <div className="flex items-center ml-auto">
            <div className="mr-4"></div>
            <div></div>
          </div>
        )}
       {!isMobile && (
        
         <Link to="/login">
          <div className="relative text-white group hidden sm:block bg-cyan-700 text-[13px]  px-4 py-3 rounded-lg">
         LOGIN
            
          </div>
         </Link>
        )}
      </div>
      {/* </body> */}
    </motion.nav>
  );
};

export default Nav;
