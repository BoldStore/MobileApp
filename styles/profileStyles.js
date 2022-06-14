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
      fontFamily: 'Medium',
      textAlign: 'center',
      fontWeight: '600',
      color: ThemeColours().black,
    },
    subHeading: {
      fontSize: 14,
      fontFamily: 'Regular',
      textAlign: 'center',
      opacity: 0.5,
      marginVertical: 10,
      fontWeight: '900',
      color: ThemeColours().black,
    },

    imgBox: {
      borderWidth: 0.5,
      borderColor: ThemeColours().white,
    },
  });
}
