import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

const PrivateRoutes = ({ children }) => {
  debugger;
  // const { isLoggedin } = useSelector((state) => state.loginSlice);
  // console.log(isLoggedin, "isAuth");
  const token = Cookies.get("token");
  const reshToken = Cookies.get("refreshToken");
  console.log(token, "isAuth trueeeee");

  if (!token || !reshToken) {
    debugger;
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
