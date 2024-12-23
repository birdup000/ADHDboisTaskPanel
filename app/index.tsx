import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import HabitItem from '../components/HabitItem';
import { Habit } from '../types/Habit';
import { useTheme } from '../contexts/ThemeContext';
import { useRouter, useLocalSearchParams } from 'expo-router';

const dummyHabitsData: Habit[] = [
  { id: '1', name: 'Drink Water', days: [false, true, true, false, true, false, true] },
  { id: '2', name: 'Exercise', days: [true, false, true, true, false, true, false] },
  { id: '3', name: 'Read', days: [true, true, false, true, true, true, true] },
];

const IndexScreen = () => {
  const [habits, setHabits] = useState(dummyHabitsData);
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const { newHabitName } = useLocalSearchParams();

  useEffect(() => {
    if (newHabitName) {
      const newHabit = {
        id: String(Date.now()),
        name: newHabitName as string,
        days: Array(7).fill(false),
      };
      setHabits((prevHabits) => [...prevHabits, newHabit]);
    }
  }, [newHabitName]);

  const handleDayToggle = (habitId: string, dayIndex: number) => {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === habitId) {
        const updatedDays = [...habit.days];
        updatedDays[dayIndex] = !updatedDays[dayIndex];
        return { ...habit, days: updatedDays };
      }
      return habit;
    });
    setHabits(updatedHabits);
  };

  return (
    <View className={`flex-1 p-2 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <View className="flex-row justify-between items-center mb-4">
        <Text className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Habits</Text>
        <Button title="Add Habit" onPress={() => router.push('/add')} />
      </View>
      <FlatList
        data={habits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <HabitItem
            habit={item}
            onDayToggle={(dayIndex) => handleDayToggle(item.id, dayIndex)}
          />
        )}
      />
    </View>
  );
};

export default IndexScreen;