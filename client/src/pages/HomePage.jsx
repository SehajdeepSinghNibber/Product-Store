import { Container,VStack,Text,SimpleGrid } from "@chakra-ui/react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useProductStore } from "../store/product"

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(()=>{
    fetchProducts();
  },[fetchProducts]
)

  console.log("Products: ",products)

  return (
    (<Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          textAlign={"center"}
          bgClip={"text"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}  
          spacing={10}
          width={"full"}
        >

        </SimpleGrid>

        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>

      </VStack>
    </Container>)
  )
}

export default HomePage
