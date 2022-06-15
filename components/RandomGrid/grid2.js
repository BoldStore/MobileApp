import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { MaterialIcons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Feather';
import ThemeColours from '../../styles/themeColours';
import feedStyles from '../../styles/feedStyles';
import React from 'react';
import {Award, Shield} from 'react-native-feather';

const Grid2 = props => {
  return (
    <View style={feedStyles().container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('StoreProfile');
        }}>
        <View style={feedStyles().topContainer}>
          <Image
            resizeMode="cover"
            source={require('../../assets/images/dummyClothes/dress4.jpeg')}
            style={{
              width: 35,
              height: 35,
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: '#DBDBDB',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={feedStyles().subHeading}>my_store_username</Text>
            <Shield height={18} width={18} stroke="#00B2FF" />
          </View>
        </View>

        <View style={styles.gridFlex}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              resizeMode="cover"
              source={props.posts[0]}
              style={{
                width: Dimensions.get('window').width / 3,
                height: Dimensions.get('window').width / 3,
                borderWidth: 0.5,
                borderColor: ThemeColours().white,
              }}
            />
            <Image
              resizeMode="cover"
              source={props.posts[1]}
              style={{
                width: Dimensions.get('window').width / 3,
                height: Dimensions.get('window').width / 3,
                borderWidth: 0.5,
                borderColor: ThemeColours().white,
              }}
            />
          </View>
          <Image
            resizeMode="cover"
            source={props.posts[2]}
            style={{
              width: (Dimensions.get('window').width / 3) * 2,
              height: (Dimensions.get('window').width / 3) * 2,
              borderWidth: 0.5,
              borderColor: ThemeColours().white,
            }}
          />
        </View>
        <View style={styles.gridFlex}>
          {props.posts.slice(3, 6).map((post, index) => {
            return (
              <Image
                key={index}
                resizeMode="cover"
                source={post}
                style={{
                  width: Dimensions.get('window').width / 3,
                  height: Dimensions.get('window').width / 3,
                  borderWidth: 0.5,
                  borderColor: ThemeColours().white,
                }}
              />
            );
          })}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Grid2;

const styles = StyleSheet.create({
  gridFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // flexWrap: "wrap",
  },
});
