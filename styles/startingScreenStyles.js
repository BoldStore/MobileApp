import {useColorScheme} from 'react-native-appearance';
import {StyleSheet} from 'react-native';
import ThemeColours from './themeColours';
import React from 'react';

export default function startingScreenStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: ThemeColours().white,
      color: ThemeColours().black,
      width: 150,
      borderWidth: 0.25,
      borderColor: ThemeColours().black,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 5,
    },
    subHeading: {
      marginHorizontal: 5,
      fontSize: 8,
      color: ThemeColours().black,
      fontFamily: 'Medium',
      fontWeight: '600',
    },
    imgContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 5,
      paddingVertical: 5,
    },
  });
}
