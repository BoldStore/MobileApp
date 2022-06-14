import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../../screens/MainApp/HomePage';
import ProceedToBuy from '../../screens/MainApp/ProceedToBuy';
import CustomerProfile from '../../screens/MainApp/Profile/customerProfile';
import EditCustomerProfile from '../../screens/MainApp/Profile/editCustomerProfile';
import StoreProfile from '../../screens/MainApp/Profile/storeProfile';
import StoreProfileTabs from '../storeNavigation/storeProfileTabs';
import NotSignedInStack from './notSignedInStack';
import React from 'react';

const Stack = createStackNavigator();

function HomePageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        headerShown: true,
      }}>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Featured',
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
        name="StoreProfile"
        component={StoreProfileTabs}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Your Profile',
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

export default HomePageStack;
