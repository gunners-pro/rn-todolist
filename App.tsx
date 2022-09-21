import React from 'react';
import { NativeBaseProvider, Box, Center } from 'native-base';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { theme } from './src/styles/theme';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Center height="full">
        <Box>Olá mundo !</Box>
      </Center>
    </NativeBaseProvider>
  );
}
