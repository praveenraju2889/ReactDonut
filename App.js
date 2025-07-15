import React from 'react';
import { DonutChart } from './src/features/donutChart';
import { View } from 'react-native';
import { LoginScreen } from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { DetailsScreen } from './src/screens/DetailsScreen';



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
        <Stack.Screen name="Donut" component={DonutChart} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
);
};

export default App;
