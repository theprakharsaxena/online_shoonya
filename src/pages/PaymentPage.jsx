import React, { useState } from "react";
import styles from "../styles/PaymentPage.module.css";
import utils from '../styles/utils.module.css';
import Footer from "../components/Footer";
import { FaPlus } from "react-icons/fa6";
import paypalImg from '../assets/PaymentPage/paypal.png'
import stripeImg from '../assets/PaymentPage/stripe.jpg'

const paymentMethods = [
  { id: 1, type: 'paypal', imgSrc: paypalImg },
  { id: 2, type: 'stripe', imgSrc: stripeImg },
]

const PaymentPage = () => {
  const [showMethods, setShowMethods] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={utils.container}>
          <div className={styles.paymentSection}>
            <div className={styles.main}>
              <p className={`${styles.heading} ${utils.s24}`}>
                Billing methods
              </p>
              <p className={styles.subHeading}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus esse perferendis nihil odio quidem asperiores nisi sunt, rerum qui saepe aspernatur reprehenderit incidunt. Cum exercitationem, sint porro ipsam ullam aut!</p>
              <div className={styles.paymentMethod} onClick={() => setShowMethods(true)}>
                <p className={styles.heading}><FaPlus />Add billing method</p>
              </div>
              {showMethods && <div className={styles.methods}>
                {paymentMethods.map(method => (
                  <div key={method.id} className={styles.method}>
                    <input type="radio" name="payment_method" />
                    <img className={styles.img} src={method.imgSrc} alt="payment_method_img" />
                  </div>
                ))}
              </div>}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
