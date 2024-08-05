// Import the necessary dependencies
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location using the useLocation hook from react-router-dom
  const { pathname } = useLocation();

  // Scroll to the top of the page whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render anything, so you can return null
  return null;
};

export default ScrollToTop;