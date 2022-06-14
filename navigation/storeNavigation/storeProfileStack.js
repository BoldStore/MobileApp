import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import ProceedToBuy from '../../screens/MainApp/ProceedToBuy';
import CustomerProfile from '../../screens/MainApp/Profile/customerProfile';
import EditCustomerProfile from '../../screens/MainApp/Profile/editCustomerProfile';
import StorePaymentDetails from '../../screens/MainApp/Profile/storePaymentDetails';
import StoreProfile from '../../screens/MainApp/Profile/storeProfile';
import StoreProfileNotComplete from '../../screens/MainApp/Profile/storeProfileNotComplete';
import StoreSignup2 from '../../screens/StoreAuth/StoreAddress';
import StoreProfileTabs from './storeProfileTabs';
import NotSignedInStack from '../customerNavigation/notSignedInStack';
import React from 'react';

const Stack = createStackNavigator();

function StoreProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        headerShown: true,
      }}>
      <Stack.Screen
        name="StoreProfileNotComplete"
        component={StoreProfileNotComplete}
        options={{
          title: '',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={StoreProfileTabs}
        options={{
          title: '',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProceedToBuy"
        component={ProceedToBuy}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Product',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="StorePaymentDetails"
        component={StorePaymentDetails}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Payment Details',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="StoreSignup2"
        component={StoreSignup2}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Address Details',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NotSignedInStack"
        component={NotSignedInStack}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StoreProfileStack;
