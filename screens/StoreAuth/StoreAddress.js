/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Keyboard,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import React, {useCallback, useState} from 'react';
import CustomInput from '../../components/CommonComponents/CustomInput';
import CustomButton from '../../components/CommonComponents/CustomButton';

export default function StoreSignup2({navigation}) {
  const [locality, setLocality] = useState('');
  const [appartment, setAppartment] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSignup = () => {
    navigation.pop();
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
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
          <Text style={[globalStyles().heading, {marginBottom: 40}]}>
            Delivery Pickup Address 🏠
          </Text>
          <View style={{marginVertical: 10, width: '100%'}}>
            <View style={{marginBottom: 15}}>
              <Text style={globalStyles().aboveInput}>Locality</Text>
              <CustomInput
                placeholder={'Locality'}
                input={locality}
                setInput={setLocality}
              />
            </View>
            <View style={{marginBottom: 15}}>
              <Text style={globalStyles().aboveInput}>Appartment</Text>
              <CustomInput
                placeholder={'Appartment'}
                input={appartment}
                setInput={setAppartment}
              />
            </View>
            <View style={{marginBottom: 15}}>
              <Text style={globalStyles().aboveInput}>City</Text>
              <CustomInput
                placeholder={'City'}
                input={city}
                setInput={setCity}
              />
            </View>
            <View style={{marginBottom: 15}}>
              <Text style={globalStyles().aboveInput}>State</Text>
              <CustomInput
                placeholder={'State'}
                input={state}
                setInput={setState}
              />
            </View>
            <View style={{marginBottom: 15}}>
              <Text style={globalStyles().aboveInput}>Pincode</Text>
              <CustomInput
                placeholder={'Pincode'}
                input={pincode}
                setInput={setPincode}
              />
            </View>
          </View>
          <CustomButton text={'Complete Your Sign Up'} press={handleSignup} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
