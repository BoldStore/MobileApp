import {firebase} from '@react-native-firebase/auth';
import React from 'react';

export const getFirebaseToken = async () => {
  const token = await firebase.auth().currentUser.getIdToken();

  return token;
};
