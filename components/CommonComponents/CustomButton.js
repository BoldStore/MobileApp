import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({text, href, press}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={press}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#E7E9E9',
    borderWidth: 1,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
