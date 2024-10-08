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
import {useDispatch, useSelector} from 'react-redux';
import {createStore} from '../../store/actions/store';
import {Eye, EyeOff} from 'react-native-feather';
import CustomInput from '../../components/CommonComponents/CustomInput';
import CustomButton from '../../components/CommonComponents/CustomButton';

export default function StoreSignup({navigation}) {
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [open, setOpen] = useState(false);
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const black = isDarkMode ? '#fff' : '#000';

  const dispatch = useDispatch();
  const store = useSelector(state => state.store);

  const createStoreFunction = () => {
    dispatch(createStore());
    navigation.navigate('InstaBrowser');
    setOpen(true);
  };

  const handleSignup = () => {
    createStoreFunction();
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
            Sign Up As A Store 😉
          </Text>
          <CustomInput
            placeholder={'Unique Signup Code'}
            type={'numeric'}
            input={code}
            setInput={setCode}
          />
          <CustomInput
            placeholder={'Email'}
            input={email}
            setInput={setEmail}
            content={'emailAddress'}
            autoComplete={'email'}
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
          <CustomButton text={'Sign Up'} press={handleSignup} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StoreLogin');
            }}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 25,
              }}>
              Have An Account Already?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Login</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NoCode');
            }}>
            <Text
              style={{
                color: ThemeColours().black,
                fontSize: 16,
                textAlign: 'center',
                marginTop: 10,
              }}>
              Don't Have A Signup Code?{' '}
              <Text style={{textDecorationLine: 'underline'}}>Get Code</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
