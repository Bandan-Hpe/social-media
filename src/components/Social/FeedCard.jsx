import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Image, 
  Text,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";

const FeedCard = () => {
  return (
    <Box mt={10}>
      <Card bg={"#fafafa "} borderRadius={15}>
        <CardHeader display={"flex"} justifyContent={"space-between"}>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <Image src="/assets/user.jpg" rounded={"full"} h={"40px"} />
            <Box>
              <Heading size="sm">John Doe</Heading>
              <Text>Published: 5h ago</Text>
            </Box>
          </Box>
          <Icon as={MdMoreVert} size={"lg"} />
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </Box>
  );
};

export default FeedCard;
