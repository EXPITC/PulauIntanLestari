"use client";

import { Flex } from "@chakra-ui/react";
import DrawerNav from "./DrawerNav";
import Header from "./header";
import Footer from "./footer";

const ChildrenContainer = ({ children }: { children: React.ReactNode }) => (
  <>
    <DrawerNav />
    <Header />
    <Flex
      minH="full"
      flexDir="column"
      justify="space-between"
      mt="4"
      gap={{ base: 20, lg: 28 }}
      align="center"
      px={{ base: "5", md: "20" }}
      w="100vw"
      overflow="hidden"
    >
      {children}
    </Flex>
    <Footer />
  </>
);

export default ChildrenContainer;
