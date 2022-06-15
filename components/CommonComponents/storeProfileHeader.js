import {Image, Text, TouchableOpacity, View} from 'react-native';
import profileStyles from '../../styles/profileStyles';
// import { MaterialIcons, Feather } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';
import globalStyles from '../../styles/globalStyles';
import ThemeColours from '../../styles/themeColours';
// import * as Linking from 'expo-linking';
import React from 'react';

export default function StoreProfileHeader() {
  const isVerified = true;
  return (
    <View style={globalStyles().container2}>
      <Image
        resizeMode="cover"
        source={require('../../assets/images/dummyClothes/dress4.jpeg')}
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
      <TouchableOpacity
        // onPress={() =>
        //   Linking.openURL('https://www.instagram.com/avi_vashishta29')
        // }
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
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >

      </TouchableOpacity> */}
      <Text style={profileStyles().subHeading}>21 Products</Text>
    </View>
  );
}
