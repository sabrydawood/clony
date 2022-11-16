import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Stack,
  StackProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchButton } from "@/components/search-button";
import { RiArrowRightLine } from "react-icons/ri";
import { useRouter } from "next/router";
import { FC } from "react";

interface HeroProps extends StackProps {}

const Hero: FC<HeroProps> = () => {
  const router = useRouter();

  return (
    <Stack
      position="relative"
      maxW="container.md"
      py="12"
      mx="auto"
      spacing="6"
      align="center"
    >
      <Heading
        as="h1"
        fontSize={{ base: "6xl", md: "7xl" }}
        color={useColorModeValue("gray.700", "gray.100")}
        textAlign="center"
        textTransform="uppercase"
        lineHeight="0.9"
        zIndex="1"
        blendMode="luminosity"
      >
        A virus24 Docs website For{" "}
        <Box as="span" color={useColorModeValue("purple.600", "purple.300")}>
          Created projects & packages 
        </Box>
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.100")}
        textAlign="center"
        letterSpacing="tighter"
        zIndex="1"
        blendMode="luminosity"
      >
        did you be confused howe o make some things we made some modules to help me with my coding any time i need so you can use it to
      </Text>
      <Flex
        direction="row"
        alignItems="center"
        blendMode="luminosity"
        zIndex="1"
      >
        <Button
          maxW="60"
          size="lg"
          colorScheme="whiteAlpha"
          color={useColorModeValue("gray.600", "white")}
          shadow="lg"
          border="1px"
          borderColor={useColorModeValue("white", "whiteAlpha.300")}
          borderRadius="full"
          rightIcon={<Icon as={RiArrowRightLine} />}
          onClick={() => router.push("/docs")}
        >
          Getting started
        </Button>
        <SearchButton
          w="52"
          display={{ base: "none", lg: "flex" }}
          size="lg"
          shadow="lg"
          border="1px"
          borderColor={useColorModeValue("white", "whiteAlpha.300")}
          borderRadius="lg"
          ml="4"
        />
      </Flex>
      <Box
        boxSize="72"
        position="absolute"
        top="0"
        left="0"
        bg="brand.500"
        borderRadius="full"
        filter="blur(140px)"
      />
      <Box
        boxSize="72"
        position="absolute"
        bottom="0"
        right="0"
        bg="pink.500"
        borderRadius="full"
        filter="blur(140px)"
      />
    </Stack>
  );
};

export default Hero;
