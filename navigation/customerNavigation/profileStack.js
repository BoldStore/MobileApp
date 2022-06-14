import {createStackNavigator} from '@react-navigation/stack';
import ProceedToBuy from '../../screens/MainApp/ProceedToBuy';
import CustomerProfile from '../../screens/MainApp/Profile/customerProfile';
import EditCustomerProfile from '../../screens/MainApp/Profile/editCustomerProfile';
import StoreProfile from '../../screens/MainApp/Profile/storeProfile';
import StoreProfileTabs from '../storeNavigation/storeProfileTabs';
import React from 'react';

const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        headerShown: true,
      }}>
      <Stack.Screen
        name="CustomerProfile"
        component={CustomerProfile}
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
        name="StoreProfile"
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
        name="EditCustomerProfile"
        component={EditCustomerProfile}
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
    </Stack.Navigator>
  );
}

export default ProfileStack;
