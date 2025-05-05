import { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Stack,
  Field,
  Flex,
  Editable,
  Icon,
  IconButton,
} from "@chakra-ui/react";
import { LuCheck, LuPencilLine, LuX } from "react-icons/lu";
import Navbar from "../components/form/Navbar";

function Perfil() {
  // Estado para armazenar as informações do usuário
  const [userInfo, setUserInfo] = useState({
    cpf: "12345678901",
    email: "usuario@email.com",
    telefone: "11999999999",
    senha: "senha",
  });

  // Estado para controlar o modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Função para lidar com alterações nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  // Função para salvar as alterações
  const handleSave = () => {
    setIsEditing(false);
    // Aqui você pode enviar os dados atualizados para a API
    console.log("Informações salvas:", userInfo);
  };

  return (
    <>
      <Navbar />
      <Box bg="gray.50" minH="100vh" py={10} px={5}>
        <Flex justify="center">
          <Box
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="md"
            maxW="500px"
            w="full"
          >
            <Heading
              as="h1"
              size="lg"
              mb={6}
              textAlign="center"
              color="red.600"
            >
              Meu Perfil
            </Heading>
            <Stack spacing={4}>
              <h1>CPF</h1>
              <Editable.Root defaultValue={userInfo.cpf} onValueChange={handleChange}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger asChild>
                    <IconButton variant="outline" size="xs">
                      <LuCheck />
                    </IconButton>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable.Root>

              <h1>Email</h1>
              <Editable.Root defaultValue={userInfo.email}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger asChild>
                    <IconButton variant="outline" size="xs">
                      <LuCheck />
                    </IconButton>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable.Root>

              <h1>Telefone</h1>
              <Editable.Root defaultValue={userInfo.telefone}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger asChild>
                    <IconButton variant="outline" size="xs">
                      <LuCheck />
                    </IconButton>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable.Root>

              <h1>Senha</h1>
              <Editable.Root defaultValue={userInfo.senha}>
                <Editable.Preview />
                <Editable.Input />
                <Editable.Control>
                  <Editable.EditTrigger asChild>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.EditTrigger>
                  <Editable.CancelTrigger>
                    <IconButton variant="ghost" size="xs">
                      <LuPencilLine />
                    </IconButton>
                  </Editable.CancelTrigger>
                  <Editable.SubmitTrigger asChild>
                    <IconButton variant="outline" size="xs">
                      <LuCheck />
                    </IconButton>
                  </Editable.SubmitTrigger>
                </Editable.Control>
              </Editable.Root>
            </Stack>

            <Flex mt={6} justify="space-between">
              {isEditing ? (
                <>
                  <Button colorScheme="red" onClick={handleSave}>
                    Salvar
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </>
              ) : (
                <Button colorScheme="red" onClick={() => setIsEditing(true)}>
                  Editar Perfil
                </Button>
              )}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Perfil;
