import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './DonutChart.style';
import { DEFAULT_DEBIT, DEFAULT_CREDIT } from './DonutConstants';
import { Header } from '../../components/Header';

const DonutChart = ({ debit = DEFAULT_DEBIT, credit = DEFAULT_CREDIT },navigation) => {
  const serverIp = 'http://127.0.0.1:8080'; // replace with your Mac IP
  const imageUrl = `${serverIp}/donut-chart?debit=${debit}&credit=${credit}`;

  return (
    <View style={styles.container}>
     <Header title="Dashboard" onBack={() => navigation.goBack()} />

     <Image source={{ uri: imageUrl }} style={styles.chart} resizeMode="contain" />
    </View>

  );
};

export default DonutChart;