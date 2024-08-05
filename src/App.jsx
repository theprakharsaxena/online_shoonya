import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import MarketPlace from "./pages/MarketPlace";
import ProductPage from "./pages/ProductPage";
import ResourcesPage from "./pages/ResourcesPage";
// import { PopupProvider, usePopup } from './context/PopupContext';
import { usePopup } from "./context/PopupContext";
import ComingSoonPopup from "./components/ComingSoonPopup";
import ProgramsPage from "./pages/ProgramsPage";
import TeacherHome from "./pages/TeacherHome";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TnC from "./pages/TnC";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import ProgramPage from "./pages/ProgramPage";
import ApplicationSubmissionPopup from "./components/ApplicationSubmissionPopup";
import ProfilePage from "./pages/ProfilePage";
// import AddProgramPopup from './components/AddProgramPopup';
import LoginPopup from "./components/LoginPopup";
import SignupPopup from "./components/SignupPopup";
import SurveyPage from "./pages/SurveyPage";
// import EditApplicationFormPopup from './components/EditApplicationFormPopup';
import PaymentPage from "./pages/PaymentPage";
import ContactUsPopup from "./components/ContactUsPopup";
// import ProtectedRoute from './utils/ProtectedRoute';
import { useAuth } from "./context/AuthContext";
import axios from "axios";
// import TeacherLoginPopup from './components/TeacherLoginPopup';
import PaymentPolicy from "./pages/PaymentPolicy";
// import TeacherProgramPage from './pages/TeacherProgramPage';
// import TeacherProfilePage from './pages/TeacherProfilePage';
import { SERVER_URI } from "./main";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import WelcomePopup from "./components/WelcomePopup";
import BuyPopup from "./components/BuyPopup";
import ParamYogaLogin from "./components/ParamYogaLogin";
import SessionNotStartedPopup from "./components/SessionNotStartedPopup";
import toast from "react-hot-toast";

const App = () => {
  const {
    popupState,
    successsPopupState,
    // addProgramPopupState,
    loginPopupState,
    signupPopupState,
    contactPopupState,
    welcomePopup,
    toggleWelcomePopup,
    buyPopup,
    sessionNotStarted,
  } = usePopup();
  const {
    customerId,
    setCustomerId,
    isAuthenticated,
    setCustomerData,
    setIsAuthenticated,
  } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(isAuthenticated, token);

    if (isAuthenticated && token) {
      console.log("working fine");
      const fetchCustomerInfo = async () => {
        try {
          const response = await axios.get(
            `${SERVER_URI}/api/customer/fetch_data/${customerId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Include token in headers
              },
            }
          );

          // Axios does not use response.ok, so check for the status directly
          if (response.status !== 200) {
            throw new Error("Failed to fetch data");
          }

          const data = response.data; // Axios automatically parses JSON
          // console.log(data);
          setCustomerData(data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchCustomerInfo();
    }

    console.log(isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (token && email && password) {
      const autoLogin = async () => {
        try {
          const response = await axios.post(
            `${SERVER_URI}/api/customer/login`,
            {
              email,
              password,
            }
          );

          const data = response?.data || response?.response?.data; // Axios automatically parses JSON
          // console.log(data);

          // Axios does not use response.ok, so check for the status directly
          if (data.status === false) {
            toast.error(data.message);
            throw new Error("Login failed");
          }

          setIsAuthenticated(true);
          setCustomerId(data.customer_id);
        } catch (e) {
          if (e.response.data.message) {
            toast.error(e.response.data.message);
          }
          console.log(e);
        }
      };

      autoLogin();
    }
  }, []);

  const { programsList, setProgramsList } = useAuth();

  // const newProgramsList = shortened ? programsList.slice(0, 3) : programsList;

  const getSignatureProgram = async () => {
    try {
      const response = await axios.post(
        `${SERVER_URI}/api/send_signature_programs`
      );

      // Axios does not use response.ok, so check for the status directly
      if (response.status !== 200) {
        throw new Error("Failed to fetch data");
      }

      const data = response.data; // Axios automatically parses JSON
      console.log(data.signature_programs);
      setProgramsList(data.signature_programs);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      toggleWelcomePopup();
    }, 20000);
    getSignatureProgram();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/marketPlace" element={<MarketPlace />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
        <Route path="/resources" element={<ResourcesPage />}></Route>
        <Route path="/programs" element={<ProgramsPage />}></Route>
        <Route path="/home" element={<TeacherHome />}></Route>
        <Route
          path="/applicationForm"
          element={<ApplicationFormPage />}
        ></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/paymentpolicy" element={<PaymentPolicy />}></Route>
        <Route path="profile/program" element={<ProgramPage />}></Route>
        {/* <Route path='/teachprogram' element={<TeacherProgramPage />}></Route> */}
        {/* <Route path='/' element={<ProtectedRoute />}> */}
        <Route path="/profile" element={<ProfilePage />}></Route>
        {/* <Route path='teachprofile' element={<TeacherProfilePage />}></Route> */}
        {/* </Route> */}
        <Route path="/survey" element={<SurveyPage />}></Route>
        <Route path="/tnc" element={<TnC />}></Route>
        <Route path="/faq" element={<FAQ />}></Route>
        <Route path="/payment" element={<PaymentPage />}></Route>
        <Route path="/paramlogin" element={<ParamYogaLogin />}></Route>
      </Routes>
      {popupState && <ComingSoonPopup />}
      {successsPopupState && <ApplicationSubmissionPopup />}
      {/* {addProgramPopupState && <AddProgramPopup />} */}
      {loginPopupState && <LoginPopup />}
      {/* {teacherLoginPopupState && <TeacherLoginPopup />} */}
      {signupPopupState && <SignupPopup />}
      {/* {editApplicationPopupState && <EditApplicationFormPopup />} */}
      {contactPopupState && <ContactUsPopup />}
      {welcomePopup && <WelcomePopup />}
      {buyPopup && <BuyPopup />}
      {sessionNotStarted && <SessionNotStartedPopup />}
    </Router>
  );
};

export default App;
