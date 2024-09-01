import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

import { BiBell, BiHome, BiMessage, BiPlus } from "react-icons/bi";
import { AiFillAppstore } from "react-icons/ai";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box
      bg={"#f5f5f5"}
      w={"100%"}
      h={"60px"}
      display={"flex"}
      alignItems={"center"}
      px={"20px"}
    >
      <Flex justify={"space-between"} w={"100%"} alignItems={"center"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"15px"}
        >
          <Image src="/assets/logo.png" alt="logo" h={"30px"} />
          <Text fontWeight={"bold"} fontSize="xl">
            SOCIAL
          </Text>

          <Input placeholder="Search" w={"300px"} bg={"white"} />
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"20px"}>
          <Button
            variant="outline"
            gap={"10px"}
            bg={"white"}
            className="rounded-full"
          >
            <Image
              src="/assets/user.jpg"
              h={"30px"}
              w={"30px"}
              borderRadius={"50%"}
              alt="logo"
            />
            <Text>Bandan</Text>
          </Button>
          <ul className="flex gap-3">
            <li className="cursor-pointer bg-[#b5e3f66d] border-2 border-[#26ade2] p-2 rounded-full">
              <Link to="/login">
                <BiHome className="text-[#26ade2] text-xl" />
              </Link>
            </li>
            <li className="cursor-pointer bg-[#b5e3f66d] border-2 border-[#26ade2] p-2 rounded-full">
              <Link to="/login">
                <BiMessage className="text-[#26ade2] text-xl" />
              </Link>
            </li>
            <li className="cursor-pointer bg-[#b5e3f66d] border-2 border-[#26ade2] p-2 rounded-full">
              <Link to="/login">
                <BiBell className="text-[#26ade2] text-xl" />
              </Link>
            </li>
            <li className="cursor-pointer bg-[#b5e3f66d] border-2 border-[#26ade2] p-2 rounded-full">
              <Link to="/login">
                <BiPlus className="text-[#26ade2] text-xl" />
              </Link>
            </li>
            <li className="cursor-pointer bg-[#b5e3f66d] border-2 border-[#26ade2] p-2 rounded-full">
              <Link to="/login">
                <AiFillAppstore className="text-[#26ade2] text-xl" />
              </Link>
            </li>
          </ul>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
