import {Dimensions, ScrollView, useColorScheme} from 'react-native';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../styles/globalStyles';
import ThemeColours from '../styles/themeColours';
import InstaFeedComponent from '../components/LandingPageComponents/InstaFeedComponent';
import BoldFeedComponent from '../components/LandingPageComponents/BoldFeedComponent';
import Icon from 'react-native-vector-icons/Feather';
// import { Feather } from "@expo/vector-icons";
import React from 'react';

export default function StartingScreen({navigation}) {
  const getStarted = () => {
    navigation.push('CustomerSignUp');
  };
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const logo = isDarkMode
    ? require('../assets/icon2b.png')
    : require('../assets/icon2w.png');
  return (
    <SafeAreaView style={globalStyles().container}>
      <View style={[globalStyles().container, {flex: 1}]}>
        {logo ? (
          <Image
            resizeMode="cover"
            source={logo}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').width,
              position: 'absolute',
              top: 0,
            }}
          />
        ) : (
          <Text
            style={{
              fontSize: Dimensions.get('window').width / 5,
              color: ThemeColours().black,
              fontFamily: 'Raleway',
              textTransform: 'uppercase',
            }}>
            Bold
          </Text>
        )}

        {/* <Text
          style={{
            fontSize: 20,
            fontFamily: "Bold",
            color: ThemeColours().black,
          }}
        >
          Your One Click <Text style={{ color: "#F46F40" }}> E-Store</Text>
        </Text> */}

        <View
          style={{
            flex: 1 / 2,
            width: '100%',
            padding: 20,
            alignItems: 'center',
            marginTop: logo && 120,
          }}>
          <TouchableOpacity
            style={[
              globalStyles().btn,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
            onPress={() => {
              navigation.navigate('StoreSignUp');
            }}>
            <Icon
              name="truck"
              size={24}
              color={ThemeColours().black}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                color: ThemeColours().black,
                textAlign: 'center',
                fontSize: 18,
                fontFamily: 'Bold',
              }}>
              Continue As A Store
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              globalStyles().btn2,
              {
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}
            onPress={getStarted}>
            <Icon
              name="user"
              size={24}
              color={ThemeColours().white}
              style={{marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'Bold',
                color: ThemeColours().white,
                fontSize: 18,
                textAlign: 'center',
              }}>
              Continue As A Customer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // fontFamily: "Regular",
  },
  btn: {
    // flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#000',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    fontFamily: 'Black',
    fontWeight: 'bold',
  },
  btn2: {
    marginVertical: 20,
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#000',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    fontFamily: 'Black',
    fontWeight: 'bold',
  },
  headingMain: {
    // flex: 1,
    // marginTop: 80,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Black',
    fontSize: 40,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotatedScroll: {
    marginVertical: 10,
    width: Dimensions.get('window').width,

    // transform: [{ rotate: "-45deg" }, { translateY: -75 }],
  },
});
