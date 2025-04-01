import { HStack, VStack, Text, Image, Box, Tag } from '@chakra-ui/react';
import React from 'react';
import { formatPrice } from '../utils/helpers';

function OrderItemsList({ orderItems }) {
  return (
    <VStack alignItems='flex-start' spacing='4'>
      {orderItems.map((item, index) => {
        const { name, description, price, quantity, images, color, size } = item;
        return (
          <HStack key={index} alignItems='flex-start' spacing='5'>
            <Image
              src={images?.[0]?.url || "/logo512.png"}
              boxSize='100px'
              objectFit='cover'
              borderRadius='lg'
            />
            <VStack alignItems='flex-start'>
              <HStack spacing='3'>
                <Text as='b'>{name}</Text>
                <Box bg={color} p='2' borderRadius='5' />
                <Tag
                  variant='outline'
                  colorScheme='brown'
                  size='sm'
                  textTransform='uppercase'
                >
                  {size}
                </Tag>
              </HStack>
              {name?.toLowerCase().includes('custom') && (
                <div>
                  <Text>
                    {description}
                  </Text>

                  <div className='flex flex-wrap gap-4'>
                    {images.slice(1).map(img => (
                      <Image
                        src={images?.[0]?.url || "/logo512.png"}
                        boxSize='100px'
                        objectFit='cover'
                        borderRadius='lg'
                      />
                    ))}
                  </div>
                </div>
              )}
              <Text color='green'>{formatPrice(price)}</Text>
              <Text color='blue'>{quantity}</Text>
            </VStack>
          </HStack>
        );
      })}
    </VStack>
  );
}

export default OrderItemsList;
