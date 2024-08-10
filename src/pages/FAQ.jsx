import React from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import PrivacyPolicyStyles from "../styles/PrivacyPolicy.module.css";
import TeacherHomeStyles from "../styles/TeacherHome.module.css";
import Footer from "../components/Footer";
import styles from "../styles/FAQ.module.css";

const FAQ = () => {
  return (
    <>
      <div className="py-24 2xl:py-28">
        <div className={landingPageStyles.hero}>
          <div className={PrivacyPolicyStyles.main}>
            <div className={PrivacyPolicyStyles.privacyWrapper}>
              <p className={TeacherHomeStyles.stepSectionHeading}>FAQs</p>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 1: How do I sign up for a yoga program on Shoonya?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>To sign up for a
                  yoga program on Shoonya, simply create an account, browse the
                  available programs, and select one that meets your needs. Each
                  program page provides details about the content, the
                  instructor, and the cost if it's a paid program.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 2: Are the yoga teachers on Shoonya Life certified?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>Yes, all yoga
                  teachers on Shoonya Life are certified and have undergone a
                  rigorous verification process. We ensure that every instructor
                  is accredited by recognized institutions to guarantee
                  high-quality and authentic yoga training.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 3: I am a yoga teacher. How do I create my account on
                  Shoonya?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span> If you are a
                  yoga teacher looking to join our platform, you can create your
                  account by visiting our Teachers section on the website.
                  You'll need to provide your certification details, complete
                  our verification process, and once approved, you can start
                  listing your yoga programs and sessions.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 4: Why do different instructors have different prices for
                  their programs?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>Prices vary as
                  each instructor sets their rates based on their expertise, the
                  type of program, and the length of the session. This model
                  allows teachers the flexibility to offer programs that reflect
                  their unique approach and specialties.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 5: How do I find the right yoga program for me?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>You can use our
                  search and filter tools to find yoga programs that fit your
                  specific needs. Filters include program type, instructor,
                  intensity level, and focus area. Each program listing also
                  includes detailed descriptions and instructor profiles to help
                  you choose the best match for your goals.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 6: What should I do if I have technical issues with the
                  platform?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>If you encounter
                  any technical issues, please contact our support team by
                  emailing support@shoonya.com. We are committed to resolving
                  any problems promptly to ensure a smooth experience on our
                  platform.
                </p>
              </div>
              <div className={PrivacyPolicyStyles.privacyContentDiv}>
                <p className={styles.queHeading}>
                  FAQ 7: How does Shoonya Life ensure the privacy and security
                  of its users?
                </p>
                <p>
                  <span className={styles.ansSpan}>Ans : </span>Shoonya Life
                  employs advanced security measures to protect your personal
                  information and ensure that data transfers are secure. We
                  respect your privacy and operate in compliance with all
                  relevant legislation. For more information, please refer to
                  our Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
