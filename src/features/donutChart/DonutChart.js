import React from 'react';
import { View, Image, Text,ScrollView } from 'react-native';
import { styles } from './DonutChart.style';
import { DEFAULT_DEBIT, DEFAULT_CREDIT } from './DonutConstants';
import { Header } from '../../components/Header';
import { CollapsingList } from '../../components/ListViewCollapse'; // Importing AccList component

const total = '\uE001 10000.00'; // Example total value, replace with actual logic if needed
const DonutChart = ({ debit = DEFAULT_DEBIT, credit = DEFAULT_CREDIT }, navigation) => {
  const serverIp = 'http://127.0.0.1:8080'; // replace with your Mac IP
  const imageUrl = `${serverIp}/donut-chart?debit=${debit}&credit=${credit}`;

  return (
   

    <View style={{  }}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.chart} resizeMode="contain" />
        <Text style={styles.title}>{total}</Text>
      </View>        
    </View>

   
  );
};

export default DonutChart;