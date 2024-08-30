import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BiUserCircle } from "react-icons/bi";
import { sendotp, verifyOtp } from "../../Redux/reducer/login.slice";
import { MdNumbers } from "react-icons/md";

const Login = () => {
  const { success, accessToken } = useSelector((state) => state.loginSlice);
  if (success) {
    console.log(accessToken);
  }

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  const sendOtp = (e) => {
    e.preventDefault();
    debugger;
    if (mobile?.length >= 10) {
      dispatch(sendotp(mobile));
    }
  };

  const login = (e) => {
    const data = {
      mobileNumber: mobile,
      otp: otp,
    };
    e.preventDefault();
    console.log(otp, "otp");
    dispatch(verifyOtp(data));

    setOtp("");
  };

  return (
    <Fragment>
      <section className="h-screen relative w-full bg-white flex items-center ">
        <div className="w-1/2  h-[100vh ]   relative flex justify-center items-center  ">
          <div className="animated-circ"></div>
          <div className=" absolute  ">
            <img src="/assets/login-1.png" alt="hy" className="w-[250px]" />
            <img
              src="/assets/login-1.png"
              alt="hy"
              className="w-[350px]  absolute  top-14 -right-20"
            />
          </div>
        </div>
        <div className="w-1/2  h-[100vh] relative p-14 flex flex-col items-start justify-center">
          <header>
            <img src="/assets/logo.png" alt="logo" />
            <h1 className="text-4xl font-bold mt-5">Welcome Back 👋</h1>
          </header>
          <form className="mt-10 w-full">
            <div className="flex gap-3 items-center mt-5 ">
              <span>
                <BiUserCircle size={30} />
              </span>
              <input
                type="text"
                className="w-full  border-b-2 outline-none border-neutral-700 mx-3 py-2 text-xl"
                placeholder="Enter Your Phone Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            {success && (
              <div className="flex gap-3 items-center mt-5 ">
                <span>
                  <MdNumbers size={30} />
                </span>
                <input
                  type="text"
                  className="w-full  border-b-2 outline-none border-neutral-700 mx-3 py-2 text-xl"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            )}
            <div className="flex gap-3 items-center my-10  justify-between">
              <p className="text-xl">
                if dont have an account ?{" "}
                <span className="text-[#1bace1]">Signup</span>
              </p>
              <div className="flex gap-5">
                <button
                  className="bg-[#1bace1] text-white py-2 px-5 rounded-md text-xl mx-5 cursor-pointer"
                  onClick={sendOtp}
                  disabled={mobile.trim().length <= 10}
                >
                  Send OTP
                </button>

                <button
                  className="bg-[#1bace1] text-white py-2 px-5 rounded-md text-xl cursor-pointer"
                  onClick={login}
                  disabled={!success}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export default Login;
