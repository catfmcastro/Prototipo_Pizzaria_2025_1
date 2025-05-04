import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Flex,
  RadioGroup,
  HStack
} from "@chakra-ui/react";
import Navbar from "../components/form/Navbar";

function Pedido() {
  const [currentTab, setCurrentTab] = useState("meuPedido"); // Estado para alternar entre as abas
  const [selectedPayment, setSelectedPayment] = useState(""); // Estado para o método de pagamento

  // Dados estáticos do pedido (substitua por dados reais da API)
  const pedidoItens = [
    { id: 1, nome: "Pizza Margherita", quantidade: 1, preco: 39.9 },
    { id: 2, nome: "Coca-Cola 2L", quantidade: 2, preco: 9.9 },
  ];

  const total = pedidoItens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const pagamentos = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  return (
    <>
      <Navbar />
      <Box bg="gray.50" minH="100vh" py={10} px={5}>
        <Heading as="h1" size="xl" textAlign="center" color="red.600" mb={10}>
          {currentTab === "meuPedido" ? "Meu Pedido" : "Finalizar Pedido"}
        </Heading>

        {currentTab === "meuPedido" && (
          <Box
            maxW="800px"
            mx="auto"
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
          >
            <Heading as="h2" size="md" mb={4}>
              Itens do Pedido
            </Heading>
            <Stack spacing={4}>
              {pedidoItens.map((item) => (
                <Flex key={item.id} justify="space-between" align="center">
                  <Text fontWeight="bold">{item.nome}</Text>
                  <Text>
                    {item.quantidade} x R$ {item.preco.toFixed(2)}
                  </Text>
                </Flex>
              ))}
            </Stack>
            <Flex justify="space-between" fontWeight="bold">
              <Text>Total:</Text>
              <Text>R$ {total.toFixed(2)}</Text>
            </Flex>
            <Button
              colorScheme="red"
              mt={6}
              w="full"
              onClick={() => setCurrentTab("finalizarPedido")}
            >
              Finalizar Pedido
            </Button>
          </Box>
        )}

        {currentTab === "finalizarPedido" && (
          <Box
            maxW="800px"
            mx="auto"
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
          >
            <Heading as="h2" size="md" mb={4}>
              Escolha o Método de Pagamento
            </Heading>

            <RadioGroup.Root defaultValue="1">
              <HStack gap="6">
                {pagamentos.map((pagamento) => (
                  <RadioGroup.Item key={pagamento.value} value={pagamento.value}>
                    <RadioGroup.ItemHiddenInput />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{pagamento.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>

            <Button
              colorScheme="red"
              mt={6}
              w="full"
              isDisabled={!selectedPayment}
              onClick={() => alert("Pedido Finalizado!")}
            >
              Confirmar Pagamento
            </Button>
            <Button
              variant="outline"
              mt={4}
              w="full"
              onClick={() => setCurrentTab("meuPedido")}
            >
              Voltar
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Pedido;
