import { Box, Tooltip } from "@chakra-ui/react";
import { FaBoltLightning } from "react-icons/fa6";

import React from "react";
import { Link } from "react-router-dom";
import { AiFillLayout } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { MdEvent } from "react-icons/md";

const SubHeader = () => {
  return (
    <Box
      bg={"#fff"}
      w={"100%"}
      h={"60px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      px={"20px"}
      borderBottom={"2px solid #f5f5f5"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"20px"}
        w={"60%"}
      >
        <ul className="flex w-full justify-between items-center ">
          <li className="text-2xl px-5 text-[#26ade2] ">
            <Tooltip label="New Feed" hasArrow arrowSize={10} bg={"#26ade2"}>
              <Link to="/">
                <FaBoltLightning className="my-2" />
              </Link>
            </Tooltip>
          </li>
          <li className="text-2xl px-5 text-[#26ade2] ">
            <Tooltip label="Reels" hasArrow arrowSize={10} bg={"#26ade2"}>
              <Link to="/">
                <FaYoutube />
              </Link>
            </Tooltip>
          </li>
          <li className="text-2xl px-5 text-[#26ade2] ">
            <Tooltip label="News" hasArrow arrowSize={10} bg={"#26ade2"}>
              <Link to="/">
                <AiFillLayout />
              </Link>
            </Tooltip>
          </li>
          <li className="text-2xl px-5 text-[#26ade2] ">
            <Tooltip label="Groups" hasArrow arrowSize={10} bg={"#26ade2"}>
              <Link to="/">
                <MdGroups />
              </Link>
            </Tooltip>
          </li>
          <li className="text-2xl px-5 text-[#26ade2] ">
            <Tooltip label="Events" hasArrow arrowSize={10} bg={"#26ade2"}>
              <Link to="/">
                <MdEvent />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default SubHeader;
