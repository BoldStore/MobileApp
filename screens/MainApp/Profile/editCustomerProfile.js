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
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
                placeholder="Full Name"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Age</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setAge(text);
                }}
                value={age}
                placeholder="Age"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Email</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={email}
                placeholder="Email"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Phone Number</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setPhoneNumber(text);
                }}
                value={phoneNumber}
                placeholder="Phone Number"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Preference</Text>
              <View style={styles.flexPreference}>
                {preferences.map((preference, index) => {
                  var color;
                  var backgroundColor;
                  preference == myPreference
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
                  style={{fontSize: 16}}
                  onChangeText={text => {
                    setUsername(text);
                  }}
                  value={username}
                  placeholder="username"
                  // keyboardType="default"
                />
              </View>
            </View>

            <TouchableOpacity
              style={globalStyles().btn2}
              onPress={() => {
                navigation.pop();
              }}>
              <Text
                style={{
                  color: ThemeColours().white,
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                Save
              </Text>
            </TouchableOpacity>
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
