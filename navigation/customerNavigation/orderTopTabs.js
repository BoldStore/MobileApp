import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import { Feather } from "@expo/vector-icons";
import ThemeColours from '../../styles/themeColours';
import {useColorScheme} from 'react-native-appearance';
import CustomerOrdersGrid from '../../screens/MainApp/OrdersTabs/CustomerOrdersGrid';
import CustomerOrdersFeed from '../../screens/MainApp/OrdersTabs/CustomerOrdersFeed';
import CustomerSaved from '../../screens/MainApp/OrdersTabs/CustomerSaved';
import React from 'react';
import {AlignJustify, Bookmark, Grid} from 'react-native-feather';

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
            return <Grid height={24} width={24} stroke={iconColor} />;
          } else if (route.name === 'Feed') {
            iconColor = focused ? black : 'grey';
            return <AlignJustify height={24} width={24} stroke={iconColor} />;
          } else if (route.name === 'Saved') {
            iconColor = focused ? black : 'grey';
            return <Bookmark height={24} width={24} stroke={iconColor} />;
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
