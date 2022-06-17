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

export default function GetInstagramUsername({navigation}) {
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    navigation.navigate('CustomerTabs');
  };
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
            You're Almost There 🥳
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

          <TouchableOpacity
            style={[
              globalStyles().btn,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 20,
              },
            ]}
            onPress={handleSignup}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Connect Your Instagram Store
            </Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            This will improve your experience using this app.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
