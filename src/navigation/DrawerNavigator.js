import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from './src/screens/Login';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { Dashboard } from './src/screens/Dashboard'; 
import { TransferScreen } from './src/screens/TransferScreen'; 
import { NotificationsScreen } from './src/screens/NotificationScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { HomeScreen } from './src/screens/HomeScreen'; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    // <Drawer.Navigator initialRouteName="Home">
    //   <Drawer.Screen name="Home" component={HomeScreen} />
    //   <Drawer.Screen name="Profile" component={ProfileScreen} />
    //   <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    //   <Drawer.Screen name="Settings" component={SettingsScreen} />
    // </Drawer.Navigator>

    <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        {/* Adding Transfers screen */}
        <Drawer.Screen name="TransferScreen" component={TransferScreen} /> 
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name='Home' component={HomeScreen} />   

      </Drawer.Navigator>
  );
};

export default DrawerNavigator;
