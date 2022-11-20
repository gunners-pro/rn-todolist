import React from 'react';
import { Heading, Flex, HStack, Text } from 'native-base';
import { useTasks } from '../context/taskContext';

export function Hud() {
  const { tasks } = useTasks();

  const totalCreatedTasks = tasks.reduce((acc, task) => {
    if (task.done) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <Flex justify="space-between" direction="row" mt={10} mb={6} mx={6}>
      <HStack space={2}>
        <Heading color="product.blue" fontSize={18}>
          Criadas
        </Heading>
        <Text
          color="gray.200"
          bg="gray.400"
          minW={25}
          px={2}
          h="5"
          rounded={10}
          textAlign="center"
        >
          {tasks.length}
        </Text>
      </HStack>
      <HStack space={2}>
        <Heading color="product.purple" fontSize={18}>
          Concluídas
        </Heading>
        <Text
          color="gray.200"
          bg="gray.400"
          minW={25}
          px={2}
          h="5"
          rounded={10}
          textAlign="center"
        >
          {totalCreatedTasks}
        </Text>
      </HStack>
    </Flex>
  );
}
