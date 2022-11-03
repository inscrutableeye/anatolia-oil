import { Box, Checkbox, Flex,List,ListItem,Stack,Text, Image, Divider, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Button } from '@chakra-ui/react';
import React from 'react';
import ShopList from '../ShopList/ShopList';

type ShopFilterProps = {
    
};

const ShopFilter:React.FC<ShopFilterProps> = () => {
    
    return(

       
        <Flex direction={"column"} alignItems="start" justifyContent={"center"}  py={"1%"}>
            
{/*             <Box bg={"#f7f2ec"} display="flex" alignItems={"center"} justifyContent="center" w={"60%"}  height= "clamp(180px, 15vw, 250px);">

</Box> */}

<Image src='shop.jpg' filter={"blur(4px)"}/>
<Text fontSize={"100px"}  fontWeight="600" zIndex={1} display="flex" align={"center"} ml="45%"  transform="translateY(-150%)"  >SHOP</Text>

<Flex direction={"row"}>
<Flex direction={"column"} pl="100px" w={"350px"} alignItems="start" justify={"center"} transform="translateY(-25%)">
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"}>
                 KATEGORİ MENÜSÜ
            </Text>
            <List>
            <ListItem>
                Ürünler
            </ListItem>
            </List>

            <Divider orientation='horizontal' borderColor={"black"} pt="20px"/>
            <Stack spacing={3} direction='column' pb={"20px"}>
            <Text fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"} pt="20px">
                GRAMAJ
            </Text>
            
  <Checkbox >
    200₺
  </Checkbox>
  <Checkbox >
    400₺
  </Checkbox>
  <Checkbox >
    600₺
  </Checkbox>
  <Checkbox >
    800₺
  </Checkbox>
  <Checkbox >
    1000₺
  </Checkbox>
</Stack>
<Divider orientation='horizontal' borderColor={"black"}/>

<Text  fontSize={"20px"} fontWeight="400" display={"flex"} alignItems="center" color={"black"} pb="20px" pt={"20px"}>
                 FİYAT ARALIĞI
            </Text>
    
<RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
  <RangeSliderTrack>
    <RangeSliderFilledTrack />
  </RangeSliderTrack>
  <RangeSliderThumb index={0} />
  <RangeSliderThumb index={1} />
</RangeSlider>
<Button mt={"25px"} borderRadius="0">Filtrele</Button>

</Flex>
<ShopList/>
</Flex>
        </Flex>

    )
}
export default ShopFilter;