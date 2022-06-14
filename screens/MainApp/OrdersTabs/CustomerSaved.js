import React, {useCallback, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Keyboard,
  RefreshControl,
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
import ThemeColours from '../../../styles/themeColours';
// import { Feather } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';

const CustomerSaved = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const posts = [
    // require("../../../assets/images/dummyClothes/dress4.jpeg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
    // require("../../../assets/images/dummyClothes/dress3.jpg"),
    // require("../../../assets/images/dummyClothes/varsity.jpg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
    // require("../../../assets/images/dummyClothes/varsity.jpg"),
    // require("../../../assets/images/dummyClothes/dress4.jpeg"),
    // require("../../../assets/images/dummyClothes/dress3.jpg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
    // require("../../../assets/images/dummyClothes/varsity.jpg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
    // require("../../../assets/images/dummyClothes/varsity.jpg"),
    // require("../../../assets/images/dummyClothes/dress4.jpeg"),
    // require("../../../assets/images/dummyClothes/dress3.jpg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
    // require("../../../assets/images/dummyClothes/dress4.jpeg"),
    // require("../../../assets/images/dummyClothes/dress3.jpg"),
    // require("../../../assets/images/dummyClothes/coat.jpeg"),
  ];

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={globalStyles().container}>
        {posts.length > 0 ? (
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            numColumns={3}
            keyExtractor={(item, index) => index}
            data={posts}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProceedToBuy');
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
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: ThemeColours().white,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[globalStyles().aboveInput, {fontSize: 24}]}>
              No Saved Products
            </Text>
            <Icon
              name="bookmark"
              size={36}
              color={ThemeColours().black}
              style={{margin: 10}}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomerSaved;

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
    fontFamily: 'Medium',
    textAlign: 'center',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 14,
    fontFamily: 'Regular',
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
    fontFamily: 'Black',
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
    fontFamily: 'Black',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    borderBottomWidth: 2,
    padding: 10,
    paddingLeft: 0,
    fontSize: 18,
    fontFamily: 'Regular',
    color: '#333',
  },
  imgBox: {
    borderWidth: 0.5,
    borderColor: '#fff',
  },
});
