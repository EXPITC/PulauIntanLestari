"use client";

import { AspectRatio, Box } from "@chakra-ui/react";

const Map = () => (
  <Box
    w="full"
    h="full"
    maxW="620px"
    position="relative"
    rounded="lg"
    overflow="hidden"
    boxShadow="rgba(0, 0, 0, 0.20) 0px 1px 4px"
  >
    <AspectRatio ratio={16 / 9} h="full">
      <iframe src="https://maps.google.com/maps?q=PT%20Pulau%20Intan%20Lestari%2C%20Karawang&t=m&z=12&output=embed&iwloc=near" />
    </AspectRatio>
  </Box>
);

export default Map;
