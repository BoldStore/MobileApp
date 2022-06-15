import {
  Image,
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
// import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import React, {useState} from 'react';
import {login} from '../../services/authentication';
import {Eye, EyeOff} from 'react-native-feather';

export default function CustomerLogin({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [error, setError] = useState('');
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const black = isDarkMode ? '#fff' : '#000';

  const handleLogin = () => {
    if (email != '' || password != '') {
      const res = login(email, password);
      if (res) {
        console.log('res', res);
        if (res.error) {
          setError(res.error);
        } else {
          navigation.navigate('CustomerTabs');
          setError('');
        }
      }
    } else {
      setError('All fields are mandatory!');
    }
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
          <Text style={globalStyles().heading}>Login As A Customer 😎 </Text>

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
          <View
            style={[
              globalStyles().input,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              style={{fontSize: 16, flex: 1, marginRight: 5, color: black}}
              value={password}
              placeholder="Password"
              keyboardType="default"
              secureTextEntry={securePassword}
              textContentType="password"
              autoCompleteType="password"
            />
            {password != '' ? (
              <TouchableOpacity
                onPress={() => {
                  setSecurePassword(!securePassword);
                }}>
                {securePassword ? (
                  <Eye height={22} width={22} stroke={black} />
                ) : (
                  <EyeOff height={22} width={22} stroke={black} />
                )}
              </TouchableOpacity>
            ) : (
              <></>
            )}
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
            onPress={handleLogin}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
              }}>
              Login{' '}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              color: ThemeColours().black,
              fontSize: 16,
              textAlign: 'center',
              marginVertical: error != '' ? 20 : 0,
            }}>
            {error}
          </Text>

          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Forgot Your Password?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Reset.</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('CustomerSignUp')}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Don't Have an Account?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Signup</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
