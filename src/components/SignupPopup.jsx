import React, { useState } from "react";
import ComingSoonPopupStyles from "../styles/ComingSoonPopup.module.css";
import utils from "../styles/utils.module.css";
import { IoMdClose } from "react-icons/io";
import { usePopup } from "../context/PopupContext";
import applicationFormStyles from "../styles/ApplicationFormPage.module.css";
import styles from "../styles/LoginPopup.module.css";
import AddProgramStyles from "../styles/AddProgramPopup.module.css";
import logo from "../assets/BrandImages/logo_nav2.png";
import eyeIcon from "../assets/ProfilePage/eye_icon.svg";
import NavbarStyles from "../styles/Navbar.module.css";
import Loader from "../utils/Loader";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { SERVER_URI } from "../main";
import toast from "react-hot-toast";

const SignupPopup = () => {
  const { toggleSignupPopup, toggleLoginPopup } = usePopup();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passShown, setPassShown] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAuthenticated, setCustomerId } = useAuth();

  const toggleHandler = () => {
    toggleLoginPopup();
    toggleSignupPopup();
  };

  const submitHandler = () => {
    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!firstName.trim()) {
      errors.firstname = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastname = "Last Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!pass.trim()) {
      errors.pass = "Password is required";
    }
    if (!confirmPass.trim() || pass != confirmPass) {
      errors.confirmPass = `Password doesn't match`;
    }
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;
    signup();
  };

  const signup = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${SERVER_URI}/api/customer/register`, {
        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password: pass,
        confirm_password: confirmPass,
      });

      const data = response.data;
      console.log(data);

      // Axios does not use response.ok, so check for the status directly
      if (data.status === false) {
        toast.error(data.message);
        throw new Error("Login failed");
      }

      // after register login
      const loginResponse = await axios.post(
        `${SERVER_URI}/api/customer/login`,
        {
          email,
          password: pass,
        }
      );

      const loginData = loginResponse?.data || loginResponse?.response?.data; // Axios automatically parses JSON
      console.log(loginData);

      // Axios does not use response.ok, so check for the status directly
      if (loginData.status === false) {
        toast.error(loginData.message);
        throw new Error("Login failed");
      }

      localStorage.setItem("token", loginData.token);
      setIsAuthenticated(true);
      console.log("log 1");
      setCustomerId(data.customer_id);
      console.log("log 2");
      localStorage.setItem("email", email);
      localStorage.setItem("password", pass);
      toggleSignupPopup();
      toast.success("Registration successful");
    } catch (e) {
      // if (e.response.data.message) {
      //   toast.error(e.response.data.message);
      // }
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <div className={ComingSoonPopupStyles.popupWrapper}>
      <div className={ComingSoonPopupStyles.popupBackdrop}>
        <div
          className={`${ComingSoonPopupStyles.popupDiv} ${AddProgramStyles.popupDivExtra} ${styles.loginPopupDiv}`}
        >
          <div className={ComingSoonPopupStyles.closeDiv}>
            <IoMdClose onClick={() => toggleSignupPopup()} />
          </div>
          <div className={styles.loginPopupHeading}>
            <div className={`${NavbarStyles.logoDiv} ${styles.logoDivExtra}`}>
              <img src={logo} alt="navbar_logo" />
            </div>
            <div className={styles.heading_subheading}>
              <p className={` ${utils.s36} ${styles.heading}`}>Welcome</p>
              <p className={styles.subHeading}>
                Let's get your journey start with Shoonya Life
              </p>
            </div>
          </div>
          <div
            className={`${AddProgramStyles.popupFormMain} ${styles.popupFormMain}`}
          >
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="firstname">
                <p className={utils.s14}>First Name</p>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Arthur"
                  className={utils.s14}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors?.firstname && (
                  <p className={utils.errors}>{errors?.firstname} </p>
                )}
              </div>
            </div>
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="lastname">
                <p className={utils.s14}>Last Name</p>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Morgan"
                  className={utils.s14}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors?.lastname && (
                  <p className={utils.errors}>{errors?.lastname} </p>
                )}
              </div>
            </div>
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="courseName">
                <p className={utils.s14}>Username</p>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="abc"
                  className={utils.s14}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors?.username && (
                  <p className={utils.errors}>{errors?.username} </p>
                )}
              </div>
            </div>
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="courseName">
                <p className={utils.s14}>Email Id</p>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="johnsnow@gmail.com"
                  className={utils.s14}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors?.email && (
                  <p className={utils.errors}>{errors?.email} </p>
                )}
              </div>
            </div>
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="courseName">
                <p className={utils.s14}>Password</p>
              </label>
              <div
                className={`${AddProgramStyles.label_input} ${styles.eyeIconDiv_input}`}
              >
                <div
                  className={styles.eyeIconDiv}
                  onClick={() => setPassShown((prev) => !prev)}
                >
                  <img src={eyeIcon} alt="eye_icon" />
                </div>
                <div>
                  <input
                    type={!passShown ? "password" : "text"}
                    placeholder="Password***"
                    className={`${utils.s14} ${styles.passInput}`}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  {errors?.pass && (
                    <p className={utils.errors}>{errors?.pass} </p>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`${AddProgramStyles.label_input} ${styles.label_input}`}
            >
              <label htmlFor="courseName">
                <p className={utils.s14}>Confirm Password</p>
              </label>
              <div
                className={`${AddProgramStyles.label_input} ${styles.eyeIconDiv_input}`}
              >
                <div
                  className={styles.eyeIconDiv}
                  onClick={() => setPassShown((prev) => !prev)}
                >
                  <img src={eyeIcon} alt="eye_icon" />
                </div>
                <div>
                  <input
                    type={!passShown ? "password" : "text"}
                    placeholder="Password***"
                    className={`${utils.s14} ${styles.passInput}`}
                    onChange={(e) => setConfirmPass(e.target.value)}
                  />
                  {errors?.confirmPass && (
                    <p className={utils.errors}>{errors?.confirmPass} </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="loading_icon_div">{isLoading && <Loader />}</div>
          <div
            className={`${AddProgramStyles.submitBtn} ${styles.btnDiv}`}
            onClick={submitHandler}
          >
            <button
              className={`${utils.btn2} ${styles.signInBtn}`}
              disabled={isLoading}
            >
              <p>Sign Up</p>
            </button>
          </div>
          <div className={styles.thirdPartyDiv}>
            {/* <p className={`${utils.s14} ${styles.signInHeading}`}>Or Sign in with</p>
            <div className={styles.thirdPartyBtnDiv}>
              <button className={`${utils.btn1} ${styles.authBtn}`}>
                <img src={googleIcon} alt="apple_icon" /><p className={`${utils.s14} ${styles.authProviderName}`}>Google</p>
              </button>
              <button className={`${utils.btn1} ${styles.authBtn}`}>
                <img src={appleIcon} alt="apple_icon" /><p className={`${utils.s14} ${styles.authProviderName}`}>Apple ID</p>
              </button>
            </div> */}
            <div className={styles.linkText}>
              <p className={utils.s14}>
                Already have an account?{" "}
                <span className={styles.link} onClick={toggleHandler}>
                  Sign In
                </span>
              </p>
            </div>
            <div className={applicationFormStyles.privacyCheck}>
              <input
                type="checkbox"
                id="tnc"
                name="tnc"
                className={applicationFormStyles.customCheckbox}
                onChange={(e) => console.log("Terms checkbox clicked")}
              />
              <label
                htmlFor="tnc"
                className={`${applicationFormStyles.customCheckboxLabel} ${styles.customCheckboxLabelExtra}`}
              >
                <span
                  className={`${applicationFormStyles.customCheckboxIndicator} ${styles.customCheckboxIndicatorExtra}`}
                ></span>
                <p className={utils.s14}>
                  I want to receive exclusive offers, updates, and exciting
                  promotions from shoonya
                </p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPopup;
