import {
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Img,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { FeedsContext } from "../context/ContextProvider";

const RightSidebar = () => {
  const [value, setValue] = useState("1");
  const { feeds } = useContext(FeedsContext);
  const [limitedFeeds, setLimitedFeeds] = useState([]);

  useEffect(() => {
    if (feeds && feeds.length > 0) {
      setLimitedFeeds(feeds.slice(0, 3));
    }
  }, [feeds]);

  return (
    <Box
      h={"581px"}
      w={"314px"}
      bg={"#27272F"}
      borderRadius={"16px"}
      p={"15px"}
    >
      <VStack gap={"20px"}>
        <Box w={"100%"}>
          <Text fontSize={"14px"} fontWeight={"500"} color={"#FFFFFFCC"}>
            Thumbnail Title
          </Text>
          <Text
            w={"100%"}
            color={"#FFFFFFCC"}
            fontSize={"14px"}
            fontWeight={"400"}
            border={"1px solid #484851"}
            p={"10px"}
            borderRadius={"10px"}
            display={"flex"}
            alignItems={"center"}
            mt={"10px"}
          >
            Get Sporty in Style
          </Text>
        </Box>

        <Box w={"100%"}>
          <Text fontSize={"14px"} fontWeight={"500"} color={"#FFFFFFCC"}>
            Video status
          </Text>
          <RadioGroup onChange={setValue} value={value} mt={"10px"}>
            <HStack gap={"20px"} color={"#FFFFFFCC"}>
              <Radio value="1">Active</Radio>
              <Radio value="2">Inactive</Radio>
            </HStack>
          </RadioGroup>
        </Box>

        <Box w={"100%"} h={"342px"}>
          <Text fontSize={"16px"} fontWeight={"500"} color={"#FFFFFFCC"}>
            Product List
          </Text>
          <VStack gap={"15px"} mt={"15px"}>
            {limitedFeeds.map((el, index) => (
              <Card
                height={"83px"}
                w={"100%"}
                border={"1px solid #FFFFFF1A"}
                borderRadius={"10px"}
                bg={"#0000001C"}
                key={index}
              >
                <Flex
                  justifyContent={"space-around"}
                  alignItems={"center"}
                  gap={"10px"}
                >
                  <Img
                    src={el.Thumbnail_URL}
                    alt={el.Thumbnail_Title}
                    h={"63px"}
                    w={"63px"}
                    borderRadius={"12px"}
                    m={"10px"}
                  />
                  <Box w={"166px"} h={"63px"} textAlign={"start"}>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      color={"#FFFFFFE5"}
                    >
                      {el.Thumbnail_Title}
                    </Text>
                    <Button
                      w={"52px"}
                      h={"19px"}
                      p={"3px 5px"}
                      borderRadius={"10px"}
                      bg={"#35373B"}
                      color={"#FFFFFFCC"}
                      fontSize={"11px"}
                      fontWeight={"500"}
                    >
                      {new Date(el.CreatedOn).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false,
                      })}
                    </Button>
                    <Text
                      fontSize={"14px"}
                      fontWeight={"400"}
                      color={"#C0C0D6"}
                    >
                      Product Attachment: 5
                    </Text>
                  </Box>
                </Flex>
              </Card>
            ))}
          </VStack>
        </Box>

        <Button
          leftIcon={<LuRefreshCw />}
          bg={"#017EFA"}
          w={"142px"}
          h={"38px"}
          p={"6px 10px"}
          color={"#fff"}
          fontWeight={"500"}
          borderRadius={"10px"}
          mt={"-15px"}
        >
          Update Playlist
        </Button>
      </VStack>
    </Box>
  );
};

export default RightSidebar;
