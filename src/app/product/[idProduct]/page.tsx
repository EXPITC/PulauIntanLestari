"use client";

import RandomProduct from "@/components/RandomProduct";
import Gallery from "@/components/gallery";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";

const usedProductImg = [
  "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-PRODUCT-12.png",
  "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-PRODUCT-09.png",
  "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-PRODUCT-07.png",
  "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-PRODUCT-05-150x150.png",
  "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-PRODUCT13-13.png",
];

const DetailProduct = () => {
  const nameProduct = usePathname().replace("/product/", "").replace("-", " ");

  return (
    <Stack maxW="1440px" w="full" spacing="16">
      <Flex
        justify="space-evenly"
        gap="4"
        flexDirection={{
          base: "column",
          lg: "row",
        }}
      >
        <Stack
          w={{
            base: "full",
            lg: "57%",
          }}
          position="relative"
          alignItems={{
            base: "end",
            lg: "start",
          }}
        >
          <Box
            h={{
              base: "250px",
              md: "485px",
            }}
            w="full"
          >
            <Gallery />
          </Box>
          <Link href="/products" w="fit-content">
            <Button
              leftIcon={<ArrowBackIcon />}
              w="fit-content"
              p="2"
              bg="transparent"
              border="1px solid"
              borderColor="signatureRed"
              _hover={{
                borderColor: "white",
                bg: "black",
                color: "signatureRed",
              }}
            >
              #explore more
            </Button>
          </Link>
        </Stack>

        <Stack
          w={{
            base: "100%",
            lg: "43%",
          }}
          gap="3"
        >
          <Box>
            <Text fontWeight="medium" color="signatureDarkBlue" mb="2">
              Preview
            </Text>
            <Heading as="h2" color="signatureRed" fontSize="x-large">
              2XB.0286
            </Heading>
            <Text
              fontWeight="bold"
              fontSize="lg"
              color="signatureDarkBlue"
              className="capitalize"
            >
              {nameProduct}
            </Text>
          </Box>

          <Stack spacing="3">
            <Flex
              align="center"
              justify="space-evenly"
              w="full"
              py="4"
              rounded="lg"
              bg="whitesmoke"
            >
              <Box w="fit-content" textAlign="center">
                <Text color="signatureDarkBlue">Width</Text>
                <Text color="signatureRed" fontWeight="bold" fontSize="x-large">
                  74
                </Text>
                <Text color="signatureDarkBlue" fontWeight="bold" fontSize="lg">
                  Inch
                </Text>
              </Box>
              <Box w="fit-content" textAlign="center">
                <Text color="signatureDarkBlue">Weight</Text>
                <span>
                  <Text
                    color="signatureDarkBlue"
                    mr="1"
                    display="inline"
                    fontWeight="bold"
                  >
                    ±
                  </Text>
                  <Text
                    color="signatureRed"
                    fontWeight="bold"
                    display="inline"
                    fontSize="x-large"
                  >
                    245
                  </Text>
                </span>
                <Text color="signatureDarkBlue" fontWeight="bold" fontSize="lg">
                  Gsm
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text color="signatureDarkBlue" fontWeight="medium">
                Fabric Type
              </Text>
              <Text
                color="signatureDarkBlue"
                fontWeight="bold"
                fontSize="large"
              >
                Interlock
              </Text>
            </Box>
          </Stack>

          <Box>
            <Text color="singatureDarkBlue" fontWeight="medium">
              Composition
            </Text>
            <Text color="signatureDarkBlue" fontWeight="bold" fontSize="large">
              33% Cotton, 67% Polyester
            </Text>
          </Box>

          <Box>
            <Text color="signatureDarkBlue" fontWeight="medium" mb="1">
              Commonly Used for :
            </Text>
            <Grid
              templateColumns="repeat(5, 1fr)"
              h="20"
              alignItems="center"
              justifyContent="center"
            >
              {usedProductImg.map((l, i) => (
                <GridItem key={i} h="inherit">
                  <Image
                    src={l}
                    alt="use by product"
                    h="full"
                    w="full"
                    objectFit="scale-down"
                  />
                </GridItem>
              ))}
            </Grid>
          </Box>

          <Link
            display="flex"
            href="https://pulauintanlestari.com/contact-us/?id=1"
            target="_blank"
          >
            <Button
              w="full"
              border="2px"
              color="white"
              bg="signatureRed"
              fontSize="medium"
              p="7"
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
                className="animate-ping absolute inline-flex h-[60%] w-[16%] hover:w-[20%] rounded-md opacity-75"
              />
              Click Here to Order
            </Button>
          </Link>
        </Stack>
      </Flex>

      <RandomProduct variant2 />
    </Stack>
  );
};

export default DetailProduct;
