import { Flex } from "@chakra-ui/react";
import Carousel from "../src/Components/Carousel/Carousel";
import ProductAddToCart from "../src/Components/ProductAddtoCart/ProductAddToCart";



export default function Home() {
  return (
   <>
   <Flex direction={"column"}>
   <Carousel/>
   <ProductAddToCart/>
   </Flex>
   </>
  )
}
