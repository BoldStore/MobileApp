import React, {useCallback, useEffect, useState} from 'react';
import {
  Keyboard,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Search} from 'react-native-feather';
import CollageComponent from '../../components/CommonComponents/CollageComponent';
import ThemeColours from '../../styles/themeColours';

const SearchPage = ({navigation}) => {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const [search, setSearch] = useState('');

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, [refreshing]);

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={[styles.container, {backgroundColor: ThemeColours().white}]}>
        <SearchBar
          round
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{
            backgroundColor: isDarkMode ? '#222' : '#F7F7F7',
            color: ThemeColours().black,
            fontSize: 16,
            padding: 0,
          }}
          containerStyle={{
            backgroundColor: ThemeColours().white,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            color: ThemeColours().black,
            fontSize: 16,
            marginHorizontal: 10,
          }}
          placeholderTextColor="grey"
          leftIcon={
            <Search height={24} width={24} stroke={ThemeColours().black} />
          }
          style={{
            color: ThemeColours().black,
            fontSize: 16,
          }}
        />
        <ScrollView
          style={{marginTop: 10}}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}>
          <CollageComponent navigation={navigation} />
          <CollageComponent navigation={navigation} />
          <CollageComponent navigation={navigation} />
          <CollageComponent navigation={navigation} />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
