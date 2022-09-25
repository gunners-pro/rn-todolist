import React, { useState } from 'react';
import { Text, HStack, Checkbox, IconButton, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { ITask } from '../screens/Home';

type Props = {
  task: ITask;
  removeTask: (id: string) => void;
};

export function Task({ task, removeTask }: Props) {
  const [taskDone, setTaskdone] = useState(false);
  const { colors } = useTheme();

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
        value={task.title}
        isChecked={task.done}
        onChange={e => setTaskdone(e)}
        accessibilityLabel="this is a checkbox"
        bg="gray.500"
        borderRadius="full"
        borderColor="product.blue"
        _checked={{
          borderColor: 'product.purpleDark',
          bg: 'product.purpleDark',
        }}
      />
      <Text
        flex={1}
        color="gray.100"
        fontSize={15}
        lineHeight="xl"
        textAlign="justify"
        strikeThrough={taskDone}
      >
        {task.title}
      </Text>

      <IconButton onPress={() => removeTask(task.id)}>
        <Feather name="trash-2" color={colors.gray[300]} size={20} />
      </IconButton>
    </HStack>
  );
}
