import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import globalStyles from '../../../styles/globalStyles';
import React from 'react';

const StoreProfileGrid = ({navigation}) => {
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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={globalStyles().container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={(item, index) => index}
          data={posts}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('ProceedToBuy');
              }}>
              <View>
                <Image
                  resizeMode="cover"
                  source={item}
                  style={{
                    width: Dimensions.get('window').width / 3,
                    height: Dimensions.get('window').width / 3,
                    borderWidth: 1,
                    borderColor: isDarkMode ? '#000' : '#fff',
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StoreProfileGrid;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 0,
    flex: 1,
  },
  heading: {
    fontSize: 18,

    textAlign: 'center',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 14,

    textAlign: 'center',
    opacity: 0.4,
    marginVertical: 10,
    fontWeight: '900',
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
    marginVertical: 20,

    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn2: {
    // flex: 1,
    backgroundColor: '#000',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 50,
    borderWidth: 3,
    fontSize: 16,
    padding: 15,
    width: '70%',
    marginVertical: 20,

    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    paddingLeft: 0,
    fontSize: 18,

    color: '#333',
  },
  imgBox: {
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});
