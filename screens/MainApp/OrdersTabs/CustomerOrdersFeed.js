import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import MyOrderComponent from '../../../components/CustomerComponents/MyOrderComponent';
import ThemeColours from '../../../styles/themeColours';
// import { Feather } from "@expo/vector-icons";
import globalStyles from '../../../styles/globalStyles';
import {useDispatch, useSelector} from 'react-redux';
import {pastOrders} from '../../../store/actions/order';
import {ShoppingBag} from 'react-native-feather';

const CustomerOrdersFeed = ({navigation, route}) => {
  const flatListRef = useRef();
  const {id} = route?.params ?? 0;
  var orders = [];
  const [refreshing, setRefreshing] = useState(false);
  // const posts = [
  //   require("../../../assets/images/dummyClothes/dress4.jpeg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  //   require("../../../assets/images/dummyClothes/dress3.jpg"),
  //   require("../../../assets/images/dummyClothes/varsity.jpg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  //   require("../../../assets/images/dummyClothes/varsity.jpg"),
  //   require("../../../assets/images/dummyClothes/dress4.jpeg"),
  //   require("../../../assets/images/dummyClothes/dress3.jpg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  //   require("../../../assets/images/dummyClothes/varsity.jpg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  //   require("../../../assets/images/dummyClothes/varsity.jpg"),
  //   require("../../../assets/images/dummyClothes/dress4.jpeg"),
  //   require("../../../assets/images/dummyClothes/dress3.jpg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  //   require("../../../assets/images/dummyClothes/dress4.jpeg"),
  //   require("../../../assets/images/dummyClothes/dress3.jpg"),
  //   require("../../../assets/images/dummyClothes/coat.jpeg"),
  // ];

  const dispatch = useDispatch();

  const getPastOrders = () => {
    dispatch(pastOrders());
    orders = useSelector(state => state.orders);
  };

  useEffect(() => {
    if (!orders) {
      getPastOrders();
    }
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    dispatch(pastOrders());
    setRefreshing(false);
  }, [refreshing]);

  const handleItemPress = index => {
    flatListRef.current.scrollToIndex({animated: true, index});
  };

  useEffect(() => {
    if (id) handleItemPress(id);
    console.log(id);
  }, [id]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {orders?.length > 0 ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          keyExtractor={(item, index) => index}
          data={orders}
          renderItem={({item}) => <MyOrderComponent navigation={navigation} />}
          style={{backgroundColor: ThemeColours().white, flex: 1}}
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
            No Current Orders
          </Text>
          <ShoppingBag
            height={36}
            width={36}
            stroke={ThemeColours().black}
            style={{margin: 10}}
          />
        </View>
      )}

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: ThemeColours().white, flex: 1 }}
      >
        <MyOrderComponent navigation={navigation} />
        <MyOrderComponent navigation={navigation} />
        <MyOrderComponent navigation={navigation} />
      </ScrollView> */}
    </SafeAreaView>
  );
};

export default CustomerOrdersFeed;
