"use client";

import OurJourney from "@/components/ourJourney";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

import { BsFillCaretRightFill } from "react-icons/bs";

const AboutUs = () => {
  return (
    <Stack w="full" spacing="8">
      <Heading as="h1" color="signatureGrey">
        About Us
      </Heading>
      <Box>
        <Heading as="h4" color="signatureGrey" fontSize="x-large" pb="5">
          Vision
        </Heading>
        <Text fontSize="md" fontWeight="medium">
          To be your first choice for textile.
        </Text>
      </Box>
      <Box>
        <Heading as="h4" color="signatureGrey" fontSize="x-large" pb="3">
          Mission
        </Heading>
        <List spacing={3} fontWeight="medium">
          <ListItem role="group">
            <ListIcon
              as={BsFillCaretRightFill}
              color="green.500"
              display="inline"
              mr="1"
              _groupHover={{
                mr: 3,
                transform: "none",
              }}
            />
            Provide quality service to customers in all business cycles,
          </ListItem>
          <ListItem role="group">
            <ListIcon
              as={BsFillCaretRightFill}
              color="green.500"
              display="inline"
              mr="1"
              _groupHover={{
                mr: 3,
                transform: "none",
              }}
            />
            Produce quality and innovative product that are oriented to customer
            satisfaction,
          </ListItem>
          <ListItem role="group">
            <ListIcon
              as={BsFillCaretRightFill}
              color="green.500"
              display="inline"
              mr="1"
              _groupHover={{
                mr: 3,
                transform: "none",
              }}
            />
            Improve professional human resources and advanced technology
            systems,
          </ListItem>
          <ListItem role="group" display="flex" alignItems="center">
            <ListIcon
              as={BsFillCaretRightFill}
              color="green.500"
              display="inline"
              mr="1"
              _groupHover={{
                mr: 3,
                transform: "none",
              }}
            />
            Continuous improvement of the quality management system.
          </ListItem>
        </List>
      </Box>

      <Box mb="12">
        <Heading as="h4" color="signatureGrey" fontSize="x-large">
          Our Journey
        </Heading>
        <OurJourney />
      </Box>

      <Stack spacing="5">
        <Heading as="h4" color="signatureGrey" fontSize="x-large">
          Our Showroom
        </Heading>
        <Text fontSize="md" fontWeight="medium">
          Let’s come to our showroom?
          <br />
          Well-organised and comfortable places with a lot of fabric collection,
          ideas will come in the right place.
        </Text>
        <Link display="flex" href="/contact-us">
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
            Visit Now
          </Button>
        </Link>
        <Flex>
          <Image
            w="50%"
            src="https://pulauintanlestari.com/wp-content/uploads/2021/03/ABOUT-US-SHOWROOM.jpg"
            alt="show room"
          />
          <Image
            w="50%"
            src="https://pulauintanlestari.com/wp-content/uploads/2021/03/ABOUT-US-SHOWROOM2.jpg"
            alt="show room"
          />
        </Flex>
      </Stack>
    </Stack>
  );
};

export default AboutUs;
