import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../pages/SocialPages/Home";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
