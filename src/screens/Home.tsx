import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Input,
  Button,
  useTheme,
  FlatList,
  useToast,
  Box,
} from 'native-base';
import { Feather } from '@expo/vector-icons';
import { LayoutAnimation } from 'react-native';
import { Header } from '../components/Header';
import { Hud } from '../components/Hud';
import { Task } from '../components/Task';
import { useTasks } from '../context/taskContext';
import { EmptyTasks } from '../components/EmptyTasks';

export function Home() {
  const { colors } = useTheme();
  const toastInputEmpty = useToast();
  const [newTask, setNewTask] = useState('');
  const { tasks, addNewTask } = useTasks();

  function handleNewTask() {
    LayoutAnimation.easeInEaseOut();
    if (newTask.length <= 0) {
      toastInputEmpty.show({
        render: () => (
          <Box bg="product.blue" px="2" py="2">
            Preencha o campo
          </Box>
        ),
      });
      return;
    }

    addNewTask(newTask);

    setNewTask('');
  }

  return (
    <VStack bg="gray.600" h="full" w="full" flex={1}>
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
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button w={52} h={52} bg="product.blueDark" onPress={handleNewTask}>
          <Feather name="plus-circle" size={18} color={colors.gray[100]} />
        </Button>
      </HStack>
      <Hud />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task task={item} />}
        ListEmptyComponent={<EmptyTasks />}
      />
    </VStack>
  );
}
