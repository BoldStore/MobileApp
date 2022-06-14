import {
  Dimensions,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import feedStyles from '../../styles/feedStyles';
import ThemeColours from '../../styles/themeColours';
import globalStyles from '../../styles/globalStyles';
import SavingProducts from '../../functions/savingProducts';
import Checkout from '../../functions/checkout';
import React from 'react';

const Product = ({navigation}) => {
  const [ellipsis, setEllipsis] = useState(true);
  const shareProduct = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! Check this Product out!',
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
    <TouchableWithoutFeedback>
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
            <Icon name="verified" size={18} color="#00B2FF" />
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
          <TouchableOpacity onPress={shareProduct}>
            <Icon
              name="send"
              size={24}
              color={ThemeColours().black}
              style={{marginRight: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={SavingProducts}>
            <Icon name="bookmark" size={24} color={ThemeColours().black} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoView}>
          <Text
            style={{
              fontFamily: 'Bold',
              fontSize: 16,
              marginVertical: 10,
              marginTop: 0,
              color: ThemeColours().black,
            }}>
            Price{' '}
            <Text
              style={{
                fontFamily: 'Regular',
                color: ThemeColours().black,
              }}>
              ₹200
            </Text>
          </Text>
          <Text
            style={{
              fontFamily: 'Bold',
              fontSize: 16,
              marginVertical: 10,
              marginTop: 0,
              color: ThemeColours().black,
            }}>
            Size Sm
          </Text>

          <Text
            numberOfLines={ellipsis ? 2 : 100}
            onPress={() => {
              setEllipsis(!ellipsis);
            }}
            style={{color: ThemeColours().black}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{' '}
          </Text>
          {ellipsis ? (
            <Text
              style={{color: 'grey', fontFamily: 'Regular'}}
              onPress={() => {
                setEllipsis(!ellipsis);
              }}>
              Read More
            </Text>
          ) : (
            <Text
              style={{color: 'grey', fontFamily: 'Regular'}}
              onPress={() => {
                setEllipsis(!ellipsis);
              }}>
              Read Less
            </Text>
          )}
          <TouchableOpacity
            style={[
              globalStyles().btn,
              {
                marginTop: 20,
                width: Dimensions.get('window').width - 20,
              },
            ]}
            onPress={() => Checkout()}>
            <Text
              style={{
                color: ThemeColours().black,
                fontFamily: 'Medium',
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Proceed To Buy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    fontFamily: 'Bold',
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
    paddingVertical: 10,
    paddingHorizontal: 5,
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
