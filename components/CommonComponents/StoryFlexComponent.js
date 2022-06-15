import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ThemeColours from '../../styles/themeColours';
const StoryFlexComponent = ({navigation}) => {
  const posts = [
    require('../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/dress3.jpg'),
    require('../../assets/images/dummyClothes/varsity.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/varsity.jpg'),
    require('../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../assets/images/dummyClothes/dress3.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/varsity.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/varsity.jpg'),
    require('../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../assets/images/dummyClothes/dress3.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
    require('../../assets/images/dummyClothes/dress4.jpeg'),
    require('../../assets/images/dummyClothes/dress3.jpg'),
    require('../../assets/images/dummyClothes/coat.jpeg'),
  ];
  const username = 'my_store_1';
  const black = ThemeColours().black;
  return (
    <View style={[styles.container, {backgroundColor: ThemeColours().white}]}>
      <Text
        style={[styles.subHeading, {margin: 10, color: ThemeColours().black}]}>
        Top Stores
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => index}
        data={posts}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('StoreProfile');
            }}>
            <View>
              <Image
                resizeMode="cover"
                source={item}
                style={{
                  width: 65,
                  height: 65,
                  borderRadius: 100,
                  margin: 5,
                  marginHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: '#DBDBDB',
                }}
              />
              <Text
                style={{
                  opacity: 0.5,
                  fontSize: 10,
                  textAlign: 'center',
                  color: black,
                }}>
                {username}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StoryFlexComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  subHeading: {
    fontSize: 14,

    fontWeight: '900',
  },
});
