import {createStackNavigator} from '@react-navigation/stack';
import AskToSignIn from '../../screens/CustomerNotSignedIn/askToSignIn';
import GetAddress from '../../screens/CustomerNotSignedIn/getAddress';
import ProceedToBuy from '../../screens/MainApp/ProceedToBuy';
import CustomerProfile from '../../screens/MainApp/Profile/customerProfile';
import EditCustomerProfile from '../../screens/MainApp/Profile/editCustomerProfile';
import StoreProfile from '../../screens/MainApp/Profile/storeProfile';
import React from 'react';

const Stack = createStackNavigator();

function NotSignedInStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
        header: () => null,
        headerLeft: () => null,
      }}>
      <Stack.Screen
        name="GetAddress"
        component={GetAddress}
        options={{
          headerBackTitleVisible: false,
          headerBackIconStyle: {display: 'none'},
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Personal Details',
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
        name="AskToSignIn"
        component={AskToSignIn}
        options={{
          headerBackTitleVisible: false,
          headerBackIconStyle: {display: 'none'},
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: 'Complete Sign Up',
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

export default NotSignedInStack;
