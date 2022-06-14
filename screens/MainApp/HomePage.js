import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import FeedComponent from '../../components/CommonComponents/FeedComponent';
import Product from '../../components/CommonComponents/Product';
import StoryFlexComponent from '../../components/CommonComponents/StoryFlexComponent';
import {homePage} from '../../store/actions/pages';
import ThemeColours from '../../styles/themeColours';

export default function HomePage({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.pages.home_loading);
  const homeData = useSelector(state => state.pages.home);

  const fetchData = () => {
    dispatch(homePage());
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    fetchData();
    setRefreshing(false);
  }, [refreshing]);

  useEffect(() => {
    setRefreshing(isLoading);
  }, [isLoading]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: ThemeColours().white}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: ThemeColours().white, flex: 1}}>
        <StoryFlexComponent navigation={navigation} />
        <Product navigation={navigation} />
        <Product navigation={navigation} />
        <Product navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
