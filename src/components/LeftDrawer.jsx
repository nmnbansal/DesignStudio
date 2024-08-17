import { Box, Button, Flex, Img, Text, VStack } from "@chakra-ui/react";
import Logo from "../assets/blaash.png";
import Category from "../assets/category.png";
import Gallery from "../assets/gallery.png";
import MouseOn from "../assets/mouse.png";
import Calender from "../assets/calendar.png";
import Setting from "../assets/Setting.png";
import Stroke from "../assets/Stroke.png";
import StrokeUp from "../assets/Stroke2.png";

function LeftSidebar() {
  return (
    <>
      <Box
        width={"250px"}
        height={"719px"}
        bg={"#27272F"}
        borderRadius={"16px"}
      >
        <Box h={"30px"} w={"90px"} ml={"30px"} p={"20px 0 0 0"}>
          <Img src={Logo} alt="logo" />
        </Box>
        <Box mt={"88px"}>
          <VStack color={"#828293"}>
            <Flex
              gap={"13px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Img src={Category} h={"25px"} w={"25px"} ml={"30px"} />
              <Text fontSize={"14px"} color={"#828293"}>
                Revenue
              </Text>
            </Flex>
            <Flex
              gap={"45px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Flex gap={"13px"}>
                <Img src={Gallery} h={"25px"} w={"25px"} ml={"30px"} />
                <Text fontSize={"14px"} color={"#828293"}>
                  Shoppable Video
                </Text>
              </Flex>
              <Img src={Stroke} alt="downArrow" />
            </Flex>
            <Flex
              gap={"120px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Flex gap={"13px"}>
                <Img src={Gallery} h={"25px"} w={"25px"} ml={"30px"} />
                <Text fontSize={"14px"} color={"#828293"}>
                  Story
                </Text>
              </Flex>
              <Img src={Stroke} alt="downArrow" />
            </Flex>
            <Flex
              gap={"55px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Flex gap={"13px"}>
                <Img src={Gallery} h={"25px"} w={"25px"} ml={"30px"} />
                <Text fontSize={"14px"} color={"#828293"}>
                  Live Commerce
                </Text>
              </Flex>
              <Img src={Stroke} alt="downArrow" />
            </Flex>
            <Box
              bg={"#000000"}
              border={"1px solid #017EFA"}
              borderRadius={"10px 0 0 10px"}
              color={"#fff"}
            >
              <Flex
                gap={"48px"}
                h={"50px"}
                w={"250px"}
                justify={"start"}
                alignItems={"center"}
              >
                <Flex gap={"13px"}>
                  <Img src={Gallery} h={"25px"} w={"25px"} ml={"30px"} />
                  <Text fontSize={"14px"} color={"#828293"}>
                    Playlist Manager
                  </Text>
                </Flex>
                <Img src={StrokeUp} alt="upArrow" />
              </Flex>
              <Button
                color={"#fff"}
                bg={"#5A5A68"}
                mb={"15px"}
                ml={"30px"}
                p={"10px 6px"}
                width={"207px"}
                h={"35px"}
              >
                Product Playlist
              </Button>
            </Box>
            <Flex
              gap={"13px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Img src={MouseOn} h={"25px"} w={"25px"} ml={"30px"} />
              <Text fontSize={"14px"} color={"#828293"}>
                One Click Post
              </Text>
            </Flex>
            <Flex
              gap={"13px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Img src={Calender} h={"25px"} w={"25px"} ml={"30px"} />
              <Text fontSize={"14px"} color={"#828293"}>
                Calandar
              </Text>
            </Flex>
            <Flex
              gap={"13px"}
              h={"50px"}
              w={"250px"}
              justify={"start"}
              alignItems={"center"}
            >
              <Img src={Setting} h={"25px"} w={"25px"} ml={"30px"} />
              <Text fontSize={"14px"} color={"#828293"}>
                Settings
              </Text>
            </Flex>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default LeftSidebar;
