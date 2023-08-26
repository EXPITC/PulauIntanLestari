"use client";

import { navbarState } from "@/libs/atoms/navbarRecoil";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Img,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { IconType } from "react-icons";
import { usePathname } from "next/navigation";

const navLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Discover",
    link: "/discover",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
];

interface socials {
  link: string;
  Icon: IconType;
}

const socials = [
  {
    link: "https://wa.wizard.id/f39ee0",
    Icon: AiOutlineWhatsApp,
  },
  {
    link: "https://www.instagram.com/pulauintanlestari",
    Icon: AiOutlineInstagram,
  },

  {
    link: "https://id.linkedin.com/company/pulauintan",
    Icon: AiOutlineLinkedin,
  },
  {
    link: "https://youtu.be/q1Cv7_UlJCM",
    Icon: AiOutlineYoutube,
  },
];

const DrawerNav = () => {
  const [isNavbar, setNavbar] = useRecoilState(navbarState);
  const onClose = () => setNavbar(false);
  const place = useBreakpointValue<"bottom" | "top">(
    {
      base: "bottom",
      md: "bottom",
      lg: "top",
    },
    { fallback: "bottom" }
  );
  const color = useColorModeValue("signatureBlack", "white");

  const pathname = usePathname();

  return (
    <Drawer isOpen={isNavbar} placement={place} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent
        position="absolute"
        w="full"
        bg="signatureMilk"
        px={{ base: "2", md: "5" }}
        roundedTop={{ base: "xl", md: "xl", lg: "none" }}
        roundedBottom={{ base: "none", md: "none", lg: "md" }}
      >
        <DrawerCloseButton />
        <DrawerHeader fontSize={{ base: "15", md: "24" }}>
          Welcome to Pulau Intan Lestari
        </DrawerHeader>

        <DrawerBody
          display="flex"
          zIndex="10"
          position={{ base: "relative", md: "initial" }}
          overflow="hidden"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 4, lg: 7 }}
          >
            {navLink.map((l, i) => (
              <Link
                href={l.link}
                key={i}
                onClick={onClose}
                color={pathname === l.link ? "signatureRed" : color}
              >
                {l.name}
              </Link>
            ))}
          </Stack>
          <Flex
            w={{ base: "52", md: "44" }}
            h={{ base: "95%", md: "auto" }}
            flexDir="column"
            justify="space-between"
            align="center"
            position="absolute"
            right={{ base: "7", md: "8", lg: "24" }}
            top={{ base: "auto", md: "1", lg: "0" }}
          >
            <Img
              src="https://devnew.pulauintanlestari.com/wp-content/uploads/2021/03/cropped-LOGO-PIL-02.png"
              alt="brand"
            />
            <Stack direction="row" spacing={{ base: "6", md: "5" }}>
              {socials.map((s, i) => (
                <Link href={s.link} key={i} target="_blank" color={color}>
                  <Icon as={s.Icon} boxSize="26" />
                </Link>
              ))}
            </Stack>
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          {/* <Button variant="outline" mr={3} onClick={onClose}> */}
          {/*   Cancel */}
          {/* </Button> */}
          {/* <Button colorScheme="blue">Save</Button> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const NavBarButton = () => {
  const [isNavbar, setNavbar] = useRecoilState(navbarState);

  const positions = {
    left: useBreakpointValue<"none" | "20">({ base: "none", md: "20" }),
    bottom: useBreakpointValue<"10vh" | "none">({ base: "10vh", md: "none" }),
    right: useBreakpointValue<"9" | "none">({ base: "9", md: "none" }),
    position: useBreakpointValue<"fixed" | "absolute">({
      base: "fixed",
      md: "absolute",
    }),
  };

  return (
    <Icon
      {...positions}
      boxSize={{ base: "7", md: "6" }}
      transform="rotate(90deg)"
      as={HamburgerIcon}
      onClick={() => setNavbar(!isNavbar)}
    />
  );
};

export { DrawerNav as default, NavBarButton };
