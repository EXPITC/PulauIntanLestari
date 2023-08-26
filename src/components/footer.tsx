"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Why Pulau Intan Lestari",
    link: "https://www.youtube.com/watch?v=q1Cv7_UlJCM",
  },

  {
    name: "Products Catalog",
    link: "/products-catalog",
  },
  {
    name: "Discover",
    link: "/discover",
  },
  {
    name: "Career",
    link: "/career",
  },
];

const Footer = () => {
  const pathname = usePathname();
  const color = useColorModeValue("signatureBlack", "white");

  return (
    <Flex
      as="footer"
      bg="whitesmoke"
      h="fit-content"
      flexDir="column"
      align="center"
      justify="center"
      mt="5"
      px={{
        base: "1",
        md: "7",
      }}
      pt="9"
      pb="5"
      gap="5"
      bottom="0"
    >
      <Flex
        justify="space-between"
        w="80%"
        flexDir={{ base: "column", md: "row" }}
        gap="4"
      >
        <Link href="/#">
          <Img
            src="https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/LOGO-WEBSITE-04.png"
            alt="brand"
            w="sm"
          />
        </Link>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(2, 1fr)",
          }}
          gap="9"
          rowGap={{
            base: "4",
            md: "0",
            lg: "0",
          }}
          h={{
            base: "fit-content",
            md: "28",
            lg: "20",
          }}
          w={{
            base: "fit-content",
            md: "80",
            lg: "fit-content",
          }}
        >
          {links.map((l, i) => (
            <GridItem key={i} w="fit-content" whiteSpace="nowrap" h="5">
              <Link
                href={l.link}
                color={pathname === l.link ? "signatureRed" : color}
                target={i === 0 ? "_blank" : "_self"}
                fontSize={{ base: "smaller", lg: "initial" }}
              >
                {l.name}
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Box w="90%">
        <Divider orientation="horizontal" border="1px" color="grey" />
      </Box>
      <Flex
        w="80%"
        justify="space-between"
        flexDir={{ base: "column", md: "row" }}
      >
        <Text
          as="p"
          fontSize={{
            base: "x-small",
            md: "small",
          }}
        >
          Indonesia, Pulau Intan Lestari 2021 All Right Reserved
        </Text>
        <Text
          as="p"
          color="gray.500"
          fontSize={{
            base: "xx-small",
            md: "small",
          }}
        >
          expitc/ 2023 Aug 25/ 4djust
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
