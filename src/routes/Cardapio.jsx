import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/form/Navbar";
import { getItens } from "../hooks/Services";

function Cardapio() {
  const [itens, setItens] = useState([]);
  
  // buscar itens da API
  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await getItens();
        setItens(response.data);
        console.log(itens)
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    fetchItens();
  }, []);

  return (
    <>
      <Navbar />
      <Box bg="gray.50" minH="100vh" py={8} px={5}>
        <Heading as="h1" size="2xl" textAlign="center" color="red.600" mb={5}>
          Cardápio
        </Heading>
        <Text textAlign={"center"} mb={10}>
          Escolha entre as nossas várias opções e adicione-as ao carrinho!
        </Text>
        <Flex wrap="wrap" justify="center" gap={6}>
          {itens.map((item) => (
            <Box
              key={item.id_item}
              bg="white"
              borderRadius="md"
              boxShadow="md"
              p={6}
              textAlign="center"
              maxW="300px"
            >
              <Heading as="h3" size="md" color="red.600" mb={2}>
                {item.nome}
              </Heading>
              <Text fontSize="sm" color="gray.600" mb={4}>
                {item.descricao}
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="gray.800" mb={4}>
                R$ {item.preco.toFixed(2)}
              </Text>
              <Button colorScheme="red" bg={"red"} size="sm">
                Adicionar ao Pedido
              </Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Cardapio;
