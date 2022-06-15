import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
// import { Feather, MaterialIcons } from "@expo/vector-icons";
import React, {useState} from 'react';
import startingScreenStyles from '../../styles/startingScreenStyles';
import ThemeColours from '../../styles/themeColours';
import SavingProducts from '../../functions/savingProducts';
import {Bookmark, Send} from 'react-native-feather';

const BoldFeedComponent = ({navigation}) => {
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
            <Icon name="verified" size={10} color="#00B2FF" />
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
          <Send
            height={12}
            width={12}
            stroke={ThemeColours().black}
            style={{marginRight: 5}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={SavingProducts}>
          <Bookmark height={12} width={12} stroke={ThemeColours().black} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          paddingHorizontal: 5,
          paddingVertical: 5,
          color: ThemeColours().black,
          fontSize: 10,
        }}
        numberOfLines={ellipsis ? 2 : 100}
        onPress={() => {
          setEllipsis(!ellipsis);
        }}>
        Price : ₹200
      </Text>
    </View>
  );
};

export default BoldFeedComponent;
