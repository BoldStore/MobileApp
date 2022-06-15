import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import StoreProfileTopTabs from '../../../navigation/storeNavigation/storeProfileTopTabs';
import globalStyles from '../../../styles/globalStyles';
import profileStyles from '../../../styles/profileStyles';
import ThemeColours from '../../../styles/themeColours';
import React, {useState} from 'react';
const StorePaymentDetails = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const [upi, setUpi] = useState('');
  const [number, setNumber] = useState('');

  const posts = [
    require('../../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
    require('../../../assets/images/dummyClothes/dress3.jpg'),
    require('../../../assets/images/dummyClothes/varsity.jpg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
    require('../../../assets/images/dummyClothes/varsity.jpg'),
    require('../../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../../assets/images/dummyClothes/dress3.jpg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
    require('../../../assets/images/dummyClothes/varsity.jpg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
    require('../../../assets/images/dummyClothes/varsity.jpg'),
    require('../../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../../assets/images/dummyClothes/dress3.jpg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
    require('../../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../../assets/images/dummyClothes/dress3.jpg'),
    require('../../../assets/images/dummyClothes/coat.jpeg'),
  ];
  const isVerified = true;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={[globalStyles().container, {justifyContent: 'flex-start'}]}>
        <View style={{marginBottom: 20}}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/upi.png')}
            style={{
              width: Dimensions.get('window').width - 50,
              height: 200,
              marginVertical: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <View style={{marginVertical: 10}}>
            <Text style={globalStyles().aboveInput}>Upi ID</Text>
            <TextInput
              style={globalStyles().input}
              onChangeText={text => {
                setUpi(text);
              }}
              value={upi}
              placeholder="business@upi"
              // keyboardType="default"
            />
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={globalStyles().aboveInput}>Phone Number</Text>
            <TextInput
              style={globalStyles().input}
              onChangeText={text => {
                setNumber(text);
              }}
              value={number}
              placeholder="Phone Number"
              // keyboardType="default"
            />
          </View>
        </View>
        <TouchableOpacity
          style={globalStyles().btn}
          onPress={() => {
            navigation.pop();
          }}>
          <Text
            style={{
              color: ThemeColours().grey,
              textAlign: 'center',
              fontSize: 14,
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StorePaymentDetails;
