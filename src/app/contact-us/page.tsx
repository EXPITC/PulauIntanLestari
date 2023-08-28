"use client";

import RandomProduct from "@/components/randomProduct";
import Map from "@/components/map";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const ContactUs = () => {
  const [isError, setError] = useState({
    phone: false,
    name: false,
    text: false,
  });
  const [isLoading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    text: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  useEffect(() => {
    if (isLoading === false) return;
    const timeout = setTimeout(() => {
      setLoading(false);
      setForm({
        name: "",
        phone: "",
        text: "",
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  useEffect(() => {
    if (!searchParams.get("id")) return;
    setForm((prev) => ({
      ...prev,
      text: "Hi, I want to order 2XB.0286 – Oris Bowl",
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack w="full" maxW="1440px" spacing="8">
      <Flex
        gap={{
          base: "4",
          md: "2",
          lg: "4",
        }}
        align="center"
        justify="center"
        flexDir={{
          base: "column",
          lg: "row",
        }}
        height={{
          base: "fit-content",
          md: "fit-content",
          lg: "500px",
        }}
      >
        <Box
          w={{
            base: "full",
            md: "500px",
          }}
          h={{
            base: "fit-content",
            md: "400px",
          }}
        >
          <Map />
        </Box>
        <Flex
          as="form"
          w={{
            base: "full",
            md: "90%",
            lg: "50%",
          }}
          maxW="600px"
          px={{
            base: "0",
            md: "5",
          }}
          align="center"
          justify="center"
        >
          <Stack w="full">
            <FormControl isInvalid={isError.name} isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the name for us to know you better
                </FormHelperText>
              ) : (
                <FormErrorMessage>Name is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isError.phone} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
              />
              {!isError ? (
                <FormHelperText>
                  Enter the phone number for us to contact
                </FormHelperText>
              ) : (
                <FormErrorMessage>Phone number is required.</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={isError.text} isRequired>
              <Textarea
                name="text"
                placeholder="Please leave some message"
                h="60"
                value={form.text}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, text: e.target.value }))
                }
              />
            </FormControl>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isLoading}
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                if (isError.name || isError.phone || isError.text)
                  return setError({ name: false, phone: false, text: false });
                if (form.name === "")
                  return setError((prev) => ({ ...prev, name: true }));
                if (form.phone === "")
                  return setError((prev) => ({ ...prev, phone: true }));
                if (form.text === "")
                  return setError((prev) => ({ ...prev, text: true }));
                setLoading(true);
              }}
            >
              Submit
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <RandomProduct />
    </Stack>
  );
};

export default ContactUs;
