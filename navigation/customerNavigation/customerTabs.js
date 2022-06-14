import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import { Feather } from "@expo/vector-icons";
import HomePage from '../../screens/MainApp/HomePage';
import Search from '../../screens/MainApp/Search';
import ProfileStack from './profileStack';
import {Text, TouchableOpacity} from 'react-native';
import OrderTopTabs from './orderTopTabs';
import ThemeColours from '../../styles/themeColours';
import HomePageStack from './homePageStack';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';

const Tab = createBottomTabNavigator();

const CustomerTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="ProfileStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconColor;
          if (route.name === 'HomeStack') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Icon name="home" size={24} color={iconColor} />;
          } else if (route.name === 'Search') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Icon name="search" size={24} color={iconColor} />;
          } else if (route.name === 'CustomerOrders') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Icon name="shopping-bag" size={24} color={iconColor} />;
          } else if (route.name === 'ProfileStack') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Icon name="user" size={24} color={iconColor} />;
          } else if (route.name === 'StoreDashboard') {
            iconColor = focused ? ThemeColours().black : 'grey';
            return <Icon name="layout" size={24} color={iconColor} />;
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
        name="HomeStack"
        component={HomePageStack}
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
        component={Search}
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
        name="CustomerOrders"
        component={OrderTopTabs}
        options={{
          title: 'My Bag',
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
        name="ProfileStack"
        component={ProfileStack}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('StartingScreen')}>
              <Icon
                name="log-out"
                size={24}
                color={ThemeColours().black}
                style={{paddingHorizontal: 10, paddingRight: 20}}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomerTabs;
