import {
  Center,
  Grid,
  Heading,
  SimpleGrid,
  Image,
  Flex,
  Spacer,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function News(props) {
  const [articles, setArticles] = useState();
  const [pageNo, setPageNo] = useState(1);
  const [currentNewItem, setCurrentNewItem] = useState(0);
  const [totalNewItem, setTotalNewItem] = useState(0);

  const fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.newsApiKeys}&page=${pageNo}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setTotalNewItem(parsedData.totalResults);
    setArticles(parsedData.articles);
    setCurrentNewItem(currentNewItem + props.pageSize);
  };
  const onNextData = async () => {
    console.log("Next");
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.newsApiKeys}&page=${pageNo + 1}&pageSize=${
      props.pageSize
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setCurrentNewItem(currentNewItem + props.pageSize);
    setPageNo(pageNo + 1);
  };

  const onPrevData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.newsApiKeys}&page=${pageNo - 1}&pageSize=${
      props.pageSize
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setCurrentNewItem(currentNewItem - props.pageSize);
    setPageNo(pageNo - 1);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {!articles && (
        <Center>
          <img src="src/images/loaderanimation.gif" />
        </Center>
      )}
      <Box m={4}>
        <SimpleGrid minChildWidth={350}>
          {articles &&
            articles.map((data) => {
              return (
                <NewsItem
                  key={data.url}
                  title={data.title}
                  urlToImage={
                    data.urlToImage
                      ? data.urlToImage
                      : "src/images/no_image.jpg"
                  }
                  description={
                    data.description ? data.description : "No Description"
                  }
                  newsUrl={data.url}
                />
              );
            })}
        </SimpleGrid>
      </Box>
      <Flex mx={8} my={4}>
        <Button
          colorScheme="purple"
          p={4}
          onClick={onPrevData}
          isDisabled={currentNewItem <= props.pageSize}
        >
          <ArrowBackIcon /> Prev
        </Button>
        <Spacer />
        <Button
          colorScheme="purple"
          p={4}
          onClick={onNextData}
          isDisabled={currentNewItem >= totalNewItem}
        >
          Next <ArrowForwardIcon />{" "}
        </Button>
      </Flex>
    </div>
  );
}
