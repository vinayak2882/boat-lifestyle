import { Box, Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData_GAMING } from '../../Redux/OfferZone/action'
// test

import {
    Flex,
    Circle,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
  interface RatingProps {
    rating: number;
    numReviews: number;
  }
   
   

const Gaming = () => {
    const products = useSelector((store)=>store.ecommerceData.Gaming)
   const dispatch =useDispatch()
    useEffect(()=>{
    if(products?.length===0){
        dispatch(fetchData_GAMING())
    }
   },[dispatch,products?.length])
   
    console.log(products)
  return (
    <Box>
       
        <Box>
            <Heading textAlign='center' padding='5' color="white"  as='h2'>Gaming</Heading>
            <Flex justifyContent='space-evenly'>
                {products.map(product=>{
                    return <ProductAddToCart key ={product.id} image={product.image} title={product.title} price={product.price} rating={product.rating.rate} reviews={product.rating.count}/>
                })}
            </Flex>

            
        </Box>
    </Box>
  )
}



  
  function Rating({ rating, numReviews }: RatingProps) {
    return (
      <Box display='flex' alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductAddToCart({image,price,title,rating,reviews}) {
    return (
      <Flex p={2} w="full" width='23%' alignItems="center" justifyContent="center" >
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image 
            src={image}
            alt={`Picture of ${title}`}
            roundedTop="lg"
            bgColor='#e3e3e3'
          />
  
          <Box p="6" borderTop="4px solid gray"  borderRadius='5px'>
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  BEST SELLER
                </Badge>
              )}
            </Box>
            
              <Box
                fontSize="1xl"
                fontWeight="semibold"
                as="h5"
                lisneHeight="tight"
                isTruncated
                marginBottom='5px'
                marginTop='5px'>
                
                {title}
              </Box>
              
            
  
            <Flex justifyContent="space-between" alignContent="center" >
              <Rating d='flex' rating={rating} numReviews={reviews} />
              
            </Flex>
            <Box  fontWeight="semibold" fontSize="2xl" color={useColorModeValue('red.400', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹ 
                </Box >
                
                {price.toFixed(2)}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
          </Box>
         
        </Box>
        
      </Flex>
    );
  }
  

export default Gaming
