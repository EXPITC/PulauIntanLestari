"use client";

import { Stack, Text } from "@chakra-ui/react";

const Carrer = () => (
  <Stack
    spacing={{
      base: "5",
      md: "12",
    }}
    fontSize={{
      base: "medium",
      md: "large",
    }}
    minH="50vh"
    justify="center"
    px={{
      base: "4",
      md: "8",
    }}
  >
    <Text textAlign="justify">
      We remind you to always be cautious toward fraud related to employee
      recruitment which use Pulau Intan Lestari company name.
    </Text>
    <Text textAlign="justify">
      Pulau Intan Lestari never ask for payment at any stage in the recruitment
      process or to cover a range of expenses, such as transportation,
      accommodation, medical check up, psychological test or any other expenses.
    </Text>
    <Text>You may contact us by email contact@pulauintanlestari.com</Text>
  </Stack>
);

export default Carrer;
