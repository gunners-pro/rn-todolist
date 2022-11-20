import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { theme } from './src/styles/theme';
import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { TaskProvider } from './src/context/taskContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <TaskProvider>
        <Home />
      </TaskProvider>
    </NativeBaseProvider>
  );
}
