import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { Feather } from "@expo/vector-icons";
import HomePage from '../../screens/MainApp/HomePage';
import SearchPage from '../../screens/MainApp/Search';
import {Text, TouchableOpacity, View} from 'react-native';
import StoreDashboard from '../../screens/MainApp/StoreDashboard';
import ThemeColours from '../../styles/themeColours';
import StoreProfileStack from './storeProfileStack';
import React from 'react';
import {
  Home,
  Truck,
  Search,
  User,
  Layout,
  LogOut,
  CreditCard,
} from 'react-native-feather';

const Tab = createBottomTabNavigator();

const StoreTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="StoreProfile"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconColor;
          if (route.name === 'Home') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Home height={24} width={24} color={iconColor} />;
          } else if (route.name === 'Search') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Search height={24} width={24} color={iconColor} />;
          } else if (route.name === 'CustomerOrders') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <ShoppingBag height={24} width={24} color={iconColor} />;
          } else if (route.name === 'StoreProfile') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <User height={24} width={24} color={iconColor} />;
          } else if (route.name === 'StoreDashboard') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Layout height={24} width={24} color={iconColor} />;
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: ThemeColours().white,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Featured',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: ThemeColours().white,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: ThemeColours().black,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPage}
        options={{
          title: 'Search',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: ThemeColours().white,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: ThemeColours().black,
          },
        }}
      />

      <Tab.Screen
        name="StoreDashboard"
        component={StoreDashboard}
        options={{
          title: 'Dashboard',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: ThemeColours().white,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: ThemeColours().black,
          },
        }}
      />
      <Tab.Screen
        name="StoreProfile"
        component={StoreProfileStack}
        options={{
          title: 'Profile',
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: ThemeColours().white,
            borderBottomWidth: 0,
            shadowRadius: 0,
            shadowOffset: {
              height: 0,
            },
          },
          headerTintColor: ThemeColours().white,
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: ThemeColours().black,
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('StorePaymentDetails')}>
                <CreditCard
                  height={20}
                  width={20}
                  stroke={ThemeColours().black}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('StoreSignup2')}>
                <Truck
                  height={20}
                  width={20}
                  stroke={ThemeColours().black}
                  style={{marginHorizontal: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('StartingScreen')}>
                <LogOut
                  height={20}
                  width={20}
                  stroke={ThemeColours().black}
                  style={{marginHorizontal: 10, marginRight: 20}}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StoreTabs;
