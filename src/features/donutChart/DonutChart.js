import React from 'react';
import { View, Image, Text,ScrollView } from 'react-native';
import { styles } from './DonutChart.style';
import { DEFAULT_DEBIT, DEFAULT_CREDIT } from './DonutConstants';
import { Header } from '../../components/Header';
import { CollapsingList } from '../../components/ListViewCollapse'; // Importing AccList component
import { LoginPage } from '../login/LoginPage'; // Importing LoginPage component

const DonutChart = ({ debit = DEFAULT_DEBIT, credit = DEFAULT_CREDIT }, navigation) => {
  const serverIp = 'http://127.0.0.1:8080'; // replace with your Mac IP
  const imageUrl = `${serverIp}/donut-chart?debit=${debit}&credit=${credit}`;

  return (
    <ScrollView style={styles.scrollContainer}>

    <View style={{ flex: 1 }}>

      <View style={styles.container}>
        <Header title="Dashboard" onBack={() => navigation.goBack()} />
        <Image source={{ uri: imageUrl }} style={styles.chart} resizeMode="contain" />
        <Text style={styles.title}> 10000.00</Text>
      </View>

      
        <CollapsingList /> {/* Using the AccList component */}
     

    </View>
    </ScrollView>
  );
};

export default DonutChart;