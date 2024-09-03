import React, { useEffect, useState } from "react";
import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Icon,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { MdMoreVert } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../Redux/reducer/Social/social.slice";
import { Skeleton, SkeletonCircle } from "@chakra-ui/react";

const FeedCard = () => {
  debugger;
  const { post, isLoading } = useSelector((state) => state.FeedSlice);
  console.log(post.data);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [feed, setFeed] = useState("FEED");

  const getPostData = () => {
    const feedType = {
      page: page,
      feed: feed,
    };
    debugger;
    dispatch(getPost(feedType));
  };
  useEffect(() => {
    getPostData();
  }, [dispatch]); 

  return (
    <>
      <>
        {post?.data?.map((item) => {
          return (
            <Box mt={10} key={item?._id}> 
              <Card bg={"#fafafa "} borderRadius={15}>
                <CardHeader
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={2}>
                    <SkeletonCircle isLoaded={!isLoading} size={10}>
                      <Image
                        src="/assets/user.jpg"
                        rounded={"full"}
                        h={"40px"}
                      />
                    </SkeletonCircle>
                    <Box>
                      <Skeleton isLoaded={!isLoading} h={3}>
                        <Heading size="sm">
                          {item?.authorDetails.firstName}
                          {item?.authorDetails.lastName}
                        </Heading>
                      </Skeleton>
                      <Skeleton isLoaded={!isLoading} mt={2} h={3}>
                        <Text> {item?.createdAt}</Text>
                      </Skeleton>
                    </Box>
                  </Box>
                  <Box>
                    <Menu>
                      <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<MdMoreVert />}
                        variant="ghost "
                        colorScheme="teal"
                        size="xl"
                      />
                      <MenuList>
                        <MenuItem command="⌘T">New Tab</MenuItem>
                        <MenuItem command="⌘N">New Window</MenuItem>
                        <MenuItem command="⌘⇧N">Open Closed Tab</MenuItem>
                        <MenuItem command="⌘O">Open File...</MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>
                </CardHeader>
                <CardBody padding={0}>
                  <Skeleton isLoaded={!isLoading}>
                    <AspectRatio>
                      <Image
                        src="https://scontent.fhyd10-1.fna.fbcdn.net/v/t39.30808-6/456766981_1064468309018105_974719356690127765_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YQCk21kEyVYQ7kNvgEbBlFj&_nc_ht=scontent.fhyd10-1.fna&oh=00_AYAKUgbanq7lLCD2tF1J3y6Jqb05ACgCdbeSH7puO36YCw&oe=66DB4EF9"
                        objectFit={"cover"}
                      />
                    </AspectRatio>
                  </Skeleton>
                </CardBody>
                <CardFooter
                  Display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} justifyContent={"space-between"} py={2}>
                    <Box>
                      <Skeleton isLoaded={!isLoading} h={3}>
                        <Text> 100 Likes</Text>
                      </Skeleton>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={2}>
                      <Skeleton isLoaded={!isLoading} h={3}>
                        <Text>29 Comments</Text>
                      </Skeleton>
                      <Skeleton isLoaded={!isLoading} h={3}>
                        <Text>100 Shares </Text>
                      </Skeleton>
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    py={2}
                    alignItems={"center"}
                  >
                    <Skeleton isLoaded={!isLoading} h={3}>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Icon as={AiFillLike} boxSize={4} />
                        <Text>Like</Text>
                      </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading} h={3}>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Icon as={FaComment} boxSize={4} />
                        <Text>Comments</Text>
                      </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading} h={3}>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Icon as={BiRepost} boxSize={4} />
                        <Text>Repost</Text>
                      </Box>
                    </Skeleton>
                    <Skeleton isLoaded={!isLoading} h={3}>
                      <Box display={"flex"} alignItems={"center"} gap={2}>
                        <Icon as={FaShare} boxSize={4} />
                        <Text>Share</Text>
                      </Box>
                    </Skeleton>
                  </Box>
                </CardFooter>
              </Card>
            </Box>
          );
        })}
      </>
    </>
  );
};

export default FeedCard;
