// components
import { Box, Flex, Button, Stack, Text } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Box bg={"yellow"}>
        <Flex minH={"60px"} align={"center"} py={{ base: 2 }} px={{ base: 4 }}>
          <Button bg={'transparent'} href="/">
            <Text
              fontFamily={"heading"} color={'black'}
            >
              PIZZARIA
            </Text>
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
              href={"#"}
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
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Ação 3
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
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              href={"#"}
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
