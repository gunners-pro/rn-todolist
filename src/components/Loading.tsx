import React from 'react';
import {
  Center,
  Heading,
  NativeBaseProvider,
  Spinner,
  StatusBar,
} from 'native-base';
import { theme } from '../styles/theme';

export function Loading() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center height="full" bg="gray.600">
        <Spinner color="product.blue" size="lg" />
        <Heading color="primary.500" fontSize="md">
          Carregando...
        </Heading>
      </Center>
    </NativeBaseProvider>
  );
}
