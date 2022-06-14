import React, {useCallback, useState} from 'react';
import {
  View,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import Product from '../../components/CommonComponents/Product';
import StoreProfileHeader from '../../components/CommonComponents/storeProfileHeader';
import ThemeColours from '../../styles/themeColours';
import {useColorScheme} from 'react-native';

export default function StoreProfileTabs({navigation}) {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const black = isDarkMode ? '#fff' : '#000';
  const white = isDarkMode ? '#000' : '#fff';
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

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);

  //   function renderTabBar() {
  //     return (

  //     );
  //   }

  return (
    <Tabs.Container
      renderHeader={StoreProfileHeader}
      TabBarComponent={props => (
        <MaterialTabBar
          {...props}
          activeColor={ThemeColours().black}
          inactiveColor="gray"
          backgroundColor={ThemeColours().white}
          labelStyle={{
            fontSize: 14,
          }}
          style={{backgroundColor: ThemeColours().white}}
          indicatorStyle={{
            backgroundColor: black,
          }}
          tabBarStyle={{
            backgroundColor: ThemeColours().white,
          }}
        />
      )}>
      <Tabs.Tab
        name="Products"
        options={{
          headerStyle: {backgroundColor: isDarkMode ? white : black},
        }}>
        <Tabs.FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{backgroundColor: ThemeColours().white}}
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
      </Tabs.Tab>
      <Tabs.Tab
        name="Feed"
        options={{
          headerStyle: {backgroundColor: isDarkMode ? white : black},
        }}>
        <Tabs.FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
      </Tabs.Tab>
    </Tabs.Container>
  );
}
