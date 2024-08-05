import React from "react";
import landingPageStyles from "../styles/LandingPage.module.css";
import styles from "../styles/PrivacyPolicy.module.css";
import TeacherHomeStyles from "../styles/TeacherHome.module.css";
import Footer from "../components/Footer";
import utils from "../styles/utils.module.css";

const PaymentPolicy = () => {
  return (
    <div className={landingPageStyles.hero}>
      <div className={styles.main}>
        <div className={styles.privacyWrapper}>
          <p className={TeacherHomeStyles.stepSectionHeading}>
            Payment Policy & Refund Policy
          </p>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Payment Policy</p>
            <p>
              All yoga classes and programs listed on the Shoonya Life
              Marketplace require payment upon registration. We accept a variety
              of payment methods including credit/debit cards and other
              electronic payment forms through our secure online payment system.
            </p>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Refund Policy</p>
            <p className={`${styles.bold} ${utils.s18}`}>
              Cancellation by Participants:
            </p>
            <div className={styles.list}>
              <p>
                <li>
                  Full Refunds: Available if cancellation occurs at least 7 days
                  after the scheduled start of the program that is more than 4
                  weeks.
                </li>
              </p>
              <p>
                <li>
                  No Refunds: No refunds will be issued for cancellations within
                  48 hours of the program start date or after the program has
                  begun and for any other program that is less than 4 weeks.
                </li>
              </p>
            </div>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={`${styles.bold} ${utils.s18}`}>
              Program Modifications and Cancellations by Shoonya Life or
              Instructors:
            </p>
            <div className={styles.list}>
              <p>
                <li>
                  If a program is modified significantly, canceled, or postponed
                  by Shoonya Life or the instructor, participants will be
                  entitled to a full refund.
                </li>
              </p>
              <p>
                <li>
                  Participants will also have the option to transfer their
                  registration to another session or program of equivalent
                  value, subject to availability.
                </li>
              </p>
            </div>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Missed Sessions</p>
            <div className={styles.list}>
              <p>
                No refunds or credits will be provided for missed sessions by
                participants.
              </p>
            </div>
          </div>
          <div className={styles.privacyContentDiv}>
            <p className={TeacherHomeStyles.stepsHeading}>Additional Terms</p>
            <div className={styles.list}>
              <p>
                Refunds will typically be processed within 10 business days of
                the cancellation request. Shoonya Life reserves the right to
                modify the payment and refund policy at any time. Participants
                will be notified of any policy changes via email or through
                their account on the Shoonya Life platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPolicy;
