"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export interface articleCard {
  imgUrl: string;
  title: string;
  summary: string;
  link: string;
}

const ArticleCard = ({ imgUrl, title, summary, link }: articleCard) => (
  <Card
    maxW="sm"
    w="full"
    boxShadow="rgba(0, 0, 0, 0.2) 0px 1px 3px, rgba(0, 0, 0, 0.3) 0px 1px 2px"
  >
    <CardBody>
      <Image src={imgUrl} alt={title} borderRadius="lg" w="full" />
      <Stack mt="6" spacing="3">
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton h="100px">
              <Box as="span" flex="1" textAlign="left">
                <Heading
                  as="h2"
                  size={{
                    base: "2xs",
                    lg: "md",
                  }}
                  textAlign="left"
                >
                  {title}
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} textAlign="left">
              {summary}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </CardBody>
    <CardFooter
      pt="0"
      justifyContent={{
        base: "right",
        md: "initial",
      }}
    >
      <Link href={"/discover" + link}>
        <Button
          variant="solid"
          bg="signatureRed"
          border="2px solid transparent"
          color="white"
          _hover={{
            bg: "transparent",
            color: "signatureRed",
            borderColor: "signatureRed",
          }}
        >
          #Read more
        </Button>
      </Link>
    </CardFooter>
  </Card>
);

export default ArticleCard;
