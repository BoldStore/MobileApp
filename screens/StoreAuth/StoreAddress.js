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
// import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import {TextInput} from 'react-native-gesture-handler';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
export default function StoreSignup2({navigation}) {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
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
  }, [refreshing]);

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
          {/* <Text style={{ textAlign: "center", marginBottom: 40 }}>
              Don't worry you are almost there!
            </Text> */}

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
              Complete Your Signup
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
