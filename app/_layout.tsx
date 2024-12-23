import 'tailwindcss/tailwind.css';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme, ThemeProvider } from '../contexts/ThemeContext';
import { TouchableOpacity, Text } from 'react-native';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutNavigator />
    </ThemeProvider>
  );
}

function RootLayoutNavigator() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Habit Tracker', headerRight: () => (<TouchableOpacity onPress={toggleTheme}><Text>{isDarkMode ? 'Light' : 'Dark'}</Text></TouchableOpacity>) }} />
        <Stack.Screen name="add" options={{ title: 'Add Habit' }} />
      </Stack>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </>
  );
}
