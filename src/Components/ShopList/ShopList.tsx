import { Box, Flex, SimpleGrid, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';


const ShopLists:Array <{
    image:string
    name:string
    desc:string
    costs:number
    buttonText:string
}> = [
    {
image:"olive1.jpg",
name: "Anatolia Zeytinyağı",
desc:"Sızma",
costs:123,
buttonText:"Sepete Ekle"
    },
    {
        image:"olive1.jpg",
        name: "Anatolia Zeytinyağı",
        desc:"Sızma",
        costs:123,
        buttonText:"Sepete Ekle"
            },   {
                image:"olive1.jpg",
                name: "Anatolia Zeytinyağı",
                desc:"Sızma",
                costs:123,
                buttonText:"Sepete Ekle"
                    },   {
                        image:"olive1.jpg",
                        name: "Anatolia Zeytinyağı",
                        desc:"Sızma",
                        costs:123,
                        buttonText:"Sepete Ekle"
                            },   {
                                image:"olive1.jpg",
                                name: "Anatolia Zeytinyağı",
                                desc:"Sızma",
                                costs:123,
                                buttonText:"Sepete Ekle"
                                    }
]

const ShopList:React.FC = () => {
    
    return(
    <Flex >
                  <SimpleGrid columns={[2, null, 4]} spacing='40px' ml={"100px"}>
                {ShopLists.map((val,index)=> {

                    return(
                
                        <Box key={index}  display={"flex"} flexDirection="column" alignItems={"center"} justifyContent="center" _hover={{
                            zindex:"1",
                            boxShadow:"-1px 5px 24px -8px rgba(0,0,0,0.75)"
                        }}>
<Image bg={"transparent"} src={val.image.toString()} w="400" h="400"/>
<Flex direction={"column"} align="center" justify={"center"} mt="-10%" mb={"20px"}>
<Text fontSize={"26px"} color="green" fontWeight={300} lineHeight="1.46">
{val.name}
</Text>

<Text fontSize={"13px"} color="green" fontWeight={300} lineHeight="1.46">
{val.desc}
</Text>

<Text fontSize={"26px"} color="green" fontWeight={600} lineHeight="1.46">
{val.costs} ₺
</Text>
</Flex>
<Button w={"100%"} borderRadius="0" > {val.buttonText} </Button>

                        </Box>
                  
                    )
                })}
      </SimpleGrid>
</Flex>
      
    )
}
export default ShopList;