import React from 'react';
import { Center, VStack } from 'native-base';
import Lottie from 'lottie-react-native';

import Logo from '../assets/logo.svg';
import Rocket from '../assets/rocket.json';

export function Header() {
  return (
    <VStack h="250" bg="gray.700">
      <Center h="full" flexDir="row">
        <Lottie
          source={Rocket}
          autoPlay
          loop
          style={{ width: 60, height: 60 }}
        />
        <Logo height={120} width={120} />
      </Center>
    </VStack>
  );
}
