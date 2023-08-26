"use client";

import {
  Flex,
  Icon,
  chakra,
  shouldForwardProp,
  Text,
  Image,
  Divider,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiTwotoneCopyrightCircle } from "react-icons/ai";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { useState } from "react";

const StackChakra = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const margin = 40;
const maxCard = 320;

const journey = [
  {
    year: 1990,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-01-1-150x150.png",
    title: "Humble Beginning",
    content:
      "Our operation started with one knitting machine, self-assembled by our founder in a small warehouse located at Kapuk, North Jakarta",
  },
  {
    year: 1995,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-02-1-150x150.png",
    title: "Expand Operation",
    content:
      "To keep up with customer demand, we move to our New Facility at Cikampek, West Java.",
  },
  {
    year: 2000,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-03-1.png",
    title: "Forward Integration",
    content: "Established our in-house fabric processing facilities.",
  },
  {
    year: 2005,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-04-1.png",
    title: "Machine Modernisation",
    content:
      "Invested in Computerized Flat Knit Machine to keep up with complex fashion demand.",
  },
  {
    year: 2010,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-05-1-150x150.png",
    title: "Backward Integration",
    content: "Established our in-house yarn production facilities.",
  },
  {
    year: 2015,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-06-1.png",
    title: "Forward Integration",
    content:
      'Established our in-house Garment facilities. Providing "One Stop Solution" for all textile needs.',
  },
  {
    year: 2020,
    imgUrl:
      "https://pulauintanlestari.com/wp-content/uploads/2021/03/ICON-MILESTONE-1-07-1.png",
    title: "Expand Operation",
    content: "Expand our operation to Indramayu, West Java.",
  },
];

const Content = ({
  year,
  imgUrl,
  title,
  content,
}: {
  year: number;
  imgUrl: string;
  title: string;
  content: string;
}) => (
  <Flex
    align="center"
    justify="space-around"
    flexDir="column"
    w={`${maxCard + margin / 2}px`}
    minW={`${maxCard}px`}
    gap="2"
    px={`${margin / 2}px`}
  >
    <Text fontWeight="bold" fontSize="medium" h="5" m="0" p="0">
      {year}
    </Text>
    <Image src={imgUrl} alt={year.toString()} w="10" h="10" />
    <Icon as={AiTwotoneCopyrightCircle} />
    <Icon as={TriangleUpIcon} color="gray.300" boxSize="7" />
    <Text fontSize="medium" fontWeight="bold" color="signatureDarkBlue">
      {title}
    </Text>
    <Text textAlign="justify" fontWeight="medium" h="24">
      {content}
    </Text>
  </Flex>
);

const OurJourney = () => {
  // 3 item show first
  // 7 -3 = 4
  const itemShow = useBreakpointValue<6 | 4 | 5>({ base: 6, lg: 5, xl: 4 }); //this adjustment for button slide
  const longCard = (margin + maxCard) * itemShow!;

  const [x, setX] = useState(0);

  const goLeft = () => {
    if (x === 0) return; //prevent to go minus
    setX(x + (maxCard + margin));
  };

  // this how direction works
  // +++ = ---

  const goRight = () => {
    // go right will minus the x
    if (x === longCard * -1) return; //prevent offsite to right;
    setX(x - (maxCard + margin));
  };

  // for mouse drag
  // const motion = useMotionValue(0); // Track the movement

  // useEffect(() => {
  //   const updateX = () => {
  //     // setX(motion.get());
  //     // look line 82
  //     // if (motion.get() > x + (maxCard + margin) / 2) return goLeft();
  //     // if (motion.get() < x - (maxCard + margin) / 2) return goRight();
  //   };
  //
  //   const unsubcribe = motion.on("change", updateX);
  //
  //   return () => unsubcribe();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  // const moveDragValue = useTransform(
  //   motion,
  //   [-maxCard, maxCard],
  //   [x + (maxCard + margin), x - (maxCard + margin)]
  // );
  //
  // const input = [-200, 0, 200];
  // const output = [0, 1, 0];
  // const opacity = useTransform(motion, input, output);

  // useEffect(() => {
  //   console.log("hit");
  //   // if (moveDragValue.get() === 0) return;
  //   // if (moveDragValue.get() === longCard * -1) return;
  //   //
  //   setX(moveDragValue.get());
  // }, [longCard, moveDragValue]);

  return (
    <Flex align="center" justify="center" h="fit-content">
      <Flex
        w="fit-content"
        align="center"
        position="relative"
        justify="center"
        zIndex="0"
      >
        <Icon
          as={FaChevronLeft}
          boxSize="10"
          onClick={goLeft}
          color={x === 0 ? "gray.300" : "signatureDarkBlue"}
          position="absolute"
          zIndex="1"
          left="-3"
        />
        <Divider
          border="2px"
          position="absolute"
          zIndex="0"
          w={{
            base: `${maxCard + margin - 40}px`,
            lg: `${(maxCard + margin) * 2 - 40}px`,
            xl: `${(maxCard + margin) * 3 - 40}px`,
          }}
          color="signatureDarkBlue"
          opacity="1"
          rounded="md"
        />
        <Grid
          templateColumns="repeat(1, 1fr)"
          h="fit-content"
          w={{
            base: `${maxCard + margin}px`,
            md: `${maxCard + margin}px`,
            lg: `${(maxCard + margin) * 2}px`,
            xl: `${(maxCard + margin) * 3}px`,
          }}
          overflow="hidden"
          transform="translateY(47.5px)"
        >
          <StackChakra
            w="full"
            position="relative"
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            animate={{ x }}
            // style={{ x: motion }}
            transition={{ type: "spring" }}
            display="flex"
            gap={`${margin / 2}px`}
          >
            {journey.map((info, i) => (
              <Content {...info} key={i} />
            ))}
          </StackChakra>
        </Grid>

        <Icon
          as={FaChevronRight}
          boxSize="10"
          onClick={goRight}
          color={x === longCard * -1 ? "gray.300" : "signatureDarkBlue"}
          position="absolute"
          right="-3"
          zIndex="1"
        />
      </Flex>
    </Flex>
  );
};

export default OurJourney;
