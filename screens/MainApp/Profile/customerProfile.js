/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
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
import CustomInput from '../../../components/CommonComponents/CustomInput';
import CustomButton from '../../../components/CommonComponents/CustomButton';

const CustomerProfile = ({navigation}) => {
  const [locality, setLocality] = useState('');
  const [appartment, setAppartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

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
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={90}
          style={[globalStyles().container, {padding: 20, marginTop: -25}]}>
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
                opacity: 0.3,
                textDecorationLine: 'underline',
              }}>
              Edit Personal Details
            </Text>
          </TouchableOpacity>
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Locality</Text>
            <CustomInput
              placeholder={'Locality'}
              input={locality}
              setInput={setLocality}
            />
            <Text style={styles.text}>Appartment/Suite</Text>
            <CustomInput
              placeholder={'Appartment/Suite'}
              input={locality}
              setInput={setLocality}
            />
            <Text style={styles.text}>City</Text>
            <CustomInput
              placeholder={'City'}
              input={locality}
              setInput={setLocality}
            />
            <Text style={styles.text}>State</Text>
            <CustomInput
              placeholder={'State'}
              input={locality}
              setInput={setLocality}
            />
            <Text style={styles.text}>Pincode</Text>
            <CustomInput
              placeholder={'Pincode'}
              input={locality}
              setInput={setLocality}
            />
            <CustomButton text={'Update'} />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CustomerProfile;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
    flex: 1,
  },
});
