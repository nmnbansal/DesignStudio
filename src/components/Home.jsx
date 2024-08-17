import { Box, Card, Flex, Grid, Img, Text } from "@chakra-ui/react";
import Img1 from "../assets/img1.png";
import More from "../assets/more.png";
import Blue from "../assets/blue.png";
import Videos from "../assets/Videos.png";
import { useContext, useEffect, useState } from "react";
import { FeedsContext } from "../context/ContextProvider";

const Home = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setFeeds } = useContext(FeedsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
              "X-Tenant-Key": "TYKE070323",
            },
            body: JSON.stringify({ Content_Type: 2 }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPlaylists(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const playListFeeds = async () => {
    try {
      const response = await fetch(
        "https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr",
            "X-Tenant-Key": "TYKE070323",
          },
          body: JSON.stringify({
            Index: 1,
            ContentType: [2],
            IsTagged: false,
            URL: "",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.data.Feeds);
      setFeeds(data.data.Feeds);
    } catch (error) {
      console.error("Error fetching playlist feeds:", error);
    }
  };

  const handleClick = () => {
    playListFeeds();
  };

  return (
    <Box h={"581px"} w={"798px"} bg={"#27272F"} borderRadius={"16px"}>
      <Grid p={"15px"} templateColumns="repeat(3, 1fr)" gap={"20.57px"}>
        {playlists.map((el) => (
          <Card
            h={"163.89px"}
            w={"241.3px"}
            bgImg={Img1}
            borderRadius={"25px"}
            bgPos={"center"}
            key={el.PlayListId}
            onClick={() => handleClick()}
          >
            <Flex justifyContent={"end"}>
              <Img
                src={More}
                alt="more"
                w={"34.95px"}
                h={"35px"}
                p={"10px"}
                bg={"#35373B"}
                borderRadius={"0 25px 0 15px"}
              />
            </Flex>
            <Flex
              w={"241.53px"}
              h={"39px"}
              alignItems={"center"}
              gap={"5px"}
              mt={"61px"}
            >
              <Img src={Blue} alt="" blueDesign />
              <Text fontSize={"14px"} fontWeight={"500"} color={"#FFFFFF"}>
                {el.Name}
              </Text>
            </Flex>
            <Flex
              w={"241.53px"}
              h={"29px"}
              bg={"#1C1C23"}
              borderRadius={"0 0 25px 25px"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"13px"}
            >
              <Img src={Videos} alt="" videos />
              <Text
                color={"#FFFFFFCC"}
                fontSize={"14px"}
                fontWeight={"500"}
              >{`${el.Post_Ids.length} Videos`}</Text>
            </Flex>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
