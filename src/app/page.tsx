"use client";

import Products, { products } from "@/components/Product";
import Catalouges, { catalouge } from "@/components/catalouge";
import YTEmbed from "@/components/ytEmbed";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";

const promo = [
  "Fully Customized from Fiber to Fashion",
  "100,000+ Fabric to Choose",
  "Satisfaction Guarantee",
];

const ourProducts: products = [
  {
    link: "/horizon-lacoste",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_3A-1.jpg",
    name: "horizon-lacoste",
  },
  {
    link: "/tange-red-jersey",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_1A.jpg",
    name: "tange-red-jersey",
  },
  {
    link: "/single-maze",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_2A.jpg",
    name: "single-maze",
  },
  {
    link: "/peachy-interlock",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/PRODUCT_5A.jpg",
    name: "peachy-interlock",
  },
];

const catalouges: catalouge = [
  {
    link: "https://www.tokopedia.com/pulauintanlestari/pocket-catalogue-sports-1-0?whid=0",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/POCKET-CATALOGUE_1.jpg",
    name: "Pocket Catalogue",
    price: 25000,
    type: "Sports 1.0",
  },
  {
    link: "https://www.tokopedia.com/pulauintanlestari/complete-catalogue?whid=0",
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/07/COMPLETE-CATALOGUE_1.jpg",
    name: "Complete Catalogue",
    price: 500000,
    type: "Series 1.0",
  },
];

export default function Home() {
  return (
    <>
      {/* <Flex */}
      {/*   minH="full" */}
      {/*   flexDir="column" */}
      {/*   justify="space-between" */}
      {/*   mt={{ base: 20, lg: 20 }} */}
      {/*   gap={{ base: 20, lg: 28 }} */}
      {/*   align="center" */}
      {/*   px={{ base: "5", md: "10" }} */}
      {/* > */}
      <Flex
        w="full"
        flexDir={{ base: "column", md: "column", lg: "row" }}
        align="center"
        justify="center"
        gap="3"
        mt={{ base: 20, lg: 20 }}
        pt="1"
      >
        <Img
          src="https://pulauintanlestari.com/wp-content/uploads/2021/03/BANNER_1REV.png"
          alt="product"
          w={{ base: "md", md: "480px" }}
        />
        <Stack
          spacing="5"
          justifyContent={{ base: "center", lg: "normal" }}
          alignItems={{ base: "center", lg: "normal" }}
        >
          <Heading
            as="h1"
            color="gray.600"
            fontSize={{ base: "xx-large", lg: "xxx-large" }}
            fontWeight="bold"
            lineHeight={{ base: "8", lg: "normal" }}
          >
            One Stop Solution
            <br />
            for Fashion Business
          </Heading>
          <Box>
            {promo.map((text, i) => (
              <Text
                as="p"
                key={i}
                fontWeight="medium"
                fontSize={{ base: "md", lg: "large" }}
              >
                <Icon
                  as={GiCheckMark}
                  color="green.500"
                  display="inline"
                  mr="3"
                />
                {text}
              </Text>
            ))}
          </Box>
          <Link
            display="flex"
            href="https://pulauintanlestari.com/contact-us/?id=1"
            target="_blank"
          >
            <Button
              rightIcon={<ArrowForwardIcon />}
              w="40"
              border="1px"
              color="white"
              bg="signatureRed"
              fontSize="medium"
              _hover={{
                fontSize: "large",
                bg: "none",
                border: "2px solid",
                borderColor: "signatureRed",
                color: "signatureRed",
              }}
            >
              <Box
                as="span"
                bg="signatureRed"
                _hover={{
                  bg: "white",
                }}
                className="animate-ping absolute inline-flex h-[60%] w-[35%] hover:w-[45%] rounded-md opacity-75"
              />
              Start Now
            </Button>
          </Link>
        </Stack>
      </Flex>

      {/* Yt Section */}
      <Stack w="full" direction="column" spacing={{ base: 7, lg: 10 }}>
        <Heading
          as="h2"
          fontSize={{ base: "xl", lg: "xx-large" }}
          color="signatureDarkBlue"
          fontWeight="bold"
          letterSpacing="wide"
        >
          Why Pulau Intan Lestari
        </Heading>
        <Flex align="center" justify="center">
          <YTEmbed
            src="q1Cv7_UlJCM"
            h={{ base: "280px", md: "480px", lg: "720px" }}
            w={{ base: "full", md: "720px", lg: "1180px" }}
            rounded="2xl"
          />
        </Flex>
      </Stack>

      {/* Product section */}
      <Stack direction="column" spacing="10">
        <Products products={ourProducts} sectionTitle="Our Products" />

        <Catalouges catalouge={catalouges} sectionTitle={"Product Catalogue"} />
      </Stack>
      {/* </Flex> */}
    </>
  );
}
