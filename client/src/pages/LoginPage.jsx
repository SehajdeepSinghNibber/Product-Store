import { Box, Button, Container, Heading, Input, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const { login } = useAuthStore();
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { success, message } = await login(inputs);
    if (success) {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.sm" py={12}>
      <VStack spacing={8}>
        <Heading>Login</Heading>
        <Box w="full" bg="gray.800" p={8} borderRadius="lg" boxShadow="md">
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              type="email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
            <Button colorScheme="blue" w="full" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="link" onClick={() => navigate("/signup")}>
              Don't have an account? Sign up
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default LoginPage;
