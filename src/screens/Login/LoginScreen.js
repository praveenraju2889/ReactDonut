import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './LoginScreen.styles';
import { DonutChart } from '././src/features/donutChart';
import { login } from '../../services/LoginService'; // Adjust path



const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin1 = async () => {
    try {
      const result = await login(username, password);
      if (result) {
        Alert.alert('Login Successful', result.message);
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Login Failed', result.message);
      }
    } catch (err) {
      Alert.alert('Error', 'Failed to login. Please try again.');
    }
  };

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter username and password.');
      return;
    }
    // Mock login success
    //Alert.alert('Success', `Welcome, ${username}!`);
    //<Stack.Screen name="DonutChart" component={DonutChart} />
    navigation.navigate('Donut', { username }); // Navigate to DonutChart screen

    ///navigation.navigate('DonutChart'); // Example navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin1}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
