import {Alert} from 'react-native';
import React from 'react';

function SomethingWentWrong({navigation}) {
  Alert.alert(
    'Something Went Wrong',
    "Oops, something must have gone wrong. Don't worry, we're working on the fix!",
    [{text: 'Go Back', onPress: () => navigation.pop()}],
    {cancelable: false},
  );
}

export default SomethingWentWrong;
