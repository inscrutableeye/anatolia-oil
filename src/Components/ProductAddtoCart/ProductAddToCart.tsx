import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Text,
    IconButton,
    Button
  } from '@chakra-ui/react';
  import ArrowL from "../../../public/ArrowS.svg";
  import ArrowR from "../../../public/ArrowR.svg";
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { authDrawerState } from '../../Atom/AuthDrawerAtom';
  
  const data : Array<{
    imageURL:String
    name:string
    price:number
    
  }>  = [ {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  }, {
    imageURL:
      'olive1.jpg',
    name: 'Sızma Zeytinyağı',
    price: 4.5,

  } ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  
  function ProductAddToCart() {
    const [slider, setSlider] = useState<Slider | null>(null)
    const [drawerState, setDrawerState] = useRecoilState(authDrawerState)
    return (
        <>
      <Flex       
      flexDirection={'column'}
        justifyContent={{ base: 'center', lg: "space-between" }}
bg="#f1f0ec"
    mt={"-5%"}


    
        >


  

        <Box  mt="100px" alignSelf={"center"}>
        <Image src='decor_heading.svg' color={"#44533c"} ml={"200px"} alignSelf={"center"}/>
            <Text fontFamily="Postmark" fontSize={"50px"} fontStyle="normal"  fontWeight="600" color={"#44533c"}>
                FIRSAT  ÜRÜNLERİ
            </Text>
       
      
        </Box>
        {/* Slider */}
  
      <Box
          width={{ xl: "100%", base: "100%" }}
          marginTop={{ base: "30px" }}
 
          pl={"12"}
         
         
        >
            
<Slider {...settings} ref={slider => setSlider(slider)}>
{data.map((val,index)=> (
        <Box
        mb={"10"}
        ml="12px"
          bg={'white'}
          maxW="sm"
          rounded="lg"
          shadow="xl"
          position="relative"
          key={index}
          >
     
  
          <Image
            src={val.imageURL.toString()}
            alt={`Picture of ${val.name}`}
            roundedTop="lg" 
          />
  
          <Box p="6" bg={"#44533c"}>
       
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
              color={"white"}
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                >
                {val.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
       
                  <Icon color={"white"} as={FiShoppingCart} h={7} w={7} alignSelf={'center'} onClick={() => setDrawerState({ open: true, view: 'item' }) } />
       
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="2xl" color={"white"}>
             
                {val.price.toFixed(2)}
                <Box as="span" color={'white'} fontSize="lg">
              ₺
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
))}
         </Slider>
         </Box>
         </Flex>
         </>
    );
  }
  
  export default ProductAddToCart;