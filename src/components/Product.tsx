import { Link } from "@chakra-ui/next-js";
import {
  Img,
  Stack,
  StackProps,
  Heading,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";

export type products = {
  link: string;
  imgUrl: string;
  name: string;
}[];

interface props extends StackProps {
  products: products;
  sectionTitle: string;
  page?: boolean;
}

const Products = ({
  sectionTitle,
  products,
  page = false,
  ...props
}: props) => (
  <Stack w="full" direction="column" spacing={{ base: 7, md: 4 }} {...props}>
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
        lg: page ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
      }}
      gap={6}
      p={{ base: "1", lg: "6" }}
    >
      {products.map((p, i) => (
        <GridItem key={i} w="100%">
          <Link href={"/product" + p.link}>
            <Img src={p.imgUrl} alt={p.name} rounded="md" overflow="hidden" />
            <Text
              _hover={{ color: "signatureRed" }}
              textAlign="center"
              mt="2"
              className="capitalize"
            >
              {p.name}
            </Text>
          </Link>
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Products;
