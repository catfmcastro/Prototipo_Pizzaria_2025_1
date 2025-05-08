import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Flex,
  RadioGroup,
  HStack,
} from "@chakra-ui/react";
import Navbar from "../components/form/Navbar";
import {
  getEndereco,
  getItens,
  getPagamento,
  getPedido,
} from "../hooks/Services";

function Pedido() {
  const [currentTab, setCurrentTab] = useState("meuPedido"); // Estado para alternar entre as abas
  const [selectedPayment, setSelectedPayment] = useState(""); // Estado para o método de pagamento

  // Estados para armazenar os dados da API
  const [itens, setItens] = useState([]);
  const [pedido, setPedido] = useState(null);
  const [pagamento, setPagamento] = useState(null);
  const [endereco, setEndereco] = useState(null);

  // Buscar itens da API
  useEffect(() => {
    const fetchItens = async () => {
      try {
        const response = await getItens();
        setItens(response.data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    fetchItens();
  }, []);

  // Buscar pedido da API
  useEffect(() => {
    const fetchPedido = async () => {
      try {
        const response = await getPedido();
        setPedido(response.data[0]); // Assume que o pedido é o primeiro item do array
      } catch (error) {
        console.error("Erro ao buscar pedido:", error);
      }
    };
    fetchPedido();
  }, []);

  // Buscar endereço da API
  useEffect(() => {
    const fetchEndereco = async () => {
      try {
        const response = await getEndereco();
        setEndereco(response.data[0]); // Assume que o endereço é o primeiro item do array
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
      }
    };

    fetchEndereco();
  }, []);

  // Buscar pagamento da API
  useEffect(() => {
    const fetchPagamento = async () => {
      try {
        const response = await getPagamento();
        setPagamento(response.data[0]); // Assume que o pagamento é o primeiro item do array
      } catch (error) {
        console.error("Erro ao buscar pagamento:", error);
      }
    };

    fetchPagamento();
  }, []);

  // Calcular o total do pedido
  const total = itens.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  if (!pedido || !pagamento || !endereco || itens.length === 0) {
    return (
      <>
        <Navbar />
        <div>Carregando...</div>
      </>
    ); // Renderiza um estado de carregamento enquanto os dados não são carregados
  }

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
              {itens.map((item) => (
                <Flex key={item.id} justify="space-between" align="center">
                  <Text fontWeight="bold">{item.nome}</Text>
                  <Text>
                    {item.quantidade} x R$ {item.preco.toFixed(2)}
                  </Text>
                </Flex>
              ))}
            </Stack>
            <Flex justify="space-between" fontWeight="bold" mt={4}>
              <Text>Total:</Text>
              <Text>R$ {total.toFixed(2)}</Text>
            </Flex>
            <Heading as="h2" size="md" mt={6} mb={4}>
              Endereço de Entrega
            </Heading>
            <Text>{`${endereco.rua}, ${endereco.numero} - ${endereco.bairro}`}</Text>
            <Text>{`CEP: ${endereco.cep}`}</Text>
            <Text>{`Complemento: ${endereco.complemento}`}</Text>
            <Button
              colorScheme="red"
              mt={6}
              w="full"
              onClick={() => setCurrentTab("finalizarPedido")}
              bg={"mustard"}
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
              Informações de Pagamento
            </Heading>
            <Stack spacing={4}>
              <Text>
                <strong>Tipo de Pagamento:</strong>{" "}
                {pagamento.tipo_pagamento === 1
                  ? "Crédito"
                  : pagamento.tipo_pagamento === 2
                    ? "Débito"
                    : "Pix"}
              </Text>
              <Text>
                <strong>Apelido do Cartão:</strong> {pagamento.apelido_cartao}
              </Text>
              <Text>
                <strong>Número do Cartão:</strong> **** **** ****{" "}
                {pagamento.num_cartao.slice(-4)}
              </Text>
              <Text>
                <strong>CVV:</strong> {pagamento.cvv}
              </Text>
            </Stack>
            <Button
              colorScheme="red"
              mt={6}
              w="full"
              onClick={() => alert("Pedido Finalizado!")}
              bg={"mustard"}
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
