import React from 'react';
import { View } from 'react-native';
import { LoginScreen } from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { Dashboard } from './src/screens/Dashboard';
import { TransferScreen } from './src/screens/TransferScreen';
import { NotificationsScreen } from './src/screens/NotificationScreen';
import { ProfileScreen } from './src/screens/ProfileScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator'; // Importing DrawerNavigator
// Assuming HomeScreen is defined in
import AppNavigator from './src/navigation/DrawerNavigator';


const Stack = createNativeStackNavigator();

const App = () => {

  // return  (
  // <View>
  //   <LoginScreen />
  // </View>
  // );
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login" navbarMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="TransferScreen" component={TransferScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator> */}
      {/* <DrawerNavigator />  */}
            <AppNavigator />

    </NavigationContainer>
  );
};

export default App;
