import {createStackNavigator} from '@react-navigation/stack';
import CustomerSignUp from '../screens/CustomerAuth/CustomerSignup';
import StartingScreen from '../screens/StartingScreen';
import ThemeColours from '../styles/themeColours';
import StoreSignup from '../screens/StoreAuth/StoreSignup';
import CustomerTabs from './customerNavigation/customerTabs';
import StoreTabs from './storeNavigation/storeTabs';
import CustomerLogin from '../screens/CustomerAuth/CustomerLogin';
import StoreLogin from '../screens/StoreAuth/StoreLogin';
import StoreSignup2 from '../screens/StoreAuth/StoreAddress';
import NoCode from '../screens/StoreAuth/NoCode';
import GetInstagramUsername from '../screens/StoreAuth/GetInstagram';
import InstaBrowser from '../screens/StoreAuth/InstaBrowser';
import React from 'react';
const Stack = createStackNavigator();

function SignupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#000',
      }}>
      <Stack.Screen
        name="StartingScreen"
        component={StartingScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
        }}
      />
      <Stack.Screen
        name="CustomerSignUp"
        component={CustomerSignUp}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />

      <Stack.Screen
        name="InstaBrowser"
        component={InstaBrowser}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />

      <Stack.Screen
        name="StoreSignUp"
        component={StoreSignup}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="GetInstagramUsername"
        component={GetInstagramUsername}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="StoreSignUp2"
        component={StoreSignup2}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="NoCode"
        component={NoCode}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="CustomerLogin"
        component={CustomerLogin}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="StoreLogin"
        component={StoreLogin}
        options={{
          headerBackTitleVisible: false,
          headerLeftContainerStyle: {paddingLeft: 20, color: '#000'},
          title: '',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
            // color: "#000",
          },
        }}
      />
      <Stack.Screen
        name="CustomerTabs"
        component={CustomerTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StoreTabs"
        component={StoreTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SignupStack;
