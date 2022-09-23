import React from 'react';
import { Center, Image, Text } from 'native-base';
import ClipboardImg from '../assets/clipboard.png';

export function EmptyTasks() {
  return (
    <Center borderTopWidth={2} borderTopColor="gray.400" py="12" mx={6}>
      <Image source={ClipboardImg} alt="Imagem clipboard" mb="4" />
      <Text color="gray.300" fontSize={17} fontWeight="bold" lineHeight="lg">
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text color="gray.300" fontSize={16} lineHeight="lg">
        Crie tarefas e organize seus itens a fazer
      </Text>
    </Center>
  );
}
