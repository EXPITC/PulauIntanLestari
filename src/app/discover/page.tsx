"use client";

import ArticleCard from "@/components/articleCard";
import articles from "@/libs/dataRaw/articles";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

const Discover = () => {
  return (
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
      {articles.map((a, i) => (
        <GridItem key={i}>
          <Flex align="center" justify="center" py="1">
            <ArticleCard {...a} />
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Discover;
