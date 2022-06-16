import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholder,
  content,
  autoComplete,
  input,
  setInput,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType="default"
      autoComplete={autoComplete}
      textContentType={content}
      value={input}
      onChangeText={text => setInput(text)}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderColor: '#2f3336',
    borderWidth: 2,
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginTop: 10,
    fontSize: 15,
  },
});
