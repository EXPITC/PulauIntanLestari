"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const TabSections = [
  {
    imgUrl:
      "https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/ICON-SERVICE-01.png",
    name: "Yarn",
  },
  {
    imgUrl:
      "https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/ICON-SERVICE-02.png",
    name: "Circular Knit",
  },
  {
    imgUrl:
      "https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/ICON-SERVICE-03.png",
    name: "Flat Knit",
  },
  {
    imgUrl:
      "https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/ICON-SERVICE-04.png",
    name: "Dye",
  },
  {
    imgUrl:
      "https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/ICON-SERVICE-05.png",
    name: "Garment",
  },
];

const cerfication = [
  {
    img: "https://pulauintanlestari.com/wp-content/uploads/2021/03/Certification-01-370x370.png",
    alt: "Certification-01",
  },
  {
    img: "https://pulauintanlestari.com/wp-content/uploads/2021/03/Certification-02.png",
    alt: "Certification-02",
  },
  {
    img: "https://pulauintanlestari.com/wp-content/uploads/2021/12/kisspng-oeko-tex-textile-certification-technical-standard-garment-5adf8092209429.0484911115245968821335.png",
    alt: "textile cerfication",
  },
  {
    img: "https://pulauintanlestari.com/wp-content/uploads/2021/03/Certification-05.png",
    alt: "Certification-05",
  },
  {
    img: "https://pulauintanlestari.com/wp-content/uploads/2022/08/Sap-B1-Logo-png-2048x482.png",
    alt: "Sap B1",
  },
];

interface panelProps {
  img: { url: string; alt: string }[];
  content: string;
}

const panelContent: panelProps[] = [
  {
    img: [
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/YARN.jpg",
        alt: "yarn 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/YARN_4.jpg",
        alt: "yarn 4",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2020/06/YARN_5.jpg",
        alt: "yarn 5",
      },
    ],
    content:
      "We produce high quality dyed yarn which is precisely manufactured by our diligent experts who carefully adhere to the newest industry norms and standards. They provide them in different tones, in order to satisfy the various needs of their customers.",
  },
  {
    img: [
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/CIRCULARKNIT_KECIL_KANAN2.jpg",
        alt: "Circular 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/CIRCULARKNIT_GEDE.jpg",
        alt: "Circular 2",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/KNITTING_@-1.jpg",
        alt: "Circular 3",
      },
    ],
    content:
      "We are in a continuous process of expansion, enhancement and incorporating the latest technological innovations in order to ensure our customers the best possible quality and innovative Textiles.",
  },
  {
    img: [
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/FLATKNIT_KECIL_Kanan.jpg",
        alt: "Flatknit 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/FLATKNIT_KECIL_KIRI.jpg",
        alt: "Flantknit 2",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/FLATKNIT_GEDE.jpg",
        alt: "Flantknit 3",
      },
    ],
    content:
      "One of the most versatile textile technologies which gives more creativity to fashion. Can produce several and different types of fabrics and preformed pieces.",
  },
  {
    img: [
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/DYEING_4.jpg",
        alt: "Dyeing 4",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/dyeing_1.jpg",
        alt: "dying 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/DYEING_3.jpg",
        alt: "dying 3",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/DYEING-09.png",
        alt: "dying 09",
      },
    ],
    content:
      "We improve the outward appearance and the quality of fabric, with special treatment to enhance functional value.",
  },
  {
    img: [
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/CIRCULARKNIT_gede2.jpg",
        alt: "CircularKnit 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/GARMENT-kecil.jpg",
        alt: "Garmet 1",
      },
      {
        url: "https://pulauintanlestari.com/wp-content/uploads/2021/03/GARMENT-KECIL-KIRI.jpg",
        alt: "Garmet 2",
      },
    ],
    content:
      "To meet requirements for fashion industries we also strengthen our garment with design development, computer-aided manufacturing (CAD), and automation. We are able to work in various styles needed like Apparel for Men, Ladies, Children and Babies. Our customers recognize our products for its quality, uniformity and its competitive price and they cooperate with us in a consistent manner as well as develop together with us.",
  },
];

const Panel = ({ img, content }: panelProps) => (
  <TabPanel h="full">
    <Flex
      gap={{
        base: "5",
        md: "5",
        lg: "8",
      }}
      flexDir={{
        base: "column",
        md: "row",
      }}
    >
      <Image
        src={img[0].url}
        alt={img[0].alt}
        w={{
          base: "full",
          md: "280px",
          lg: "45%",
        }}
        h={{
          base: "400px",
          md: "400px",
          lg: "600px",
        }}
        rounded="md"
      />
      <Flex
        flexDir="column"
        justify="space-between"
        gap={{ base: "5", md: "2", lg: "5" }}
        align="center"
        maxW="55%"
      >
        <Box
          h={{
            base: "55%",
            md: "67%",
            lg: "55%",
          }}
          position="relative"
          bg="#FDE9CE"
          rounded="md"
        >
          <Text
            fontSize={{
              base: "md",
              md: "13px",
              lg: "md",
            }}
            fontWeight="medium"
            color="signatureDarkBlue"
            p={{
              base: "4",
              md: "2",
              lg: "4",
            }}
            h="full"
            zIndex="1"
            textAlign="justify"
          >
            {content}
          </Text>
          {img[3] && (
            <Image
              src={img[3].url}
              alt={img[3].alt}
              display={{
                base: "none",
                md: "none",
                lg: "initial",
              }}
              position="absolute"
              w={{
                md: "40",
                lg: "80",
              }}
              bottom={{
                md: "7",
                lg: "7",
              }}
              left={{
                md: "4",
                lg: "5",
              }}
            />
          )}

          <Image
            src="https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/cropped-LOGO-PIL-02.png"
            alt="brand"
            position="absolute"
            right={{
              base: "1",
              md: "2",
              lg: "5",
            }}
            bottom={{
              base: "1",
              md: "2",
              lg: "5",
            }}
            w={{
              base: "40",
              md: "28",
              lg: "40",
            }}
            opacity={{
              base: "0.2",
              md: "0.3",
              lg: "0.5",
            }}
            zIndex="0"
          />
        </Box>
        {img[3] && (
          <Image
            src={img[3].url}
            alt={img[3].alt}
            display={{
              base: "initial",
              lg: "none",
            }}
            w={{
              base: "full",
              md: "40",
            }}
          />
        )}
        <Flex
          h={{
            base: "40%",
            md: "30%",
            lg: "40%",
          }}
          justify="space-between"
        >
          <Image src={img[1].url} alt={img[1].alt} w="48%" roundedLeft="md" />
          <Image src={img[2].url} alt={img[2].alt} w="48%" roundedRight="md" />
        </Flex>
      </Flex>
    </Flex>
  </TabPanel>
);

const Services = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };
  return (
    <Stack w="full" spacing="9" position="relative" zIndex="0" maxW="1440px">
      <Heading as="h2" color="signatureDarkBlue">
        Our Services
      </Heading>
      <Tabs index={tabIndex} onChange={handleTabsChange} w="full" maxW="1440px">
        <TabList>
          <Grid templateColumns="repeat(5, 1fr)" w="full">
            {TabSections.map((T, i) => (
              <Tab
                key={i}
                roundedTopLeft={i === 0 ? "lg" : "none"}
                roundedTopRight={i === 4 ? "lg" : "none"}
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                border="0"
                fontWeight="medium"
                borderTop="2px solid"
                borderColor="transparent"
                _selected={{
                  borderColor: "signatureDarkBlue",
                  fontWeight: "bold",
                  color: "signatureRed",
                }}
                bg={i === tabIndex ? "signatureSilver" : "singatureDarkSilver"}
              >
                <Image
                  src={T.imgUrl}
                  alt={T.name}
                  w={{
                    base: "5",
                    md: "8",
                    lg: "10",
                  }}
                />
                <Text
                  fontSize={{
                    base: "xx-small",
                    md: "small",
                    lg: "initial",
                  }}
                  whiteSpace="nowrap"
                >
                  {T.name}
                </Text>
              </Tab>
            ))}
          </Grid>
        </TabList>
        <TabPanels
          roundedBottom="lg"
          overflow="hidden"
          h="fit-content"
          bg="signatureSilver"
          p={{
            base: "1",
            md: "3",
            lg: "4",
          }}
        >
          {panelContent.map((c, i) => (
            <Panel img={c.img} content={c.content} key={i} />
          ))}
        </TabPanels>
      </Tabs>

      <Stack spacing="3">
        <Heading as="h2" color="signatureDarkBlue">
          Our Certificate
        </Heading>
        <Text textAlign="justify" fontSize={{ base: "small", md: "large" }}>
          With our experienced team and quality management process, we present
          you with premium and reliable products. Our processes are certified by
          ISO 9001-2015 and OEKO TEX Class I. You are in good hand! We offer you
          7 days guarantee for all questions or concerns with the product that
          you purchased.
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          alignItems="center"
          justifyContent="center"
          gap="4"
        >
          {cerfication.map((c, i) => (
            <GridItem
              key={i}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={c.img}
                alt={c.alt}
                w={{
                  base: "20",
                  md: "36",
                  lg: "48",
                }}
              />
            </GridItem>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Services;
