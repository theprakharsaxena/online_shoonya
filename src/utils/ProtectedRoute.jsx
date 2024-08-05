import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { usePopup } from '../context/PopupContext';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const { toggleLoginPopup } = usePopup();

  if (!isAuthenticated) {
    toggleLoginPopup(true);
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
