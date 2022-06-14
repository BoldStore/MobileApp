import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Product from '../../../components/CommonComponents/Product';
import MyOrderComponent from '../../../components/CustomerComponents/MyOrderComponent';
import globalStyles from '../../../styles/globalStyles';
import ThemeColours from '../../../styles/themeColours';
import React from 'react';

const StoreProfileFeed = ({navigation}) => {
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
  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   style={{
    //     backgroundColor: ThemeColours().white,
    //     flex: 1,
    //   }}
    // >

    <FlatList
      style={{
        backgroundColor: ThemeColours().white,
        height: Dimensions.get('window').height,
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      data={posts}
      renderItem={({item}) => (
        <TouchableWithoutFeedback>
          <Product navigation={navigation} />
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default StoreProfileFeed;
