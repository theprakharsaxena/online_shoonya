import { useState } from "react";
import Logo from "../assets/BrandImages/bg-brown-logo_name.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import mailIcon from "../assets/LandingPage/mail_icon.svg";
import certificate1_logo from "../assets/Footer/1_logo.png";
import certificate2_logo from "../assets/Footer/2_logo.png";
import certificate3_logo from "../assets/Footer/3_logo.png";
import certificate4_logo from "../assets/Footer/4_logo.png";
import BrandLogo from "../assets/Footer/brand_logo.jpeg";
import { SERVER_URI } from "../main";
import axios from "axios";
import toast from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const sendEmailData = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(`${SERVER_URI}/api/add_email`, {
        email,
        purpose: "Email captured at footer",
      });

      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
      setEmail("");
    } catch (e) {
      // if (e.response.data.message) {
      //   toast.error(e.response.data.message);
      // }
      console.log(e);
    }
  };

  return (
    <div className="py-12 sm:px-10 px-5 bg-brown text-yellow flex justify-center w-full bg-[#453736] text-[#fff7e3]">
      <div className="max-w-screen-2xl w-full">
        <div className="flex flex-col">
          <div className="grid gap-4 lg:gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3 grid lg:grid-cols-4 gap-12">
              <div className="flex flex-col items-center">
                <img
                  src={Logo}
                  className="w-24 h-24 mt-0"
                  alt="image_logo_footer"
                />
                <p className="text-xs pt-3">
                  Find the limitless potential within by connecting with the
                  Infinite
                </p>
              </div>
              <div className="lg:col-span-3 grid sm:grid-cols-8 grid-cols-1 gap-12">
                <div className="sm:col-span-2 col-span-1">
                  <p className="font-semibold pb-6">Links</p>
                  <div className="grid sm:grid-cols-1 grid-cols-3 gap-3">
                    <Link to={"/"} className="text-sm">
                      Home
                    </Link>
                    <Link to={"/about"} className="text-sm">
                      About us
                    </Link>
                    <Link to={"/marketplace"} className="text-sm">
                      Our Programs
                    </Link>
                    <Link to={"/resources"} className="text-sm">
                      Resources
                    </Link>
                    <Link to={"/faq"} className="text-sm">
                      FAQ
                    </Link>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-1">
                  <p className="font-semibold pb-6">Contact us</p>
                  <div className="flex items-center gap-3">
                    <img src={mailIcon} alt="mail_icon" />
                    <Link to={"/"} className="text-sm">
                      hello@ekam.app
                    </Link>
                  </div>
                </div>
                <div className="sm:col-span-3 col-span-1">
                  <p className="font-semibold pb-6">For Teachers</p>
                  <div className="flex flex-col gap-3">
                    <Link to={"/home"} className="text-sm">
                      Teach With Shoonya Life
                    </Link>
                    <Link to={"/paramlogin"} className="text-sm">
                      Param Yoga Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full lg:col-span-2 justify-center items-center lg:items-start">
              <p className="text-lg font-semibold">Subscribe</p>
              <p className="text-sm">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form
                onSubmit={sendEmailData}
                className="flex flex-col gap-2 w-full lg:items-start items-center"
              >
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="flex-1 p-2 rounded-full border border-gray-300 lg:w-full lg:min-w-full sm:min-w-72 "
                  />
                  <button
                    type="submit"
                    className="bg-transparent text-yellow border border-yellow rounded-full px-4 py-2"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="text-sm">In collaboration with</p>
              <div className="flex flex-wrap gap-4">
                <div className="w-40 p-2 bg-gray-200 rounded">
                  <img src={BrandLogo} alt="" />
                </div>
              </div>
              <p className="text-sm">
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
              <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
                <div className="w-24 sm:w-20 lg:w-24 p-2 bg-gray-200 rounded">
                  <img src={certificate1_logo} alt="" />
                </div>
                <div className="w-24 sm:w-20 lg:w-24 p-2 bg-gray-200 rounded">
                  <img src={certificate2_logo} alt="" />
                </div>
                <div className="w-24 sm:w-20 lg:w-24 p-2 bg-gray-200 rounded">
                  <img src={certificate3_logo} alt="" />
                </div>
                <div className="w-24 sm:w-20 lg:w-24 p-2 bg-gray-200 rounded">
                  <img src={certificate4_logo} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow mt-16 mb-8"></div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <p className="text-sm">2023 Shoonya. All rights reserved.</p>
              <div className="flex gap-4">
                <Link to="/privacypolicy" className="underline text-sm">
                  Privacy Policy
                </Link>
                <Link to="/tnc" className="underline text-sm">
                  Terms & Conditions
                </Link>
                <Link to={"/"} className="underline text-sm">
                  Cookies Settings
                </Link>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Link to={"/"}>
                <FaFacebook className="text-xl" />
              </Link>
              <Link
                to={"https://www.instagram.com/sh00nya.life/"}
                target="_blank"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link to={"https://x.com/ShoonyaI"} target="_blank">
                <FaTwitter className="text-xl" />
              </Link>
              <Link
                to={"https://www.linkedin.com/company/shoonya-life/"}
                target="_blank"
              >
                <FaLinkedin className="text-xl" />
              </Link>
              <Link to={"/"}>
                <FaYoutube className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
