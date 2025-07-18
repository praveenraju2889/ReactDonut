import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/Login/LoginScreen';
// Importing other screens as needed  
import {DetailsScreen} from '../screens/DetailsScreen';
import Dashboard from '../screens/Dashboard/Dashboard'; 
import { TransferScreen } from '../screens/TransferScreen'; 
import { NotificationsScreen } from '../screens/NotificationScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { HomeScreen } from './src/screens/HomeScreen'; 

//const Drawer = createDrawerNavigator();

// const DrawerNavigator = () => {
//   return (
//     // <Drawer.Navigator initialRouteName="Home">
//     //   <Drawer.Screen name="Home" component={HomeScreen} />
//     //   <Drawer.Screen name="Profile" component={ProfileScreen} />
//     //   <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//     //   <Drawer.Screen name="Settings" component={SettingsScreen} />
//     // </Drawer.Navigator>

//     <Drawer.Navigator initialRouteName="Dashboard">
//         <Drawer.Screen name="Dashboard" component={Dashboard} />
//         <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
//         {/* Adding Transfers screen */}
//         {/* <Drawer.Screen name="TransferScreen" component={TransferScreen} /> 
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//         <Drawer.Screen name="Profile" component={ProfileScreen} />
//         <Drawer.Screen name="Settings" component={SettingsScreen} />
//         <Drawer.Screen name='Home' component={HomeScreen} />    */}
//       </Drawer.Navigator>
//   );

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer after login
const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Dashboard">
    <Drawer.Screen name="Dashboard" component={Dashboard} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
  </Drawer.Navigator>
);

// Root navigator
const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true, title: 'Login' }} />
    <Stack.Screen name="Dashboard" component={DrawerNavigator} options={{ headerShown: false }}/>
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    <Stack.Screen name="TransferScreen" component={TransferScreen} />
  </Stack.Navigator>
);

export default AppNavigator;


//export default DrawerNavigator;
