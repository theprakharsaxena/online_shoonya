import React from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/PrivacyPolicy.module.css";
import TeacherHomeStyles from "../styles/TeacherHome.module.css";
import Footer from "../components/Footer";

const TnC = () => {
  return (
    <div className={landingPageStyles.hero}>
      <div className={styles.main}>
        <div className={styles.privacyWrapper}>
          <p className={TeacherHomeStyles.stepSectionHeading}>
            Terms and Conditions
          </p>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>
              Acceptance of Terms
            </p>
            <p>
              By accessing and using Shoonya's services, you agree to be bound
              by these terms, which establish a contractual relationship between
              you and Ekam Internet LLP. If you disagree with any part of the
              terms, you may not access the service.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Services Offered</p>
            <p>
              Shoonya Life serves as a digital marketplace that connects
              certified yoga teachers with individuals seeking authentic yoga
              experiences, with a focus on catering to professionals in the tech
              industry. Our platform facilitates the discovery, booking, and
              management of yoga sessions.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>
              User Responsibilities
            </p>
            <div className={styles.list}>
              <p>
                <li>
                  Provide accurate and truthful information about yourself and
                  update it as necessary.
                </li>
              </p>
              <p>
                <li>
                  Use the services provided for personal, non-commercial
                  purposes only, unless explicitly authorised by Shoonya.
                </li>
              </p>
              <p>
                <li>
                  Respect the intellectual property rights of the content
                  available through the services and refrain from copying,
                  distributing, or modifying any content without permission.
                  Intellectual Property
                </li>
              </p>
              <p>
                {" "}
                <li>
                  All contents of the site, including but not limited to texts,
                  graphics, logos, and software, are the property of Shoonya
                  Life (Ekam Internet LLP) and are protected by Indian and
                  international copyright laws.
                </li>
              </p>
            </div>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>
              Limitation of Liability
            </p>
            <p>
              Shoonya Life will not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              access to or use of, or inability to access or use the services.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>
              Governing Law and Jurisdiction
            </p>
            <p>
              These terms shall be governed and construed in accordance with the
              laws of Haryana, India, without regard to its conflict of law
              provisions. Our failure to enforce any right or provision will not
              be considered a waiver of those rights.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Dispute Resolution</p>
            <p>
              In the event of a dispute, efforts should be made to resolve the
              matter amicably through informal negotiation. Failing which, the
              dispute will be resolved through arbitration in accordance with
              the Arbitration and Conciliation Act, 1996, as amended from time
              to time.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>
              Contact Information
            </p>
            <p>
              For any questions or concerns regarding these terms, please
              contact us at hello@ekam.app .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TnC;
