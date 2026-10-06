import { Container, Flex, Text, HStack, Button, useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color={"cyan.400"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack gap={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquare fontSize={20} />
            </Button>
            <Button onClick={toggleColorMode} marginLeft={2}>
              {colorMode==="light"?<IoMoon/>:<LuSun size="20" />}
            </Button>
          </Link>
        </HStack>

      </Flex>
    </Container>
  );
};

export default Navbar;
