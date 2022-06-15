import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';

function GetAddress({navigation}) {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  return (
    <View style={globalStyles().container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 10}}>
          <Text
            style={[
              globalStyles().aboveInput,
              {textAlign: 'center', marginVertical: 20},
            ]}>
            Fill In Your Delivery Address
          </Text>
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
          <TouchableOpacity
            style={globalStyles().btn}
            onPress={() => {
              navigation.push('AskToSignIn');
            }}>
            <Text
              style={{
                color: ThemeColours().grey,
                textAlign: 'center',
                fontSize: 14,
              }}>
              Done
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={globalStyles().btn2}>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 14,
                  
                }}
              >
                Logout
              </Text>
            </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default GetAddress;
