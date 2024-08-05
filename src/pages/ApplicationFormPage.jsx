import React, { useEffect, useState } from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/ApplicationFormPage.module.css";
import utils from "../styles/utils.module.css";
import Footer from "../components/Footer";
import rightArrow from "../assets/LandingPage/arrow_right.png";
import Dropdown2 from "../components/Dropdown2";
import Dropdown3 from "../components/Dropdown3";
import uploadIcon from "../assets/TeacherPage/uploadIcon.svg";
import { usePopup } from "../context/PopupContext";
import { useNavigate } from "react-router-dom";
import loginPopupStyles from "../styles/LoginPopup.module.css";
import AddProgramStyles from "../styles/AddProgramPopup.module.css";
import eyeIcon from "../assets/ProfilePage/eye_icon.svg";
import imgIcon from "../assets/TeacherHomePage/img_icon.svg";
import axios from "axios";
import { SERVER_URI } from "../main";
import locationList from "../utils/LocationList";

const ApplicationFormPage = () => {
  // list
  const genderList = ["Male", "Female"];
  const docList = ["Degree Certificate", "Diploma", "Certification"];

  // step1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [location, setLocation] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passShown, setPassShown] = useState(false);

  //step2
  const [docs, setDocs] = useState([
    { type: "", file: null },
    { type: "", file: null },
    { type: "", file: null },
  ]);
  const [workExp, setWorkExp] = useState("");
  const asanasList = [
    "Trikonasana",
    "Padhastasna",
    "Dhanurasana",
    "Ardhamatysendra asana",
    "Sirsasana",
  ];
  const [step, setStep] = useState(0);
  const [video, setVideo] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  const [alertShow, setAlertShow] = useState(true);
  const { toggleSuccessPopup } = usePopup();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [profilePresignedURL, setProfilePresignedURL] = useState(null);
  const [certificatePresignedURL, setCertificatePresignedURL] = useState(null);
  const [instructorId, setInstructorId] = useState(null);

  const validateVideoFileSize = (file, size) => {
    if (file.size > 20 * 1024 * 1024) {
      alert("File size exceeds 20 MB. Please select a smaller file.");
      return false;
    }
    return true;
  };

  const handleVideoUpload = (e) => {
    const uploadedVideo = e.target.files[0];
    if (!validateVideoFileSize(uploadedVideo, 20 * 1024 * 1024)) {
      return;
    }
    if (uploadedVideo && uploadedVideo.type.startsWith("video/")) {
      setVideo(uploadedVideo);
    } else {
      alert("Please select a video file.");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedVideo = e.dataTransfer.files[0];
    if (!validateVideoFileSize(droppedVideo, 20 * 1024 * 1024)) {
      return;
    }
    if (droppedVideo && droppedVideo.type.startsWith("video/")) {
      setVideo(droppedVideo);
    } else {
      alert("Please drop a video file.");
    }
  };

  const profileImgHandler = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setProfileImg(selectedFile);
    } else if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File size exceeds 5 MB. Please select a smaller file.");
    } else {
      alert("Select img type to upload profile image");
    }
  };

  const handleSelectVideo = () => {
    document.getElementById("fileInput").click();
  };

  const handleSelectProfileImg = () => {
    document.getElementById("profileImgInput").click();
  };

  const step1Handler = () => {
    const errors = {};
    if (!profileImg) {
      errors.profileImg = "Profile Image is required";
    }
    if (!firstName.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    }
    if (!location) {
      errors.location = "Location is required";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!username.trim()) {
      errors.username = "Username is required";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    if (!confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    }
    if (confirmPassword !== password) {
      errors.confirmPassword = `Passoword doesn't match`;
    }

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStep((prev) => prev + 1);
  };

  const step2Handler = () => {
    const errors = {};
    const isDocSelected = docs.some((doc) => doc.type && doc.file !== null);
    if (!isDocSelected) {
      errors.docs = "Document is required";
    }
    if (!workExp) {
      errors.workExp = "Work Experience is required";
    }

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStep((prev) => prev + 1);
  };
  const step3Handler = () => {
    const errors = {};
    if (!video) {
      errors.video = "Video is required";
    }

    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    setStep((prev) => prev + 1);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // *************************************************

  const applyHandler = async () => {
    toggleSuccessPopup();

    try {
      const response = await axios.post(
        `${SERVER_URI}/api/instructor/register`,
        {
          username,
          password,
          gender,
          email,
          first_name: firstName,
          last_name: lastName,
          experience_years: workExp,
          affiliation: "independent",
        }
      );

      // Axios does not use response.ok, so check for the status directly
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      const data = response.data; // Axios automatically parses JSON
      console.log(data);
      setInstructorId(data.instructor_id);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!instructorId) return;

    const profileURL =
      "http://localhost:5000/api/instructor/upload_profile_picture";
    const certificateURL =
      "http://localhost:5000/api/instructor/upload_certificate";
    const videoURL = "http://localhost:5000/api/instructor/upload_video";

    const getSignedUrl = async (url) => {
      const result = await axios.post(url, { instructor_id: instructorId });
      return result.data.upload_url;
    };

    const uploadFile = async (url, file) => {
      const result = await axios.put(url, file, {
        headers: {
          "Content-Type": file.type,
          "x-amz-acl": "public-read",
        },
      });
      console.log(result);
      return result.data;
    };

    const uploadFiles = async () => {
      try {
        const profileUrl = await getSignedUrl(profileURL);
        const certificateUrl = await getSignedUrl(certificateURL);
        console.log(certificateUrl);
        const videoUrl = await getSignedUrl(videoURL);

        const uploadPromises = [];
        if (profileImg) {
          uploadPromises.push(uploadFile(profileUrl[0], profileImg));
        }
        if (docs[0].file && docs[0].type) {
          uploadPromises.push(uploadFile(certificateUrl[0], docs[0].file));
        }
        if (docs[1].file && docs[1].type) {
          uploadPromises.push(uploadFile(certificateUrl[1], docs[1].file));
        }
        if (docs[2].file && docs[2].type) {
          uploadPromises.push(uploadFile(certificateUrl[2], docs[2].file));
        }
        if (video) {
          uploadPromises.push(uploadFile(videoUrl[0], video));
        }

        const results = await Promise.all(uploadPromises);
        console.log("Upload results:", results);
      } catch (error) {
        console.error("Error uploading files:", error);
      }
    };

    uploadFiles();
  }, [instructorId]);

  const paymentPolicyNavigationHandler = () => {
    console.log("working");
    window.open("/paymentpolicy", "_blank");
  };
  const tncNavigationHandler = () => {
    window.open("/tnc", "_blank");
  };

  return (
    <div className={landingPageStyles.hero}>
      <div className={`${utils.mainContainer} ${styles.mainContainer}`}>
        <div className={`${utils.container} ${styles.headerSection}`}>
          <p className={`${utils.s56} ${styles.heading}`}>
            Fill the form to apply for Shoonya Life
          </p>
          <p className={`${utils.s18} ${styles.subHeading}`}>
            The form processing usallly takle 2-3 days, you will receive the
            confirmation mail link once verified.
          </p>
        </div>
        <div className={utils.container}>
          <div className={styles.progressSection}>
            <div className={styles.stepDiv}>
              <div
                className={`${styles.progressNoDiv} ${
                  step >= 0 ? styles.progressNoActive : ""
                }`}
              >
                <p
                  className={`${styles.progressNo} ${
                    step >= 0 ? styles.progressNoActive : ""
                  }`}
                >
                  1
                </p>
              </div>
              <p className={styles.stepName}>Personal Details</p>
            </div>
            <span
              className={`${styles.progressLine} ${
                step >= 1 ? styles.progressLineActive : ""
              }`}
            ></span>
            <div className={styles.stepDiv}>
              <div
                className={`${styles.progressNoDiv} ${
                  step >= 1 ? styles.progressNoActive : ""
                }`}
              >
                <p className={styles.progressNo}>2</p>
              </div>
              <p className={styles.stepName}>Professional Details</p>
            </div>
            <span
              className={`${styles.progressLine} ${
                step >= 2 ? styles.progressLineActive : ""
              }`}
            ></span>
            <div className={styles.stepDiv}>
              <div
                className={`${styles.progressNoDiv} ${
                  step >= 2 && styles.progressNoActive
                }`}
              >
                <p className={styles.progressNo}>3</p>
              </div>
              <p className={styles.stepName}>Video Examples</p>
            </div>
            <span
              className={`${styles.progressLine} ${
                step >= 3 ? styles.progressLineActive : ""
              }`}
            ></span>
            <div className={styles.stepDiv}>
              <div
                className={`${styles.progressNoDiv} ${
                  step >= 3 && styles.progressNoActive
                }`}
              >
                <p className={styles.progressNo}>4</p>
              </div>
              <p className={styles.stepName}>Applied</p>
            </div>
          </div>
        </div>
        {step === 0 && (
          <>
            <div className={utils.container}>
              <div className={styles.formSection}>
                <div className={`${styles.inputFileDiv}`}>
                  <button
                    className={`${utils.btn1} ${styles.profileImgBtn}`}
                    onClick={handleSelectProfileImg}
                  >
                    <img src={imgIcon} alt="profile_img_icon" />
                    <p>
                      {!profileImg ? "Add your profile image" : profileImg.name}
                    </p>
                  </button>
                  {errors?.profileImg && (
                    <p className={`${utils.errors} ${utils.s14}`}>
                      {errors?.profileImg}
                    </p>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    name="profileimg"
                    id="profileImgInput"
                    style={{ display: "none" }}
                    onChange={profileImgHandler}
                  />
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor="username">
                    <p className={utils.s14}>Username*</p>
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="johnsnow"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors?.username && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.username}
                    </p>
                  )}
                </div>
                <div className={styles.nameDiv}>
                  <div className={styles.labelInput}>
                    <label htmlFor="fname">
                      <p className={utils.s14}>First Name*</p>
                    </label>
                    <input
                      type="text"
                      name="fname"
                      placeholder="Ex. John"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors?.firstName && (
                      <p
                        className={`${`${utils.errors} ${utils.s14}`} ${
                          styles.errors_margin
                        }`}
                      >
                        {errors?.firstName}
                      </p>
                    )}
                  </div>
                  <div className={styles.labelInput}>
                    <label htmlFor="lname">
                      <p className={utils.s14}>Last Name*</p>
                    </label>
                    <input
                      type="text"
                      name="lname"
                      placeholder="Ex. Snow"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors?.lastName && (
                      <p
                        className={`${`${utils.errors} ${utils.s14}`} ${
                          styles.errors_margin
                        }`}
                      >
                        {errors?.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor="email">
                    <p className={utils.s14}>Email*</p>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="johnsnow@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors?.email && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.email}
                    </p>
                  )}
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor="gender">
                    <p className={utils.s14}>Gender*</p>
                  </label>
                  <Dropdown2
                    placeholder={"Select the Gender"}
                    list={genderList}
                    state={gender}
                    setState={setGender}
                  />
                  {errors?.gender && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.gender}
                    </p>
                  )}
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor="location">
                    <p className={utils.s14}>Location*</p>
                  </label>
                  <Dropdown2
                    placeholder={"Select the location"}
                    list={locationList}
                    state={location}
                    setState={setLocation}
                  />
                  {errors?.location && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.location}
                    </p>
                  )}
                </div>
                <div
                  className={`${AddProgramStyles.label_input} ${loginPopupStyles.label_input} ${styles.labelInput}`}
                >
                  <label htmlFor="password">
                    <p className={utils.s14}>Password</p>
                  </label>
                  <div
                    className={`${AddProgramStyles.label_input} ${loginPopupStyles.eyeIconDiv_input}`}
                  >
                    <div
                      className={loginPopupStyles.eyeIconDiv}
                      onClick={() => setPassShown((prev) => !prev)}
                    >
                      <img src={eyeIcon} alt="eye_icon" />
                    </div>
                    <div>
                      <input
                        type={!passShown ? "password" : "text"}
                        placeholder="Password***"
                        className={`${utils.s14} ${loginPopupStyles.passInput} ${styles.passInput}`}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {errors?.password && (
                        <p className={`${utils.errors} ${utils.s14}`}>
                          {errors?.password}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`${AddProgramStyles.label_input} ${loginPopupStyles.label_input} ${styles.labelInput}`}
                >
                  <label htmlFor="courseName">
                    <p className={utils.s14}>Confirm Password</p>
                  </label>
                  <div
                    className={`${AddProgramStyles.label_input} ${loginPopupStyles.eyeIconDiv_input}`}
                  >
                    <div
                      className={loginPopupStyles.eyeIconDiv}
                      onClick={() => setPassShown((prev) => !prev)}
                    >
                      <img src={eyeIcon} alt="eye_icon" />
                    </div>
                    <div>
                      <input
                        type={!passShown ? "password" : "text"}
                        placeholder="Password***"
                        className={`${utils.s14} ${loginPopupStyles.passInput}  ${styles.passInput}`}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      {errors?.confirmPassword && (
                        <p className={`${utils.errors} ${utils.s14}`}>
                          {errors?.confirmPassword}{" "}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonDiv} onClick={step1Handler}>
              <button className={`${utils.btn2} ${styles.applyBtn}`}>
                <p>Next</p> <img src={rightArrow} alt="right_arrow" />
              </button>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div className={utils.container}>
              <div className={styles.formSection}>
                <div>
                  <p className={styles.step2Heading}>
                    Add the document for verification
                  </p>
                </div>
                <div className={styles.labelInput}>
                  <div className={styles.dropdowns}>
                    <div className={styles.labelInput2}>
                      <Dropdown3
                        docIndex={0}
                        placeholder={"Document name"}
                        list={docList}
                        state={docs}
                        setState={setDocs}
                        width={"50%"}
                      />
                    </div>
                    <div className={styles.labelInput2}>
                      <Dropdown3
                        docIndex={1}
                        placeholder={"Document name"}
                        list={docList}
                        state={docs}
                        setState={setDocs}
                        width={"50%"}
                      />
                    </div>
                    <div className={styles.labelInput2}>
                      <Dropdown3
                        docIndex={2}
                        placeholder={"Document name"}
                        list={docList}
                        state={docs}
                        setState={setDocs}
                        width={"50%"}
                      />
                    </div>
                  </div>
                  {errors?.docs && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.docs}
                    </p>
                  )}
                </div>
                <div className={styles.labelInput}>
                  <label htmlFor="exp">
                    <p>Year of Experience*</p>
                  </label>
                  <input
                    type="number"
                    placeholder="example : 10Years"
                    onChange={(e) => setWorkExp(e.target.value)}
                  />
                  {errors?.workExp && (
                    <p
                      className={`${`${utils.errors} ${utils.s14}`} ${
                        styles.errors_margin
                      }`}
                    >
                      {errors?.workExp}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.buttonDiv} onClick={step2Handler}>
              <button className={`${utils.btn2} ${styles.applyBtn}`}>
                <p>Next</p> <img src={rightArrow} alt="right_arrow" />
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className={utils.container}>
              <div
                className={`${styles.formSection} ${styles.dragndropFilesDiv}`}
              >
                <div className={styles.heading_list}>
                  <p className={styles.step2Heading}>
                    Add a Video Tutorial of you performing and teaching one of
                    the following Asanas
                  </p>
                  <div className={styles.asans}>
                    {asanasList.map((asan) => (
                      <li className={utils.s14}>{asan}</li>
                    ))}
                  </div>
                </div>
                <div
                  className={styles.dragndropContainer}
                  onDrop={handleDrop}
                  onDragOver={preventDefault}
                >
                  <div className={styles.uplaodIconDiv}>
                    <img src={uploadIcon} alt="Upload Icon" />
                  </div>
                  <p className={`${styles.fileHeading} ${utils.s14}`}>
                    Drag and Drop your video here OR{" "}
                    <button
                      className={styles.selectBtn}
                      onClick={handleSelectVideo}
                    >
                      Select Video
                    </button>
                  </p>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    style={{ display: "none" }}
                    id="fileInput"
                  />
                  {video ? (
                    <p className={`${styles.fileHeading} ${utils.s14}`}>
                      {video.name}
                    </p>
                  ) : (
                    <p className={`${styles.fileHeading} ${utils.s14}`}>
                      No file chosen
                    </p>
                  )}
                </div>
                {errors?.video && (
                  <p className={`${utils.errors} ${utils.s14}`}>
                    {errors?.video}
                  </p>
                )}
              </div>
            </div>
            <div className={styles.buttonDiv} onClick={step3Handler}>
              <button className={`${utils.btn2} ${styles.applyBtn}`}>
                <p>Next</p> <img src={rightArrow} alt="right_arrow" />
              </button>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <div
              className={`${utils.container} ${styles.applicationContainer}`}
            >
              {alertShow && (
                <div className={styles.lineAlert}>
                  <p className={`${utils.s14}`}>
                    <span className={styles.alertSpan}>Important:</span> Kindly
                    go through revenue model and terms and conditions for the
                    program
                  </p>
                </div>
              )}
              <div className={`${styles.formSection} ${styles.step4Container}`}>
                <p className={` ${styles.submitSubHeading}`}>
                  Please review all the information you previously typed in the
                  past steps, and if all is okay, submit your application you
                  will receive confirmation mail once your application is
                  verified by the team
                </p>
                <div className={styles.privacyChecks}>
                  <div className={styles.privacyCheck}>
                    <input
                      type="checkbox"
                      id="tnc"
                      name="tnc"
                      className={styles.customCheckbox}
                      onChange={(e) => console.log("Terms checkbox clicked")}
                    />
                    <label htmlFor="tnc" className={styles.customCheckboxLabel}>
                      <span className={styles.customCheckboxIndicator}></span>
                      <p className={utils.s14}>
                        I acknowledge that I have gone through{" "}
                        <span
                          className={styles.termsSpan}
                          onClick={() => navigate("/tnc")}
                        >
                          terms and conditions.
                        </span>{" "}
                      </p>
                    </label>
                  </div>
                  <div className={styles.privacyCheck}>
                    <input
                      type="checkbox"
                      id="payment"
                      name="payment"
                      className={styles.customCheckbox}
                      onChange={(e) => console.log("Payment checkbox clicked")}
                    />
                    <label
                      htmlFor="payment"
                      className={styles.customCheckboxLabel}
                    >
                      <span className={styles.customCheckboxIndicator}></span>
                      <p className={utils.s14}>
                        I acknowledge that I have gone through{" "}
                        <span
                          className={styles.termsSpan}
                          onClick={() => navigate("/paymentpolicy")}
                        >
                          payment policies and revenue sharing{" "}
                        </span>
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <button
                className={`${utils.btn2} ${styles.applyBtn}`}
                onClick={applyHandler}
              >
                <p>Apply</p>
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationFormPage;
