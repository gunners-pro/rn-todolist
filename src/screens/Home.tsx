import React from 'react';
import { VStack, HStack, Input, Button, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { Header } from '../components/Header';

export function Home() {
  const { colors } = useTheme();

  return (
    <VStack bg="gray.600" h="full" w="full">
      <Header />
      <HStack space={2} mx={6} mt={-27} h={54}>
        <Input
          flex={1}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="gray.300"
          color="gray.100"
          fontSize={16}
          borderWidth={0}
          bg="gray.500"
          blurOnSubmit
          _focus={{
            borderColor: 'product.purpleDark',
            borderWidth: 1,
            selectionColor: '#f2f2f2',
            bg: 'gray.500',
          }}
        />
        <Button w={52} h={52} bg="product.blueDark">
          <Feather name="plus-circle" size={18} color={colors.gray[100]} />
        </Button>
      </HStack>
    </VStack>
  );
}
