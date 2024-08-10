import React from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/PrivacyPolicy.module.css";
import TeacherHomeStyles from "../styles/TeacherHome.module.css";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="py-24 2xl:py-28">
        <div className={landingPageStyles.hero}>
          <div className={styles.main}>
            <div className={styles.privacyWrapper}>
              <p className={TeacherHomeStyles.stepSectionHeading}>
                Privacy Policy
              </p>
              <div className={styles.privacyContentDiv}>
                <p className={TeacherHomeStyles.stepsHeading}>Introduction</p>
                <p>
                  Welcome to Shoonya, registered as Ekam Internet LLP in
                  Gurugram, Haryana. Your privacy is paramount to us, and this
                  policy outlines our practices concerning the collection, use,
                  and protection of your personal information across our
                  platform.
                </p>
              </div>
              <div className={styles.privacyContentDiv}>
                <p className={TeacherHomeStyles.stepsHeading}>
                  Information We Collect:
                </p>
                <div className={styles.list}>
                  <p>
                    <li>
                      Personal Identification Information: Names, email
                      addresses, and contact details when you register or
                      subscribe.
                    </li>
                  </p>
                  <p>
                    <li>
                      Billing Information: Transaction details for services
                      availed through our platform, handled securely through
                      third-party payment processors.
                    </li>
                  </p>
                  <p>
                    <li>
                      Usage Data: Information on how you interact with our
                      services, which helps us tailor and improve your
                      experience.
                    </li>
                  </p>
                </div>
              </div>
              <div className={styles.privacyContentDiv}>
                <p className={TeacherHomeStyles.stepsHeading}>
                  Purpose of Data Collection:
                </p>
                <div className={styles.list}>
                  <p>
                    <li>
                      To provide access to our marketplace and enable
                      transactions between yoga teachers and seekers.
                    </li>
                  </p>
                  <p>
                    <li>
                      To communicate updates, promotions, and news about
                      services you have shown interest in.
                    </li>
                  </p>
                  <p>
                    <li>
                      To enhance site functionality and user experience based on
                      feedback and usage patterns.
                    </li>
                  </p>
                  <p>
                    {" "}
                    <li>Data Sharing and Disclosure</li>
                  </p>
                </div>
              </div>
              <div className={styles.privacyContentDiv}>
                <p>
                  Your data will only be shared with third parties when
                  necessary to provide requested services, comply with the law,
                  or protect our rights.We utilise robust encryption and
                  security measures to ensure the confidentiality and integrity
                  of your data.
                </p>
              </div>
              <div className={styles.privacyContentDiv}>
                <div className={styles.list}>
                  <p>
                    <li>
                      Access, correct, or request deletion of your personal
                      data.
                    </li>
                  </p>
                  <p>
                    <li>
                      Withdraw consent or object to data processing where
                      applicable.
                    </li>
                  </p>
                  <p>
                    <li>
                      File a complaint with a data protection authority if you
                      believe your rights have been violated.
                    </li>
                  </p>
                  <p>
                    <li>Updates to the Policy</li>
                  </p>
                  <p>
                    <li>
                      We reserve the right to modify this policy at any time.
                      Changes will be posted on our website and, where
                      appropriate, notified to you by email.
                    </li>
                  </p>
                </div>
              </div>
              <div className={styles.privacyContentDiv}>
                <p className={TeacherHomeStyles.stepsHeading}>Contact Us</p>
                <p>
                  For any privacy-related questions, access requests, or
                  concerns, please reach out to us at hello@ekam.app.
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

export default PrivacyPolicy;
