import { Box, Checkbox, Flex,List,ListItem,Stack,Text, Image } from '@chakra-ui/react';
import React from 'react';

type ShopFilterProps = {
    
};

const ShopFilter:React.FC<ShopFilterProps> = () => {
    
    return(

       
        <Flex direction={"column"} alignItems="start" justifyContent={"center"}  py={"1%"}>
            
{/*             <Box bg={"#f7f2ec"} display="flex" alignItems={"center"} justifyContent="center" w={"60%"}  height= "clamp(180px, 15vw, 250px);">

</Box> */}

<Image src='shop.jpg'/>
<Text fontSize={"100px"} fontWeight="600" zIndex={1} display="flex" align={"center"} ml="45%"  transform="translateY(-150%)"  >SHOP</Text>

<Flex direction={"row"}>
<Flex direction={"column"} pl="100px" alignItems="start" justify={"center"}>
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"}>
                 KATEGORİ MENÜSÜ
            </Text>
            <List>
            <ListItem>
                Ürünler
            </ListItem>
            </List>
            <Stack spacing={3} direction='column'>
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"}>
                GRAMAJ
            </Text>
            
  <Checkbox >
    200
  </Checkbox>
  <Checkbox >
    400
  </Checkbox>
  <Checkbox >
    600
  </Checkbox>
  <Checkbox >
    800
  </Checkbox>
  <Checkbox >
    1000
  </Checkbox>
</Stack>
</Flex>

</Flex>
        </Flex>

    )
}
export default ShopFilter;