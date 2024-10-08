import {useColorScheme} from 'react-native-appearance';
import {StyleSheet} from 'react-native';
import ThemeColours from './themeColours';
import React from 'react';

export default function profileStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: ThemeColours().white,
      color: ThemeColours().black,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 0,
      flex: 1,
    },
    heading: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: '600',
      color: ThemeColours().black,
    },
    subHeading: {
      fontSize: 14,
      textAlign: 'center',
      marginVertical: 10,
      opacity: 0.5,
      fontWeight: '500',
      color: ThemeColours().black,
    },

    imgBox: {
      borderWidth: 0.5,
      borderColor: ThemeColours().white,
    },
  });
}
