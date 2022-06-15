import {useColorScheme} from 'react-native-appearance';
import {Dimensions, StyleSheet} from 'react-native';
import ThemeColours from './themeColours';
import React from 'react';

export default function globalStyles() {
  return StyleSheet.create({
    container: {
      backgroundColor: ThemeColours().white,
      color: ThemeColours().black,
      flex: 1,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container2: {
      backgroundColor: ThemeColours().white,
      color: ThemeColours().black,
      flex: 1,
    },
    heading: {
      fontSize: 26,

      textAlign: 'center',
      color: ThemeColours().black,
      marginVertical: 10,
    },
    subHeading: {
      fontSize: 26,

      textAlign: 'center',
    },
    btn: {
      // flex: 1,
      backgroundColor: ThemeColours().white,
      textAlign: 'center',
      color: ThemeColours().black,
      borderRadius: 5,
      borderWidth: 0.5,
      borderColor: ThemeColours().grey,
      fontSize: 16,
      padding: 10,
      width: '100%',

      marginVertical: 10,

      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: Dimensions.get('window').width - 40,
      maxWidth: 700,
    },
    btn2: {
      // flex: 1,
      backgroundColor: ThemeColours().black,
      textAlign: 'center',
      color: ThemeColours().white,
      borderRadius: 5,
      borderWidth: 0.5,
      fontSize: 16,
      padding: 10,
      width: '100%',
      marginVertical: 10,

      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: Dimensions.get('window').width - 40,
      maxWidth: 700,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: ThemeColours().grey,
      padding: 10,
      paddingLeft: 0,
      fontSize: 16,

      color: ThemeColours().black,
      marginVertical: 10,
      width: Dimensions.get('window').width - 40,
      maxWidth: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    aboveInput: {
      textAlign: 'left',
      fontSize: 16,

      color: ThemeColours().black,
    },
    flatListContainer: {
      overflow: 'hidden',
      backgroundColor: ThemeColours().white,
      alignItems: 'center',
      width: Dimensions.get('window').width,
      maxWidth: 700,
      borderWidth: 0,
    },
  });
}
