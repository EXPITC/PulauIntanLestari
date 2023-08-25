import { Link } from "@chakra-ui/next-js";
import {
  Img,
  Stack,
  StackProps,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export type products = {
  link: string;
  imgUrl: string;
  name: string;
}[];

interface props extends StackProps {
  products: products;
  sectionTitle: string;
}

const Products = ({ sectionTitle, products, ...props }: props) => (
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
      {products.map((p, i) => (
        <GridItem key={i} w="100%">
          <Link href={p.link}>
            <Img src={p.imgUrl} alt={p.name} rounded="md" overflow="hidden" />
          </Link>
        </GridItem>
      ))}
    </Grid>
  </Stack>
);

export default Products;
