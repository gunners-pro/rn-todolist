import React from 'react';
import { Heading, Flex, HStack, Text } from 'native-base';

export function Hud() {
  return (
    <Flex justify="space-between" direction="row" mt={10} mx={6}>
      <HStack space={2}>
        <Heading color="product.blue" fontSize={18}>
          Criadas
        </Heading>
        <Text
          color="gray.200"
          bg="gray.400"
          w={25}
          h="5"
          rounded={10}
          textAlign="center"
        >
          0
        </Text>
      </HStack>
      <HStack space={2}>
        <Heading color="product.purple" fontSize={18}>
          Concluídas
        </Heading>
        <Text
          color="gray.200"
          bg="gray.400"
          w={25}
          h="5"
          rounded={10}
          textAlign="center"
        >
          0
        </Text>
      </HStack>
    </Flex>
  );
}
