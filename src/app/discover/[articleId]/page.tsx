"use client";

import RandomArticle from "@/components/randomArticle";
import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Img,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { articles } from "../page";

const socials = [
  {
    alt: "facebook",
    icon: BsFacebook,
    color: "facebook.500",
    share: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    alt: "twitter",
    icon: BsTwitter,
    color: "twitter.500",
    share:
      "https://twitter.com/intent/tweet?text=Hey%2C+check+out+this+cool+site+I+found%3A+www.yourname.com+%23Topic+via%40my_twitter_name%20",
  },

  {
    alt: "linkedin",
    icon: BsLinkedin,
    color: "linkedin.500",
    share: "https://www.linkedin.com/shareArticle?url=",
  },
  {
    alt: "instagram",
    icon: BsInstagram,
    color: "white",
    bg: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%);",
    share: "",
  },
  {
    alt: "whatsapp",
    icon: BsWhatsapp,
    color: "whatsapp.500",
    share: "https://api.whatsapp.com/send?text=",
  },
];

const Article = () => {
  const path = usePathname().replace("/discover", "");
  const title = path.replace("/", "").replaceAll("-", " ");
  const [currentLink, setCurrentLink] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    articles.forEach((a) => {
      if (a.link === path) return setImgUrl(a.imgUrl);
    });
    if (window.location.href) setCurrentLink(window.location.href);
  }, [path]);
  return (
    <Stack maxW="1440px" w="full" spacing="10">
      {/* #Picture */}
      <Stack
        spacing="4"
        alignItems={{
          base: "end",
          md: "start",
        }}
      >
        <Flex
          position="relative"
          align="center"
          justify="center"
          w="full"
          h="full"
          maxH="680px"
          overflow="hidden"
          rounded="lg"
        >
          <AspectRatio ratio={16 / 9} flex="1 1 auto">
            <Img
              src={imgUrl}
              alt="article thumbnail"
              objectFit="cover"
              overflow="clip"
            />
          </AspectRatio>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image
              src="https://bit.ly/naruto-sage"
              alt="naruto"
              objectFit="cover"
            />
          </AspectRatio>

          <Heading
            as="h1"
            color="white"
            position="absolute"
            m="0 auto"
            size={{
              base: "lg",
              md: "xl",
              lg: "3xl",
            }}
            textAlign="left"
            maxW={{
              base: "full",
              md: "70%",
              lg: "50%",
            }}
            left={{
              base: "2",
              md: "5",
            }}
            bottom="30%"
            textShadow="2px 3px 5px rgba(0,0,0,0.7), 0px -4px 10px rgba(255,255,255,0.7)"
            className="capitalize"
          >
            {title}
          </Heading>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(5, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          maxW="fit-content"
          gap="2"
        >
          {socials.map((s, i) => (
            <Link key={i} href={s.share + currentLink} target="_blank">
              <GridItem
                position="relative"
                display="flex"
                justifyItems="center"
                alignItems="center"
              >
                <Flex
                  align="center"
                  justify="center"
                  bg={s.bg}
                  w="full"
                  h="full"
                  rounded="md"
                  p="0.5"
                >
                  <Icon
                    as={s.icon}
                    color={s.color}
                    boxSize={{
                      base: "5",
                      md: "7",
                    }}
                  />
                </Flex>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Stack>

      {/* #Article */}
      <Stack spacing="4" color="signatureDarkBlue">
        <Stack>
          <Heading as="h3" fontSize="md">
            By Pulau Intan Lestari
          </Heading>
          <Text>January 30, 2023</Text>
        </Stack>

        <Stack textAlign="justify">
          <Text>
            Fashion industry is one of the most polluting industries besides the
            oil and gas sector, a fact that cannot be denied. Furthermore, it
            has become worse with the presence of fast fashion that it
            influences people to buy affordable and trendy clothing that may not
            be used for a longer time because of outdated or decreased material
            quality. Fast fashion is proposing to run with current trends as
            fast as possible to create income at the moment, but it may doesn’t
            design for the last and end up in landfill.
          </Text>
          <Text>
            Sustainability is not something new, every person should care and do
            as good as they can to save the future of earth. and fashion brands
            also know about it. We find that many fashion brands have made
            sustainability initiatives as a form of positive campaign to
            everyone and responsibility to nature. Below we will show you how
            they make initiatives.
          </Text>
        </Stack>

        <Stack spacing="5" mt="5" textAlign="justify">
          <Box>
            <Text as="b">1. Inditex</Text>
            <Text>
              Inditex is one of the fast-fashion giants in the market, with
              their flagship brand Zara. We open their official site, and find
              the tab of sustainability; they talk about environmental
              challenges that are more urgent than before, and their commitment
              to continue innovating and increasing the efficiency to make a
              positive difference for people and the planet. They also aim for
              better textile materials like cotton, linen, and polyester that
              are more organic, sustainable, and recycled. In 2040, they aim for
              net zero emission.
            </Text>
          </Box>

          <Box>
            <Text as="b">2. H&M</Text>
            <Text>
              At first, H&M focused on fast-fashion clothing for men, women,
              teenagers, and children. But as a sustainability initiative; they
              scale innovation like new material, recycling technologies and
              business models that promote circularity, improve resource use and
              enhance customers’ experience. They also promote transparency that
              may not instantly improve sustainability performance, but creates
              accountability and comparability, pushing them to improve and
              encouraging others in the fashion industry to do the same. Besides
              openly engaging with others within and outside of the fashion
              industry, H&M see the partnership will help them to progress
              towards sustainability ambitions better and faster.
            </Text>
          </Box>

          <Box>
            <Text as="b">3. Levi’s</Text>
            <Text>
              Jeans or denim are so durable, but are not really sustainable if
              we know how they are made. Their production needs much water,
              chemicals, dyes, and sandblasting. In their website they say;
              there is no denying that the fashion industry plays a part in
              today’s climate crisis. They take commitment with their
              sustainability initiatives that is reducing energy use, emissions
              and waste, to taking a smarter, more responsible approach to water
              use and conservation, they also share their innovations with the
              entire industry.
            </Text>
          </Box>
        </Stack>
      </Stack>

      <RandomArticle />
    </Stack>
  );
};

export default Article;
