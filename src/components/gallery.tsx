"use client";

import listProduct from "@/libs/dataRaw/products";
import { Box, Flex, Grid, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ChakraImg = chakra(motion.img, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

function ProductImage({
  id,
  onExpand,
}: {
  id: number;
  onExpand: (id: number) => void;
}) {
  return (
    <ChakraImg
      src={listProduct[id].imgUrl}
      w={{
        base: "100px",
        md: "200px",
      }}
      objectFit="cover"
      alt=""
      onClick={() => onExpand(id)}
      rounded="md"
      layoutId={`product-${id}`}
    />
  );
}

const Gallery = () => {
  const path = usePathname().replace("/product", "");

  const [productIds, setProductIds] = useState([1, 2, 3]);
  const [primaryProduct, setPrimaryProduct] = useState(0);

  useEffect(() => {
    if (!path) return;
    console.log(path);
    listProduct.forEach((p, i) => {
      if (p.link === path) return setPrimaryProduct(i);
    });
  }, [path]);

  function setAsPrimary(id: number) {
    const currentProductId = primaryProduct;
    const newProductIds = [
      ...productIds.filter((x) => x !== id),
      currentProductId,
    ];

    setPrimaryProduct(id);
    setProductIds(newProductIds);
  }

  return (
    <Flex
      margin="0 auto"
      h="full"
      w="full"
      maxW="1280px"
      align="center"
      gap="2"
    >
      <Box h="full" w="full" rounded="lg" position="relative">
        <AnimatePresence>
          <ChakraImg
            key={primaryProduct}
            h="full"
            w="full"
            objectFit="cover"
            rounded="lg"
            position="absolute"
            top="0"
            left="0"
            src={listProduct[primaryProduct].imgUrl}
            alt=""
            layoutId={`product-${primaryProduct}`}
          />
        </AnimatePresence>
      </Box>
      <Grid
        as="aside"
        h="full"
        zIndex="0"
        templateColumns="repeat(1, 1fr)"
        alignItems="center"
        gap="1"
      >
        <AnimatePresence>
          {productIds.map((id) => (
            <ProductImage id={id} key={id} onExpand={setAsPrimary} />
          ))}
        </AnimatePresence>
      </Grid>
    </Flex>
  );
};

export default Gallery;
