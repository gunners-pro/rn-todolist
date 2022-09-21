import React from 'react';
import { Center, VStack } from 'native-base';

import Logo from '../assets/logo.svg';

export function Header() {
  return (
    <VStack h="250" bg="gray.700">
      <Center h="full">
        <Logo height={200} width={150} />
      </Center>
    </VStack>
  );
}
