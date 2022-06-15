import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, {useState} from 'react';
import startingScreenStyles from '../../styles/startingScreenStyles';
import ThemeColours from '../../styles/themeColours';
import SavingProducts from '../../functions/savingProducts';
import {Award, Bookmark, Heart, Send} from 'react-native-feather';

const InstaFeedComponent = ({navigation}) => {
  const [ellipsis, setEllipsis] = useState(true);

  const shareFeed = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! Check this Thrift store which cam ein my Bold - Feed!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={startingScreenStyles().container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StoreProfile');
        }}>
        <View style={startingScreenStyles().topContainer}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/dummyClothes/dress4.jpeg')}
            style={{
              width: 15,
              height: 15,
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: '#DBDBDB',
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={startingScreenStyles().subHeading}>
              my_store_username
            </Text>
            <Shield height={18} width={18} stroke="#00B2FF" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={startingScreenStyles().imgContainer}>
        <Image
          resizeMode="cover"
          source={require('../../assets/images/dummyClothes/dress4.jpeg')}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>

      <View style={[startingScreenStyles().bottomContainer, {paddingTop: 5}]}>
        <TouchableOpacity onPress={shareFeed}>
          <Heart
            height={12}
            width={12}
            stroke={ThemeColours().black}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={shareFeed}>
          <Send
            height={12}
            width={12}
            stroke={ThemeColours().black}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={SavingProducts}>
          <Bookmark height={12} width={12} stroke={ThemeColours().black} />
        </TouchableOpacity>
      </View>
      {/* <Text
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          paddingBottom: 10,
          color: ThemeColours().black,
        }}
        numberOfLines={ellipsis ? 2 : 100}
        onPress={() => {
          setEllipsis(!ellipsis);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </Text>
      {ellipsis ? (
        <Text
          style={{
            color: ThemeColours().grey,
            
            paddingHorizontal: 10,
          }}
          onPress={() => {
            setEllipsis(!ellipsis);
          }}
        >
          Read More
        </Text>
      ) : (
        <Text
          style={{
            color: ThemeColours().grey,
            
            paddingHorizontal: 10,
          }}
          onPress={() => {
            setEllipsis(!ellipsis);
          }}
        >
          Read Less
        </Text>
      )} */}
    </View>
  );
};

export default InstaFeedComponent;
