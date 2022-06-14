import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import { Feather } from "@expo/vector-icons";
import ThemeColours from '../../styles/themeColours';
import {useColorScheme} from 'react-native-appearance';
import CustomerOrdersGrid from '../../screens/MainApp/OrdersTabs/CustomerOrdersGrid';
import CustomerOrdersFeed from '../../screens/MainApp/OrdersTabs/CustomerOrdersFeed';
import Icon from 'react-native-vector-icons/Feather';
import CustomerSaved from '../../screens/MainApp/OrdersTabs/CustomerSaved';
import React from 'react';

const Tab = createMaterialTopTabNavigator();

export default function OrderTopTabs() {
  const colourScheme = useColorScheme();
  const isDarkMode = colourScheme === 'dark';
  const black = isDarkMode ? '#fff' : '#000';
  const white = isDarkMode ? '#000' : '#fff';

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconColor;
          if (route.name === 'Grid') {
            iconColor = focused ? black : 'grey';
            return <Icon name="grid" size={24} color={iconColor} />;
          } else if (route.name === 'Feed') {
            iconColor = focused ? black : 'grey';
            return <Icon name="align-justify" size={24} color={iconColor} />;
          } else if (route.name === 'Saved') {
            iconColor = focused ? black : 'grey';
            return <Icon name="bookmark" size={24} color={iconColor} />;
          }
        },
        tabBarActiveTintColor: black,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: black,
        },
        tabBarStyle: {
          backgroundColor: ThemeColours().white,
        },
      })}>
      <Tab.Screen
        name="Grid"
        component={CustomerOrdersGrid}
        options={{
          headerStyle: {backgroundColor: isDarkMode ? white : black},
        }}
      />
      <Tab.Screen
        name="Feed"
        component={CustomerOrdersFeed}
        options={{
          headerStyle: {backgroundColor: isDarkMode ? white : black},
        }}
      />
      <Tab.Screen
        name="Saved"
        component={CustomerSaved}
        options={{
          headerStyle: {backgroundColor: isDarkMode ? white : black},
        }}
      />
    </Tab.Navigator>
  );
}
