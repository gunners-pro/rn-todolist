import React from 'react';
import Checkbox from 'expo-checkbox';
import { Text, HStack, IconButton, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { ITask, useTasks } from '../context/taskContext';

type Props = {
  task: ITask;
};

export function Task({ task }: Props) {
  const { colors } = useTheme();
  const { removeTask, updateCompleteTask } = useTasks();

  return (
    <HStack
      mx={6}
      p="4"
      mb="3"
      space={5}
      bg="gray.500"
      alignItems="center"
      borderWidth={1}
      borderColor="gray.400"
      borderRadius="lg"
    >
      <Checkbox
        value={task.done}
        onValueChange={() => updateCompleteTask(task.id)}
        style={{
          borderRadius: 100,
        }}
        color={task.done ? '#5e60ce' : '#4ea8de'}
      />
      <Text
        flex={1}
        color="gray.100"
        fontSize={15}
        lineHeight="xl"
        textAlign="justify"
        strikeThrough={task.done}
      >
        {task.title}
      </Text>

      <IconButton onPress={() => removeTask(task.id)}>
        <Feather name="trash-2" color={colors.gray[300]} size={20} />
      </IconButton>
    </HStack>
  );
}
