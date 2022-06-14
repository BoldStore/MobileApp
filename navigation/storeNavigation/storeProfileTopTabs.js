// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//  // import { Feather } from "@expo/vector-icons";
// import ThemeColours from "../../styles/themeColours";
// import { useColorScheme } from "react-native";
// import StoreProfileFeed from "../../screens/MainApp/StoreProfileTabs/StoreProfileFeed";
// import StoreProfileGrid from "../../screens/MainApp/StoreProfileTabs/StoreProfileGrid";
// import StoreProfileInfo from "../../screens/MainApp/StoreProfileTabs/StoreProfileInfo";
// const Tab = createMaterialTopTabNavigator();

// export default function StoreProfileTopTabs() {
//   const colourScheme = useColorScheme();
//   const isDarkMode = colourScheme === "dark";
//   const black = isDarkMode ? "#fff" : "#000";
//   const white = isDarkMode ? "#000" : "#fff";

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconColor;
//           if (route.name === "Grid") {
//             iconColor = focused ? black : "grey";
//             return <Icon name="grid" size={24} color={iconColor} />;
//           } else if (route.name === "Feed") {
//             iconColor = focused ? black : "grey";
//             return <Icon name="align-justify" size={24} color={iconColor} />;
//           } else if (route.name === "Info") {
//             iconColor = focused ? black : "grey";
//             return <Icon name="trending-up" size={24} color={iconColor} />;
//           }
//         },
//         tabBarActiveTintColor: black,
//         tabBarInactiveTintColor: "gray",
//         tabBarShowLabel: false,
//         tabBarIndicatorStyle: {
//           backgroundColor: black,
//         },
//         tabBarStyle: {
//           backgroundColor: ThemeColours().white,
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Grid"
//         component={StoreProfileGrid}
//         options={{
//           headerStyle: { backgroundColor: isDarkMode ? white : black },
//         }}
//       />
//       <Tab.Screen
//         name="Feed"
//         component={StoreProfileFeed}
//         options={{
//           headerStyle: { backgroundColor: isDarkMode ? white : black },
//         }}
//       />
//       {/* <Tab.Screen
//         name="Info"
//         component={StoreProfileInfo}
//         options={{
//           headerStyle: { backgroundColor: isDarkMode ? white : black },
//         }}
//       /> */}
//     </Tab.Navigator>
//   );
// }
