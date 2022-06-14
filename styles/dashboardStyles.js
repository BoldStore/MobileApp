import {useColorScheme} from 'react-native-appearance';
import {StyleSheet} from 'react-native';
import ThemeColours from './themeColours';
import React from 'react';

export default function dashboardStyles() {
  return StyleSheet.create({
    group: {
      marginVertical: 30,
      width: '100%',
    },
    flexDiv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    heading: {
      fontSize: 18,
      color: ThemeColours().black,
      textAlign: 'left',
    },
    text: {
      fontSize: 18,
      color: ThemeColours().black,
      textAlign: 'right',
    },
  });
}
