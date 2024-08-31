import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Shared/Header";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    navigate("/");
    debugger;
  };

  return (
    <div>
      <Header />

      <button onClick={logout}>back</button>
    </div>
  );
};

export default Home;
