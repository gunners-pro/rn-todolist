import React, { useState } from 'react';
import { Text, HStack, Checkbox, IconButton, useTheme } from 'native-base';
import { Feather } from '@expo/vector-icons';

export function Task() {
  const [taskDone, setTaskdone] = useState(false);
  const { colors } = useTheme();

  return (
    <HStack
      mx={6}
      p="4"
      space={5}
      bg="gray.500"
      alignItems="center"
      borderWidth={1}
      borderColor="gray.400"
      borderRadius="lg"
    >
      <Checkbox
        value="task"
        isChecked={taskDone}
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
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <IconButton>
        <Feather name="trash-2" color={colors.gray[300]} size={20} />
      </IconButton>
    </HStack>
  );
}
