// PopupContext.js

import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupState, setPopupState] = useState(false);
  const [successsPopupState, setSuccesssPopupState] = useState(false);
  const [addProgramPopupState, setAddProgramPopupstate] = useState(false);
  const [loginPopupState, setLoginPopupState] = useState(false);
  const [teacherLoginPopupState, setTeacherLoginPopupState] = useState(false);
  const [signupPopupState, setSignupPopupState] = useState(false);
  const [editApplicationPopupState, setEditApplicationPopupState] = useState(false);
  const [contactPopupState, setContactPopupState] = useState(false);
  const [welcomePopup, setWelcomePopup] = useState(false);
  const [buyPopup, setBuyPopup] = useState(false);
  const [sessionNotStarted, setSessionNotStarted] = useState(false);
  const [currentProgramName, setCurrentProgramName] = useState('');

  const togglePopup = () => {
    setPopupState(prev => !prev);
  };

  const toggleSuccessPopup = () => {
    setSuccesssPopupState(prev => !prev);
  };

  const toggleAddProgramPopup = () => {
    setAddProgramPopupstate(prev => !prev);
  };

  const toggleLoginPopup = () => {
    setLoginPopupState(prev => !prev);
  };
  const toggleTeacherLoginPopup = () => {
    setTeacherLoginPopupState(prev => !prev);
  };

  const toggleSignupPopup = () => {
    setSignupPopupState(prev => !prev);
  };

  const toggleEditApplicationFormPopup = () => {
    setEditApplicationPopupState(prev => !prev);
  }

  const toggleContactPopupState = () => {
    setContactPopupState(prev => !prev);
  }

  const toggleWelcomePopup = () => {
    setWelcomePopup(prev => !prev);
  }
  const toggleBuyPopup = () => {
    setBuyPopup(prev => !prev);
  }
  const toggleSessionNotStarted = () => {
    setSessionNotStarted(prev => !prev);
  }

  return (
    <PopupContext.Provider value={{
      popupState, togglePopup, toggleSuccessPopup, successsPopupState, setSuccesssPopupState, addProgramPopupState, toggleAddProgramPopup, loginPopupState, toggleLoginPopup, signupPopupState, toggleSignupPopup, editApplicationPopupState, toggleEditApplicationFormPopup,
      contactPopupState, setContactPopupState, toggleContactPopupState, teacherLoginPopupState, toggleTeacherLoginPopup, welcomePopup, toggleWelcomePopup, toggleBuyPopup, buyPopup, sessionNotStarted, toggleSessionNotStarted, currentProgramName, setCurrentProgramName
    }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
