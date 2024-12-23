import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';

const AddHabitScreen = () => {
  const [habitName, setHabitName] = useState('');
  const router = useRouter();
  const { isDarkMode } = useTheme();

  const handleAddHabit = () => {
    if (habitName.trim()) {
      router.push({
        pathname: '/',
        params: { newHabitName: habitName },
      });
    }
  };

  return (
    <View className={`flex-1 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Text className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Add New Habit</Text>
      <TextInput
        className={`border rounded p-2 mb-4 ${isDarkMode ? 'bg-gray-800 text-white border-gray-700' : 'border-gray-300'}`}
        placeholder="Habit name"
        value={habitName}
        onChangeText={setHabitName}
      />
      <Button title="Add Habit" onPress={handleAddHabit} />
    </View>
  );
};

export default AddHabitScreen;