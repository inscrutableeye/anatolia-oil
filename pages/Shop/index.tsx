import { Flex } from '@chakra-ui/react';
import React from 'react';
import ShopFilter from '../../src/Components/ShopFilter/ShopFilter';


type indexProps = {
    
};

const Shop:React.FC<indexProps> = () => {
    
    return (
        <Flex direction={"column"}>
            <ShopFilter/>
        </Flex>
    )
}
export default Shop;