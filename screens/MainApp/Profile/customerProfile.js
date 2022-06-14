import React, {useCallback, useEffect, useState} from 'react';
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
  View,
} from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import ThemeColours from '../../../styles/themeColours';
import CompleteSignupAlert from '../../../functions/completeSignup';

const CustomerProfile = ({navigation}) => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    CompleteSignupAlert();
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles().container2}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={[globalStyles().container, {padding: 20}]}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/dummyClothes/dress4.jpeg')}
            style={{
              width: 90,
              height: 90,
              marginTop: 20,
              borderRadius: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
          <Text style={globalStyles().heading}>Avi Vashishta</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('EditCustomerProfile');
            }}>
            <Text
              style={{
                color: ThemeColours().black,
                textAlign: 'center',
                fontSize: 14,
                fontFamily: 'Regular',
                opacity: 0.3,
                textDecorationLine: 'underline',
              }}>
              Edit Personal Details
            </Text>
          </TouchableOpacity>
          <View style={{marginVertical: 10}}>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Address Line 1</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setAddressLine1(text);
                }}
                value={addressLine1}
                placeholder="Address Line 1"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Address Line 2</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setAddressLine2(text);
                }}
                value={addressLine2}
                placeholder="Address Line 2"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>City</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setCity(text);
                }}
                value={city}
                placeholder="City"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>State</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setState(text);
                }}
                value={state}
                placeholder="State"
                // keyboardType="default"
              />
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={globalStyles().aboveInput}>Pincode</Text>
              <TextInput
                style={globalStyles().input}
                onChangeText={text => {
                  setPincode(text);
                }}
                value={pincode}
                placeholder="Pincode"
                // keyboardType="default"
              />
            </View>
            <TouchableOpacity style={globalStyles().btn}>
              <Text
                style={{
                  color: ThemeColours().grey,
                  textAlign: 'center',
                  fontSize: 14,
                  fontFamily: 'Regular',
                }}>
                Update
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={globalStyles().btn2}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 14,
                  fontFamily: "Regular",
                }}
              >
                Logout
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CustomerProfile;
