import {useColorScheme} from 'react-native-appearance';
import React from 'react';

export default function ThemeColours() {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const white = isDarkMode ? '#000' : '#fff';
  const black = isDarkMode ? '#fff' : '#000';
  const darkGrey = '#2f3336';
  const grey = isDarkMode ? 'lightgrey' : 'grey';

  return {white, black, grey, darkGrey};
}
