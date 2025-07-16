import React from 'react';
import { View } from 'react-native';
import { LoginScreen } from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './src/screens/DetailsScreen';
import { Dashboard } from './src/screens/Dashboard'; 
import { TransferScreen } from './src/screens/TransferScreen'; // Importing Transfers screen

const Stack = createNativeStackNavigator();

const App = () => {
  
  // return  (
  // <View>
  //   <LoginScreen />
  // </View>
  // );
return (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        {/* Adding Transfers screen */}
        <Stack.Screen name="TransferScreen" component={TransferScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
);
};

export default App;
