import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  InputGroup,
  InputLeftElement,
  Icon,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaPenAlt } from "react-icons/fa";

const CreatePost = () => {
  return (
    <Box mt={5}>
      <Card bg={"#fafafa "} borderRadius={15}>
        <CardHeader>
          <Heading size="md">Create New Post</Heading>
        </CardHeader>
        <CardBody>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={FaPenAlt} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Create New Post"
              borderRadius={15}
              py={5}
            />
          </InputGroup>
          <Box mt={5} display={"flex"} gap={5} alignItems={"center"}>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Image src="/assets/pic.png" h={"18px"} />
              <Text>Photo / Video</Text>
            </Box>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Image src="/assets/activity.png" h={"18px"} />
              <Text>Feeling/Activity</Text>
            </Box>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Image src="/assets/live-stream.png" h={"18px"} />
              <Text>Live Stream</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CreatePost;
