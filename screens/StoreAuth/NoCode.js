import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import React, {useState} from 'react';
import AskForCode from '../../functions/askForCode';

export default function NoCode({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={globalStyles().container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{width: '100%', padding: 20}}>
          <Text style={[globalStyles().heading, {marginBottom: 40}]}>
            Join Bold As A Store 🚀
          </Text>

          <Text style={globalStyles().aboveInput}>Instagram Username</Text>
          <View
            style={[
              globalStyles().input,
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              },
            ]}>
            <Text
              style={{
                marginRight: 5,
                fontWeight: 'bold',
                color: ThemeColours().black,
              }}>
              @
            </Text>
            <TextInput
              style={{fontSize: 16}}
              onChangeText={text => {
                setUsername(text);
              }}
              value={username}
              placeholder="username"
              // keyboardType="default"
            />
          </View>
          <TextInput
            style={globalStyles().input}
            onChangeText={text => {
              setEmail(text);
            }}
            value={email}
            placeholder="Email"
            keyboardType="default"
            textContentType="emailAddress"
            autoCompleteType="email"
          />

          <TouchableOpacity
            style={[
              globalStyles().btn,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 20,
              },
            ]}
            onPress={AskForCode}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Ask for Code{' '}
            </Text>
          </TouchableOpacity>
          <Text style={[globalStyles().aboveInput, {textAlign: 'center'}]}>
            We believe in personally verifying your Instagram account.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
