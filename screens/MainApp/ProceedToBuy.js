import React, {useCallback, useState} from 'react';
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

import Product from '../../components/CommonComponents/Product';
import ThemeColours from '../../styles/themeColours';

export default function ProceedToBuy({navigation}) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: ThemeColours().white, flex: 1}}>
        <Product navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
