import { Divider, Flex, Icon, Image, LinkBox, LinkOverlay,Stack,Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {FaSearch} from "react-icons/fa"
import RightContent from '../RightContent/RightContent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/ClientApp';
import ShoppingCart from '../RightContent/ShoppingCart/ShoppingCart';
type NavbarProps = {
    
};

const HeaderLinks : Array<{
    name:string
    link:string
  }> = [
 
  ]
  const HeaderLink : Array<{
      name:string
      link:string
    }> = [
    {
        name:"ZEYTİN YAĞI",
        link:"/"
    },{
        name:"ZEYTİN",
        link:"/"
    },{
        name:"TEMEL GIDA",
        link:"/"
    },{
      name:"EV VE YAŞAM",
      link:"/"
    }, {
        name:"BİZ KİMİZ?",
        link:"/"
    },{
        name:"HABERLER",
        link:"/"
    },{
        name:"İLETİŞİM",
        link:"/"
    }
    ]


const Navbar:React.FC<NavbarProps> = () => {
    const [user, loading, error] = useAuthState(auth)
    return (
        <Flex align={"center"} justify={"center"} direction="column" bg="white" h={"320px"} padding="6px 12px">
            <Flex
                align={'center'}
                w={{ base: '40px', md: 'auto' }}
                mr={{ base: '0', md: 2 }}
                direction="row"
            >
<Image src='logo.jpg' w={"188.25px"} />
<Stack direction={"row"} spacing="10" mr={-120} transform="translateX(600px)">
            <Icon as={FaSearch}  style={{width:"30px", height:"30px", color:"black"}} />
       <RightContent user={user}/>
  <ShoppingCart/> 
      
            </Stack>
            </Flex>
            <Flex direction={"row"} align="center" justify={"center"} pt="5">
         {
            HeaderLink.map((val,index)=> {
                return(
                    <LinkBox key={index}>
                    <LinkOverlay textDecoration={"none"} color={"black"}    _hover={{
                        color:"#93aa52"
                    }} href={val.link.toString()} > 
                    
                    <Text
                    fontStyle="normal"
                    fontSize={"20px"}
                    pr="20"
                 
                    >
                        {val.name}
                    </Text>
                    </LinkOverlay>
                    </LinkBox>
                )
            })
         }
         </Flex>
         <Divider transform="translateY(5px)" border={"2px"} borderColor={"linear-gradient(187.34deg, #D4C96D -39.07%, #ACA85B -0.75%, #556133 87.55%, #334524 127.53%);"} orientation="horizontal" w={"100%"}/>
        </Flex>
    )
}
export default Navbar;