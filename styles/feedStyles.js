import {useColorScheme} from 'react-native-appearance';
import {Dimensions, StyleSheet} from 'react-native';
import ThemeColours from './themeColours';
import React from 'react';

export default function feedStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: ThemeColours().white,
      color: ThemeColours().black,
      width: Dimensions.get('window').width,
      borderWidth: 0.5,
      borderColor: ThemeColours().white,
      marginVertical: 10,
      zIndex: 100,
    },
    topContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,
    },
    subHeading: {
      marginHorizontal: 10,
      fontSize: 12,
      color: ThemeColours().black,
      fontFamily: 'Inter-Bold',
      fontWeight: '600',
    },
    imgContainer: {
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 10,
      paddingVertical: 5,
    },
  });
}
