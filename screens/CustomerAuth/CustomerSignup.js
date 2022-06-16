/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import React, {useState} from 'react';
import {signup} from '../../services/authentication';
import {Eye, EyeOff} from 'react-native-feather';
import CustomButton from '../../components/CommonComponents/CustomButton';
import CustomInput from '../../components/CommonComponents/CustomInput';

export default function CustomerSignUp({navigation}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [error, setError] = useState('');
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const black = isDarkMode ? '#fff' : '#000';

  const handleSignup = () => {
    if (
      fullName !== '' ||
      email !== '' ||
      password !== '' ||
      confirmPassword !== ''
    ) {
      if (password != confirmPassword) {
        setError("Passwords don't match");
      } else {
        const res = signup(email, password);
        if (res) {
          console.log('error', res.error);
          if (res.error) {
            setError(res.error);
          } else {
            navigation.navigate('GetInstagramUsername');
          }
        }
        setError('');
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
          <Text style={globalStyles().heading}>Sign Up As A Customer 🥳 </Text>
          <CustomInput
            placeholder={'Full Name'}
            content="givenName"
            autoComplete={'name'}
            input={fullName}
            setInput={setFullName}
          />
          {/* <TextInput
            style={globalStyles().input}
            onChangeText={text => {
              setFullName(text);
            }}
            value={fullName}
            placeholder="Full Name"
            keyboardType="default"
            textContentType="givenName"
            autoCompleteType="name"
          /> */}
          <CustomInput
            placeholder={'Email'}
            content={'emailAddress'}
            autoComplete={'email'}
            input={email}
            setInput={setEmail}
          />
          {/* <TextInput
            style={globalStyles().input}
            onChangeText={text => {
              setEmail(text);
            }}
            value={email}
            placeholder="Email"
            keyboardType="default"
            textContentType="emailAddress"
            autoCompleteType="email"
          /> */}
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
            {password !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  setSecurePassword(!securePassword);
                }}>
                {securePassword ? (
                  <Eye height={18} width={18} stroke={black} />
                ) : (
                  <EyeOff height={18} width={18} stroke={black} />
                )}
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
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
                setConfirmPassword(text);
              }}
              style={{fontSize: 16, flex: 1, marginRight: 5, color: black}}
              value={confirmPassword}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={secureConfirmPassword}
              textContentType="password"
              autoCompleteType="password"
            />
            {confirmPassword !== '' ? (
              <TouchableOpacity
                onPress={() => {
                  setSecureConfirmPassword(!secureConfirmPassword);
                }}>
                {secureConfirmPassword ? (
                  <Eye height={18} width={18} stroke={black} />
                ) : (
                  <EyeOff height={18} width={18} stroke={black} />
                )}
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
          <CustomButton press={handleSignup} text={'Sign Up'} />
          {/* <TouchableOpacity
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
              Signup{' '}
            </Text>
          </TouchableOpacity> */}
          <Text
            style={{
              color: ThemeColours().black,
              fontSize: 16,
              textAlign: 'center',
              marginVertical: error != '' ? 20 : 0,
            }}>
            {error}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('CustomerTabs')}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Or Skip Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('CustomerLogin')}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 20,
              }}>
              Have an Account Already?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Login</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
