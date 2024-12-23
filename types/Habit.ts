export interface Habit {
  id: string;
  name: string;
  days: boolean[]; // Array of booleans for each day of the week
}