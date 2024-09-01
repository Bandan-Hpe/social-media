import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Shared/Header";
import SubHeader from "../../components/Shared/SubHeader";
import { Box } from "@chakra-ui/react";
import CreatePost from "../../components/Social/CreatePost";
import FeedCard from "../../components/Social/FeedCard";

const Home = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    navigate("/");
  };

  return (
    <div>
      <Header />
      <SubHeader />
      <Box display={"flex"}>
        <Box width="25%">Home</Box>
        <Box width="50% ">
          <CreatePost />
          <FeedCard/>
        </Box>
        <Box width="25%"></Box>
      </Box>

      <button onClick={logout}>back</button>
    </div>
  );
};

export default Home;
