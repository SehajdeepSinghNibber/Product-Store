import { Container, Flex, Text, Button, HStack, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from "@chakra-ui/icons"
import { FiSun, FiMoon, FiLogOut, FiLogIn } from "react-icons/fi"
import React from 'react'
import { useAuthStore } from '../store/auth'

const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode()
    const { authUser, logout } = useAuthStore()

  return (
    <Container 
        maxW={"1140px"}
        px={4}
    >
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={'space-between'}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={{
                    base:"22px",
                    sm:"28px"
                }}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                bgGradient={"linear(to-r,cyan.400,blue.500)"}
                bgClip={"text"}
            >
                <Link to={"/"}>Product Store</Link>
            </Text>
            <HStack
                spacing={2}
                alignItems={"center"}
            >
                {authUser && (
                    <Link to={"/create"}>
                        <Button>
                            <PlusSquareIcon
                                fontSize={"20px"}
                            />
                        </Button>
                    </Link>
                )}
                
                <Button onClick={toggleColorMode}>
                    {colorMode === "light"?<FiMoon/>:<FiSun/>}
                </Button>

                {authUser ? (
                    <Button onClick={logout}>
                        <FiLogOut />
                    </Button>
                ) : (
                    <Link to="/login">
                        <Button>
                            <FiLogIn />
                        </Button>
                    </Link>
                )}
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
