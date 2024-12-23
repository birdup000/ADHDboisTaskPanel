import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Habit } from '../types/Habit';
import { useTheme } from '../contexts/ThemeContext';

interface HabitItemProps {
  habit: Habit;
  onDayToggle: (dayIndex: number) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onDayToggle }) => {
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const { isDarkMode } = useTheme();

  const toggleDay = useCallback((dayIndex: number) => {
    onDayToggle(dayIndex);
  }, [onDayToggle]);

  return (
    <View className={`flex-row items-center p-2 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <Text className={`flex-1 text-base ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{habit.name}</Text>
      <View className="flex-row">
        {habit.days.map((isCompleted, index) => (
          <TouchableOpacity
            key={index}
            className={`w-7 h-7 rounded-full border justify-center items-center mx-0.5 ${
              isCompleted
                ? 'bg-green-500 border-green-500'
                : isDarkMode
                ? 'border-gray-600'
                : 'border-gray-300'
            }`}
            onPress={() => toggleDay(index)}
          >
            <Text className={`${isCompleted ? 'text-white' : isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{daysOfWeek[index]}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HabitItem;