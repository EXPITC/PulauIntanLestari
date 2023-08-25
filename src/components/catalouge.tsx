import { Link } from "@chakra-ui/next-js";
import {
  Img,
  Stack,
  StackProps,
  Heading,
  Grid,
  GridItem,
  Button,
  Text,
} from "@chakra-ui/react";

const idr = require("rupiah-format");

export type catalouge = {
  link: string;
  imgUrl: string;
  name: string;
  price: number;
  type: string;
}[];

interface props extends StackProps {
  catalouge: catalouge;
  sectionTitle: string;
}

const Catalouges = ({ sectionTitle, catalouge, ...props }: props) => (
  <Stack w="full" direction="column" spacing={{ base: 7, lg: 10 }} {...props}>
    <Heading
      as="h2"
      fontSize={{ base: "xl", lg: "xx-large" }}
      color="signatureDarkBlue"
      fontWeight="bold"
      letterSpacing="wide"
    >
      {sectionTitle}
    </Heading>
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={6}
      p={{ base: "1", lg: "6" }}
    >
      {catalouge.map((c, i) => (
        <GridItem key={i} w="100%">
          <Img src={c.imgUrl} alt={c.name} rounded="md" overflow="hidden" />
          <Stack
            pt="2"
            direction="column"
            spacing="2"
            justifyContent="center"
            alignItems="center"
            w="full"
          >
            <Heading as="h4" fontSize="xl">
              {c.name}
            </Heading>
            <Text>{c.type}</Text>
            <Text fontWeight="bold">{idr.convert(c.price)}</Text>
            <Link href={c.link} w="55%" target="_blank">
              <Button
                w="100%"
                bg="signatureRed"
                color="white"
                _hover={{
                  bg: "none",
                  color: "signatureRed",
                  border: "1px solid",
                  borderColor: "signatureRed",
                }}
              >
                Buy Now
              </Button>
            </Link>
          </Stack>
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Catalouges;
