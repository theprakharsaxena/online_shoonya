import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePopup } from "../context/PopupContext";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import logo from "../assets/BrandImages/logo_nav2.png";
import rightArrow from "../assets/rightArrow.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const svgRef = useRef(null); // New ref for SVG icon
  const navigate = useNavigate();
  const { togglePopup, toggleLoginPopup } = usePopup();
  const {
    isAuthenticated,
    setIsAuthenticated,
    customerId,
    customerData,
    setCustomerData,
    setCustomerId,
  } = useAuth();

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleClickOutside = (event) => {
    // Check if the click is outside the menu and SVG icon
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !svgRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  const wellnessRetreatsHandler = () => {
    toggleMenu();
    togglePopup("Popup at wellness retreat");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutHandler = () => {
    setCustomerData(null);
    setCustomerId(null);
    setIsAuthenticated(false);
    localStorage.setItem("token", "");
    navigate("/");
    toast.success("Logout Successful");
    toggleMenu();
  };

  const surveyNavigationHandler = () => {
    navigate("/survey");
    toggleMenu();
  };

  const loginHandler = () => {
    toggleLoginPopup();
  };

  useEffect(() => {
    if (customerData) {
      console.log(customerData);
    }
  }, [customerData]);

  const path = window.location.pathname;

  console.log(showMenu, "+++++++++++++");

  return (
    <div>
      <div className="fixed top-0 w-full bg-white shadow-lg z-50 transition-opacity duration-1000 opacity-100 text-black">
        <div className="flex justify-center px-10 sm:px-12 md:px-14 lg:px-16 py-4">
          <div className="h-15 flex justify-between items-center w-full">
            <div
              className="flex items-center w-40 lg:w-36 xl:w-40 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={logo} alt="navbar_logo" className="w-full" />
            </div>
            <div
              className="lg:hidden flex items-center"
              onClick={toggleMenu}
              ref={svgRef}
            >
              <svg
                width="27"
                height="21"
                viewBox="0 0 27 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.125 18.625L15.125 18.625M2.125 10.5H24.875M11.875 2.375L24.875 2.375"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              ref={menuRef}
              className={`flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2 xl:space-x-4 absolute lg:static ${
                showMenu ? "" : "hidden lg:flex"
              } right-4 top-16 lg:right-0 lg:top-0 bg-white lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none shadow-[0_4px_8px_rgba(0,_0,_0,_0.2),_0_8px_16px_rgba(0,_0,_0,_0.15)] lg:shadow-none`}
            >
              <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2 xl:space-x-4">
                <Link
                  className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                  to="/home"
                  onClick={toggleMenu}
                >
                  {path === "/home" || path === "/applicationform"
                    ? "Teacher Home"
                    : "Home"}
                </Link>
                {(path === "/home" || path === "/applicationform") && (
                  <Link
                    className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                    to="/"
                    onClick={toggleMenu}
                  >
                    User Home
                  </Link>
                )}
                {path !== "/home" && path !== "/applicationform" && (
                  <Link
                    className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                    to="/marketplace"
                    onClick={toggleMenu}
                  >
                    Our Programs
                  </Link>
                )}
                {!isAuthenticated &&
                  path !== "/home" &&
                  path !== "/applicationform" && (
                    <>
                      <Link
                        className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                        to="/about"
                        onClick={toggleMenu}
                      >
                        About Us
                      </Link>
                      <Link
                        className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                        onClick={wellnessRetreatsHandler}
                      >
                        Wellness Retreats
                      </Link>
                    </>
                  )}
                {isAuthenticated &&
                  customerId &&
                  path !== "/home" &&
                  path !== "/applicationform" && (
                    <Link
                      className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                      to="/profile"
                      onClick={toggleMenu}
                    >
                      Profile
                    </Link>
                  )}
                {path !== "/home" && path !== "/applicationform" && (
                  <Link
                    className="relative after:content-[''] lg:text-sm xl:text-lg sm:text-lg after:block after:absolute after:w-full after:h-[1px] after:bg-black after:transition-transform after:duration-200 after:ease-in-out after:scale-x-0 hover:after:scale-x-100"
                    to="/home"
                    onClick={toggleMenu}
                  >
                    Teach With Shoonya Life
                  </Link>
                )}
              </ul>
              {path !== "/home" && path !== "/applicationform" && (
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2 xl:space-x-4">
                  {isAuthenticated && (
                    <div className="lg:text-sm xl:text-lg sm:text-lg flex items-center font-bold underline underline-offset-[6px]">
                      Welcome {customerData?.first_name}
                    </div>
                  )}
                  {!isAuthenticated ? (
                    <button
                      className="hover:animate-fade-right lg:text-sm xl:text-lg sm:text-lg outline-none border border-black w-full lg:max-w-fit px-4 py-2 rounded-full bg-white flex items-center justify-center gap-2"
                      onClick={loginHandler}
                    >
                      Sign In
                    </button>
                  ) : (
                    <button
                      className="hover:animate-fade-right lg:text-sm xl:text-lg sm:text-lg outline-none border border-black w-full lg:max-w-fit px-4 py-2 rounded-full bg-white flex items-center justify-center gap-2"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  )}
                  <button
                    className="hover:animate-fade-right lg:text-sm xl:text-lg sm:text-lg outline-none border border-[var(--bg-brown)] bg-[var(--bg-brown)] px-4 py-2 rounded-full bg-brown text-white flex items-center gap-2"
                    onClick={surveyNavigationHandler}
                  >
                    Get a personalized program <img src={rightArrow} alt="" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
