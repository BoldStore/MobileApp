/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyles from '../../../styles/globalStyles';
import ThemeColours from '../../../styles/themeColours';
import {updateUser} from '../../../store/actions/user';
import CustomInput from '../../../components/CommonComponents/CustomInput';
import SecondaryButton from '../../../components/CommonComponents/SecondaryButton';

const EditCustomerProfile = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const preferences = ['Xs', 'S', 'M', 'L', 'Xl'];
  const [myPreference, setMyPreference] = useState('M');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const updateData = () => {
    dispatch(updateUser(name, age, myPreference));
  };

  useLayoutEffect(() => {
    updateData();
  }, []);

  return (
    <ScrollView
      style={globalStyles().container2}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={[globalStyles().container, {padding: 20}]}>
          <View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Name</Text>
              <CustomInput
                placeholder={'Full Name'}
                input={name}
                setInput={setName}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Age</Text>
              <CustomInput placeholder={'Age'} input={age} setInput={setAge} />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Email</Text>
              <CustomInput
                placeholder={'Email'}
                input={email}
                setInput={setEmail}
                content={'emailAddress'}
                autoComplete={'email'}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Phone Number</Text>
              <CustomInput
                placeholder={'Phone Number'}
                input={phoneNumber}
                setInput={setPhoneNumber}
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Preference</Text>
              <View style={styles.flexPreference}>
                {preferences.map((preference, index) => {
                  var color;
                  var backgroundColor;
                  preference === myPreference
                    ? ((color = ThemeColours().white),
                      (backgroundColor = ThemeColours().black))
                    : ((color = ThemeColours().black),
                      (backgroundColor = ThemeColours().white));
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setMyPreference(preference);
                      }}>
                      <View
                        style={[
                          styles.preference,
                          {
                            color: color,
                            backgroundColor: backgroundColor,
                            borderRadius: 5,
                            borderColor: ThemeColours().black,
                          },
                        ]}>
                        <Text
                          style={{
                            textAlign: 'center',
                            color: color,
                            textTransform: 'uppercase',
                          }}>
                          {preference}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={{marginVertical: 10}}>
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
                  style={{color: '#fff', fontSize: 15, width: '100%'}}
                  onChangeText={text => {
                    setUsername(text);
                  }}
                  value={username}
                  placeholder="username"
                />
              </View>
            </View>
            <SecondaryButton text={'Save'} press={() => navigation.pop()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default EditCustomerProfile;

const styles = StyleSheet.create({
  preference: {
    width: Dimensions.get('window').width / 5 - 20,
    padding: 10,
    margin: 5,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 5,
  },
  flexPreference: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
