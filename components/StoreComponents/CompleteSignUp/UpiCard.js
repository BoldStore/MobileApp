/* eslint-disable react-native/no-inline-styles */

import {
  Dimensions,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import feedStyles from '../../../styles/feedStyles';
import ThemeColours from '../../../styles/themeColours';
import profileStyles from '../../../styles/profileStyles';
import globalStyles from '../../../styles/globalStyles';
import {CreditCard} from 'react-native-feather';
import CustomButton from '../../CommonComponents/CustomButton';

const UpiCard = ({navigation}) => {
  return (
    <View
      style={[
        feedStyles().container,
        {
          width: Dimensions.get('window').width / 2,
          maxWidth: 400,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#2f3336',
          borderRadius: 7,
          padding: 15,
          margin: 10,
        },
      ]}>
      <CreditCard height={24} width={24} color={ThemeColours().black} />
      <Text style={[profileStyles().heading, {marginTop: 20}]}>
        UPI Details
      </Text>
      <Text style={profileStyles().subHeading}>
        Fill In Your UPI Details To Accept Instant Payouts!
      </Text>
      <CustomButton
        text={'Update'}
        press={() => navigation.navigate('StorePaymentDetails')}
      />
    </View>
  );
};

export default UpiCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    color: '#000',
    width: '50%',
    borderWidth: 0.5,
    borderColor: '#fff',
    marginVertical: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  subHeading: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#000',

    fontWeight: '900',
  },
  imgContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  infoView: {
    padding: 10,
    paddingHorizontal: 15,
  },
  btn: {
    width: '100%',
    borderColor: '#000',
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 20,
  },
});
