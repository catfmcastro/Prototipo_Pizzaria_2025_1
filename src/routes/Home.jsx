import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/form/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Box bg="gray.50" minH="100vh" py={10} px={5}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          maxW="1200px"
          mx="auto"
        >
          {/* Boas Vindas */}
          <Stack spacing={6} maxW="600px">
            <Heading as="h1" size="2xl" color="red.600">
              Bem-vindo à Pizzaria Delícia!
            </Heading>
            <Text fontSize="lg" color="gray.700">
              Cadastre-se ou faça login para aproveitar nossas promoções
              exclusivas e saborear as melhores pizzas da cidade!
            </Text>
            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button colorScheme="red" size="lg" as="a" href="/signup">
                Cadastre-se
              </Button>
              <Button
                variant="outline"
                colorScheme="red"
                size="lg"
                as="a"
                href="/login"
              >
                Fazer Login
              </Button>
            </Stack>
          </Stack>
        </Flex>

        {/* Promoções */}
        <Box mt={20}>
          <Heading as="h2" size="lg" textAlign="center" color="red.600" mb={6}>
            Aproveite nossas promoções!
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="center"
            align="center"
            gap={6}
          >
            <Box
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={6}
              textAlign="center"
              maxW="300px"
            >
              <Heading as="h3" size="md" color="red.600" mb={4}>
                Pizza Família
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                Compre 1 pizza família e ganhe uma Coca-Cola 2L grátis!
              </Text>
              <Button colorScheme="red" size="sm">
                Aproveitar
              </Button>
            </Box>
            <Box
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={6}
              textAlign="center"
              maxW="300px"
            >
              <Heading as="h3" size="md" color="red.600" mb={4}>
                Combo Duplo
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                Peça 2 pizzas médias por apenas R$ 49,90!
              </Text>
              <Button colorScheme="red" size="sm">
                Aproveitar
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default Home;
