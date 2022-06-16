import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import profileStyles from '../../../styles/profileStyles';
// import { MaterialIcons, Feather } from "@expo/vector-icons";
import React, {useCallback, useState} from 'react';
import * as Progress from 'react-native-progress';
import UpiCard from '../../../components/StoreComponents/CompleteSignUp/UpiCard';
import DeliveryCard from '../../../components/StoreComponents/CompleteSignUp/DeliveryCard';
import ThemeColours from '../../../styles/themeColours';
import Icon from 'react-native-vector-icons/Feather';
import {Award, Shield} from 'react-native-feather';

const StoreProfileNotComplete = ({navigation}) => {
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

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
        <View style={globalStyles().container}>
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
                <Shield height={18} width={18} stroke="#00B2FF" />
              ) : (
                <></>
              )}
            </View>

            <Text style={profileStyles().subHeading}>21 Products</Text>
          </View>
          <View
            style={{
              marginVertical: 0,
              borderTopWidth: 0.35,
              borderTopColor: ThemeColours().grey,
              width: Dimensions.get('window').width - 40,
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <Progress.Circle
              // size={30}
              progress={0.5}
              showsText={true}
              thickness={3}
              formatText={() => {
                return `${0.5 * 100}%`;
              }}
              size={
                Dimensions.get('window').width / 3 > 200
                  ? 200
                  : Dimensions.get('window').width / 3
              }
              color={'#00B2FF'}
              style={{marginBottom: 20}}
              strokeCap={'square'}
            />
          </View>

          <Text style={[profileStyles().heading, {textAlign: 'left'}]}>
            Complete Your Profile
          </Text>
          <Text
            style={[
              profileStyles().subHeading,
              {textAlign: 'left', opacity: 1},
            ]}>
            <Text style={{color: '#00B2FF'}}> 2 out of 4</Text> completed
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginVertical: 20}}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <UpiCard navigation={navigation} />
            <DeliveryCard navigation={navigation} />
          </ScrollView>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default StoreProfileNotComplete;
