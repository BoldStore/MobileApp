import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import StoreProfileTopTabs from '../../../navigation/storeNavigation/storeProfileTopTabs';
import globalStyles from '../../../styles/globalStyles';
import profileStyles from '../../../styles/profileStyles';
// import { MaterialIcons, Feather } from "@expo/vector-icons";
import ThemeColours from '../../../styles/themeColours';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const StoreProfile = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
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
      <View style={globalStyles().container2}>
        <View style={{marginBottom: 20}}>
          <Image
            resizeMode="cover"
            source={require('../../../assets/images/dummyClothes/dress4.jpeg')}
            style={{
              width: 120,
              height: 120,
              marginVertical: 20,
              marginLeft: 'auto',
              marginRight: 'auto',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[profileStyles().heading, {marginRight: 5}]}>
              @my_store_username
            </Text>
            {isVerified ? (
              <Icon name="verified" size={24} color="#00B2FF" />
            ) : (
              <></>
            )}
          </View>

          <Text style={profileStyles().subHeading}>21 Products</Text>
        </View>

        <StoreProfileTopTabs />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreProfile;
