// components
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom"; 

function Navbar() {
  return (
    <>
      <Box bg={"yellow"}>
        <Flex minH={"60px"} align={"center"} py={{ base: 2 }} px={{ base: 4 }}>
          <Button as={Link} to={"/"} bg={'transparent'}>
              PIZZARIA
          </Button>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"cardapio"}
            >
              Cardápio
            </Button>
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"pedido"}
            >
              Meu Pedido
            </Button>
          </Stack>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            ml={"auto"}
          >
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              href={"perfil"}
            >
              Perfil
            </Button>
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
