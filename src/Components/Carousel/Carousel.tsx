/* eslint-disable react/jsx-key */
import React, { useRef, useState } from 'react';
import {
  Box,
  Image,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,

  LinkBox,
  LinkOverlay,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

import { useRouter } from 'next/router';

// Settings for the slider
const settings = {
  
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function CaptionCarousel() {

  const [slider, setSlider] = useState<Slider | null>(null)
  const router = useRouter()
  const top = useBreakpointValue({ base: '90%', md: '65%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
 
  const cards: Array<{
    image:string
  }> = [
    {
 
      image:
        'olive_slider.svg',
    }, {
 
        image:
          'olivetree1.jpg',
      }, {

        image:
          'olive.jpg',
      }
 
  ];

  return (
    <>
    <Box
      
   h={"10px"}
      width={'full'}
      >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
     <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        _hover={{bg:"none"}}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px"  color='white'  />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        _hover={{bg:"none"}}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" color='white'  />
      </IconButton>
      </Box>
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box   key={index}>
        <Image src={card.image.toString()}  />


        
        <Button onClick={()=> router.push("/Shop")}   borderRadius={"20px"}  bg="#372a28"  _hover={{
          bg:"#c7cdc5"
        }} zIndex={1} mt="-20%" ml={"75%"} padding="10">
          <Text color={"white"} fontSize="50px" fontStyle={"normal"} fontWeight="700" >
         Satın Al
          </Text>
          </Button>
        </Box>
        ))}

      </Slider>
      </>
  );
}