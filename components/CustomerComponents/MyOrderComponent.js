import {
  Dimensions,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';
import feedStyles from '../../styles/feedStyles';
import ThemeColours from '../../styles/themeColours';
import {Send} from 'react-native-feather';
const Product = ({navigation}) => {
  const [ellipsis, setEllipsis] = useState(true);
  const shareOrder = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! Check this Order out!',
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
    <View style={feedStyles().container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('StoreProfile');
        }}>
        <View style={feedStyles().topContainer}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/dummyClothes/dress4.jpeg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: '#DBDBDB',
            }}
          />

          <Text style={feedStyles().subHeading}>my_product</Text>
        </View>
      </TouchableOpacity>

      <View style={feedStyles().imgContainer}>
        <Image
          resizeMode="cover"
          source={require('../../assets/images/dummyClothes/dress4.jpeg')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width,
          }}
        />
      </View>

      <View style={[feedStyles().bottomContainer, {paddingTop: 15}]}>
        <TouchableOpacity onPress={shareOrder}>
          <Send
            height={24}
            width={24}
            stroke={ThemeColours().black}
            style={{marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.infoView, {color: ThemeColours().black}]}>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 10,
            marginTop: 0,
            color: ThemeColours().black,
          }}>
          Price:
          <Text
            style={{
              color: ThemeColours().black,
            }}>
            {' '}
            ₹200
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginVertical: 10,
            marginTop: 0,
            color: ThemeColours().black,
          }}>
          Size: Sm
        </Text>

        <Text
          numberOfLines={ellipsis ? 2 : 100}
          onPress={() => {
            setEllipsis(!ellipsis);
          }}
          style={{color: ThemeColours().black}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{' '}
        </Text>
        {ellipsis ? (
          <Text
            style={{color: 'grey'}}
            onPress={() => {
              setEllipsis(!ellipsis);
            }}>
            Read More
          </Text>
        ) : (
          <Text
            style={{color: 'grey'}}
            onPress={() => {
              setEllipsis(!ellipsis);
            }}>
            Read Less
          </Text>
        )}
        <View style={{marginVertical: 20}}>
          <Text style={{color: 'grey'}}>Order On : 22/22/2022 5:00PM</Text>
          <Text style={{color: 'grey'}}>Status: Received</Text>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#fff',
    marginVertical: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  subHeading: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#000',

    fontWeight: '900',
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  infoView: {
    padding: 10,
    paddingHorizontal: 15,
  },
  btn: {
    width: '100%',
    borderColor: '#000',
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 20,
  },
});
