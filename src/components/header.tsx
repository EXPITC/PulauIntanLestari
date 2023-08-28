"use client";

import {
  Box,
  chakra,
  shouldForwardProp,
  useBreakpointValue,
} from "@chakra-ui/react";
import { NavBarButton } from "./drawerNav";
import {
  isValidMotionProp,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const ChakraImage = chakra(motion.img, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraFlex = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = () => {
  const { scrollY } = useScroll();
  const finalImgSize = useBreakpointValue({ base: 120, md: 160, lg: 210 });
  const firstImgSize = useBreakpointValue({ base: 100, md: 120, lg: 160 });

  const imageSize = useTransform(
    scrollY,
    [0, 40],
    [firstImgSize, finalImgSize]
  );

  const boxShadowY = useTransform(scrollY, [0, 40], [-10, 1]);
  const boxShadow = useTransform(
    boxShadowY,
    (latest) => `0px ${latest}px 5px 0px #6D6D6D`
  );

  return (
    <>
      <ChakraFlex
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="white"
        position="fixed"
        zIndex="1"
        w="full"
        h={{ base: "20", md: "28", lg: "32" }}
        style={{
          boxShadow,
        }}
      >
        <NavBarButton />
        <ChakraImage
          src="https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/cropped-LOGO-PIL-02.png"
          alt="brand"
          style={{ width: imageSize }}
        />
      </ChakraFlex>
      <Box h={{ base: "20", md: "28", lg: "32" }} />
    </>
  );
};

export default Header;
