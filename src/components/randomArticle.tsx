/* eslint-disable react/jsx-no-undef */
"use client";

import { articles } from "@/app/discover/page";
import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import ArticleCard from "./articleCard";

const RandomArticle = () => {
  const randomArticles = articles.slice(
    1,
    useBreakpointValue({ base: 3, md: 5, lg: 4 })
  );

  return (
    <Stack>
      <Heading as="h2" color="signatureDarkBlue" size="lg">
        More in Discover
      </Heading>
      <Grid
        w="full"
        py="4"
        gap="2"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {randomArticles.map((a, i) => (
          <GridItem key={i}>
            <Flex align="center" justify="center" py="1">
              <ArticleCard {...a} />
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};
export default RandomArticle;
