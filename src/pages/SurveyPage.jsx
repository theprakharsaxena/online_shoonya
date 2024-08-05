import React, { useEffect, useState } from "react";
import utils from "../styles/utils.module.css";
import starImg from '../assets/SurveyPage/star_img.jpg'
import logoImg from '../assets/SurveyPage/logo_img.png';
import styles from '../styles/SurveyPage.module.css';
import landingPageStyles from '../styles/LandingPage.module.css';
import Footer from "../components/Footer";
import rightArrow from '../assets/LandingPage/arrow_right.png'
import Dropdown6 from "../components/Dropdown6";
import { json, useNavigate } from "react-router-dom";
import locationList from "../utils/LocationList";
import axios from "axios";
import { SERVER_URI } from "../main";
import toast from "react-hot-toast";

const SurveyPage = () => {
  const [step, setStep] = useState(1);
  const genderList = ['Male', 'Female'];
  const ageList = ['18-25', '26-35', '36-45', '46-55', '56+'];
  const frequencyList = [
    "Almost every day",
    "A few times a week",
    "Occasionally, it's not a regular thing"
  ]
  const discomfortlist = [
    "Neck stiffness or pain",
    "Back pain",
    "Tightness in hips or legs",
    "I mostly just feel fatigued"
  ]
  const stressLevelList = [
    "Often feeling overwhelmed",
    "Generally managing but it’s a bit much sometimes",
    "I’m handling it well",
    "Stress? What's that?"
  ]
  const wellbeingFocusList = [
    "Physical strength and flexibility",
    "Emotional resilience and happiness",
    "Clarity and peace of mind",
    "Learning relaxation techniques"
  ]
  const workLifeBalnceList = [
    "It’s a challenge and I often feel stretched too thin.",
    "I manage but there’s definitely room for improvement.",
    "I think I’ve found a good rhythm."
  ]
  const engagementLevelsList = [
    "Regularly, it’s part of my routine",
    "Occasionally, when I remember",
    "I’m curious but haven’t really started yet",
    "Not interested at the moment"
  ]

  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [frequency, setFrequency] = useState('');
  const [discomfort, setDiscomfort] = useState([]);
  const [stressLevel, setStreeLevel] = useState('');
  const [wellbeingFocus, setWellbeingFocus] = useState([]);
  const [workLifeBalance, setWorkLifeBalance] = useState('');
  const [engagementLevel, setEngagementLevel] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateStep1 = () => {
    const errors = {};
    if (!location.trim()) {
      errors.location = 'Location is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };

  const validateStep2 = () => {
    const errors = {};
    if (!age) {
      errors.age = 'Age is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };

  const validateStep3 = () => {
    const errors = {};
    if (!frequency) {
      errors.frequency = 'Frequency is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };

  const validateStep4 = () => {
    const errors = {};
    if (!discomfort.length) {
      errors.discomfort = 'Discomfort is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };

  const validateStep5 = () => {
    const errors = {};
    if (!stressLevel) {
      errors.stresslevel = 'Stress Level is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };
  const validateStep6 = () => {
    const errors = {};
    if (!wellbeingFocus.length) {
      errors.wellbeingFocus = 'wellbeingFocus is required';
    }
    if (wellbeingFocus.length > 2) {
      errors.wellbeingFocus = 'Select maximum 2';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };
  const validateStep7 = () => {
    const errors = {};
    if (!workLifeBalance.length) {
      errors.balance = 'Work Life Balance is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };
  const validateStep8 = () => {
    const errors = {};
    if (!engagementLevel.length) {
      errors.engagementLevel = 'Engagement Level is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    setStep(prev => prev + 1);
  };
  const validateStep9 = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    }

    setErrors(errors);
    if (Object.keys(errors).length) {
      return
    }
    sendSurveyData();
    setStep(prev => prev + 1);
  };

  const sendSurveyData = async () => {
    let surveyData = { location, age, frequency, discomfort, stressLevel, wellbeingFocus, workLifeBalance, engagementLevel, name, email };
    const surveyDataString = JSON.stringify(surveyData);
    console.log(surveyDataString);

    try {
      const { data } = await axios.post(`${SERVER_URI}/api/add_email`, {
        name, email, purpose: surveyDataString
      });

      if (data.status) {
        toast.success(data.message);
      } else {
        toast.error(data.message)
      }

    } catch (e) {
      // if (e.response.data.message) {
      //   toast.error(e.response.data.message);
      // }
      console.log(e);
    }
  }

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setDiscomfort(prevDiscomfort =>
      checked
        ? [...prevDiscomfort, value]
        : prevDiscomfort.filter(item => item !== value)
    );
  };

  const handleWellBeingFocusCheckbox = (event) => {
    const { value, checked } = event.target;
    setWellbeingFocus(prev =>
      checked
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  return (
    <div className={`${landingPageStyles.hero} ${styles.customHero}`}>
      <div className={styles.surveyMain}>
        {step === 1 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              {/* <p className={`${utils.s48} ${styles.surveyHeading}`}>Find Your Balance, Embrace Wellness</p> */}
              <p className={utils.s36}>1. Could you share where you’re joining us from? We’d love to know where you are from.</p>
              <div className={styles.input_submit}>
                <div className={styles.surveyInputs}>
                  <div className={styles.inputDiv}>
                    <Dropdown6 list={locationList} state={location} setState={setLocation} placeholder={'Select Location'} width={'30rem'} />
                    {errors?.location && <p className={utils.errors}>{errors?.location}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  {/* <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button> */}
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep1()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 2 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              {/* <p className={`${utils.s48} ${styles.surveyHeading}`}>Find Your Balance, Embrace Wellness</p> */}
              <p className={utils.s36}>2. How old are you? This helps us understand the diversity of our community.</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  <Dropdown6 list={ageList} state={age} setState={setAge} placeholder={'Select Age Range'} width={'30rem'} />
                  {errors?.age && <p className={utils.errors}>{errors?.age}</p>}
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep2()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 3 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              {/* <p className={`${utils.s48} ${styles.surveyHeading}`}>Find Your Balance, Embrace Wellness</p> */}
              <p className={utils.s36}>3. Reflecting on your typical day  how often do you feel physical discomfort?</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  {/* <Dropdown6 list={ageList} state={age} setState={setAge} placeholder={'Select Age Range'} width={'30rem'} />
                  {errors?.age && <p className={utils.errors}>{errors?.age}</p>} */}
                  <div className={styles.mcqDivs}>
                    {frequencyList.map(frequency => <div className={styles.mcqDiv}>
                      <input type="radio" name="frequency" id="frequency" value={frequency} className={utils.s24} onChange={(e) => setFrequency(e.target.value)} />
                      <label htmlFor={frequency} className={utils.s24}>{frequency}</label>
                    </div>)}
                    {errors?.frequency && <p className={utils.errors}>{errors?.frequency}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep3()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 4 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              <p className={utils.s36}>4. What types of physical discomfort are most frequent for you? (You can choose more than one)</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  <div className={styles.mcqDivs}>
                    {discomfortlist.map((discomfortItem, index) => (
                      <div className={styles.mcqDiv} key={index}>
                        <input
                          type="checkbox"
                          name="discomfort"
                          id={`discomfort-${index}`}
                          value={discomfortItem}
                          className={utils.s24}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor={`discomfort-${index}`} className={utils.s24}>{discomfortItem}</label>
                      </div>
                    ))}
                    {errors?.discomfort && <p className={utils.errors}>{errors?.discomfort}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep4()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 5 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              {/* <p className={`${utils.s48} ${styles.surveyHeading}`}>Find Your Balance, Embrace Wellness</p> */}
              <p className={utils.s36}>5. On the spectrum of stress  where do you find yourself most days?</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  {/* <Dropdown6 list={ageList} state={age} setState={setAge} placeholder={'Select Age Range'} width={'30rem'} />
                  {errors?.age && <p className={utils.errors}>{errors?.age}</p>} */}
                  <div className={styles.mcqDivs}>
                    {stressLevelList.map(stressLevel => <div className={styles.mcqDiv}>
                      <input type="radio" name="stresslevel" id="stresslevel" value={stressLevel} className={utils.s24} onChange={(e) => setStreeLevel(e.target.value)} />
                      <label htmlFor={stressLevel} className={utils.s24}>{stressLevel}</label>
                    </div>)}
                    {errors?.stresslevel && <p className={utils.errors}>{errors?.stresslevel}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep5()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 6 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              <p className={utils.s36}>6. Which aspects of your life would you like to enhance through our wellness programs? (Select up to two)</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  <div className={styles.mcqDivs}>
                    {wellbeingFocusList.map((wellbeingFocus, index) => (
                      <div className={styles.mcqDiv} key={index}>
                        <input
                          type="checkbox"
                          name="wellbeingFocus"
                          id={`wellbeingFocus-${index}`}
                          value={wellbeingFocus}
                          className={utils.s24}
                          onChange={handleWellBeingFocusCheckbox}
                        />
                        <label htmlFor={`discomfort-${index}`} className={utils.s24}>{wellbeingFocus}</label>
                      </div>
                    ))}
                    {errors?.wellbeingFocus && <p className={utils.errors}>{errors?.wellbeingFocus}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep6()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 7 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              <p className={utils.s36}>7. Balancing work and life can be tricky. How do you feel about your current balance?</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  <div className={styles.mcqDivs}>
                    {workLifeBalnceList.map(balance => <div className={styles.mcqDiv}>
                      <input type="radio" name="balance" id="balance" value={balance} className={utils.s24} onChange={(e) => setWorkLifeBalance(e.target.value)} />
                      <label htmlFor={balance} className={utils.s24}>{balance}</label>
                    </div>)}
                    {errors?.balance && <p className={utils.errors}>{errors?.balance}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep7()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 8 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              <p className={utils.s36}>8. Have you practised yoga or meditation before? If so  how often do you engage with these practices?</p>
              <div className={styles.input_submit}>
                <div className={styles.inputDiv}>
                  <div className={styles.mcqDivs}>
                    {engagementLevelsList.map(engagementLevel => <div className={styles.mcqDiv}>
                      <input type="radio" name="engagementLevel" id="engagementLevel" value={engagementLevel} className={utils.s24} onChange={(e) => setEngagementLevel(e.target.value)} />
                      <label htmlFor={engagementLevel} className={utils.s24}>{engagementLevel}</label>
                    </div>)}
                    {errors?.engagementLevel && <p className={utils.errors}>{errors?.engagementLevel}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep8()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 9 && <div className={styles.surveyLeft}>
          <div className={styles.progressDiv}>
            <p>{step} / 9</p>
          </div>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              {/* <p className={`${utils.s48} ${styles.surveyHeading}`}>Find Your Balance, Embrace Wellness</p> */}
              <p className={utils.s36}>9. It’s been great learning about you! To personalise your journey and keep you informed about programs that can truly benefit you  could we have your name and email address?</p>
              <div className={styles.input_submit}>
                <div className={styles.surveyInputs}>
                  <div className={styles.inputDiv}>
                    <input type="text" placeholder="Name" className={utils.s24} onChange={(e) => setName(e.target.value)} />
                    {errors?.name && <p className={utils.errors}>{errors?.name}</p>}
                  </div>
                  <div className={styles.inputDiv}>
                    <input type="text" placeholder="Email" className={utils.s24} onChange={(e) => setEmail(e.target.value)} />
                    {errors?.email && <p className={utils.errors}>{errors?.email}</p>}
                  </div>
                </div>
                <div className={styles.navigateBtns}>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => setStep(prev => prev - 1)}>Prev <img src={rightArrow} className={styles.leftArrowRotate} alt="right_arrow" /></button>
                  <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => validateStep9()}>Next <img src={rightArrow} alt="right_arrow" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>}
        {step === 10 && <div className={styles.surveyLeft}>
          <div className={styles.starImgDiv}>
            <img src={starImg} alt="star_img" />
          </div>
          <div className={`${utils.container} ${styles.containerExtra}`}>
            <div className={styles.surveyLeftContent}>
              <p className={`${utils.s36} ${styles.surveyHeading}`}>Thank you for sharing your thoughts with us! Based on your answers  we'll craft suggestions that truly fit your needs and help you on your path to greater wellness. Look out for tailored program recommendations coming your way soon.</p>
              <div className={styles.input_submit}>
                <button className={`${utils.btn1} ${styles.submitBtn}`} onClick={() => navigate('/')}>Take me back to Home</button>
              </div>
            </div>
          </div>
        </div>}
        <div className={styles.surveyRight}>
          <p className={`${utils.s36} ${styles.surveyRightHeading}`}>Tech Up, Zen Out - Elevate Your Mind and Body with Live Yoga Sessions</p>
          <div className={styles.logoImgDiv}>
            <img src={logoImg} alt="logo_img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SurveyPage;
