import { Fragment } from "react/jsx-runtime";
import "./App.css";
import Routers from "./Routes/Routes";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  useEffect(() => {
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");

    const isLoggedin = token || refreshToken;

    isLoggedin && <Navigate to="/home" />;
  }, [0]);

  return (
    <Fragment>
      <Routers />
    </Fragment>
  );
}

export default App;
