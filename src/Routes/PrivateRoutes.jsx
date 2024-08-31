import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const PrivateRoutes = ({ children }) => {
  debugger;

  const token = Cookies.get("token");
  const reshToken = Cookies.get("refreshToken");

  if (token && reshToken) {
    debugger;
    if (!token || !reshToken) {
      debugger;
      return <Navigate to="/" />;
    } else {
      debugger;

      return children;
    }
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
