import React from 'react';
import { View, Image, Text, ScrollView, Button } from 'react-native';
import { styles } from './Dashboard.styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

import { CollapsingList } from '../../components/ListViewCollapse'; // Importing AccList component

const total = '\uE001 10000.00'; // Example total value, replace with actual logic if needed
const Dashboard = ({ debit = 4000, credit = 4000 }) => {
        const navigation = useNavigation();
    
    const serverIp = 'http://127.0.0.1:8080'; // replace with your Mac IP
    const imageUrl = `${serverIp}/donut-chart?debit=${debit}&credit=${credit}`;

    return (
        <ScrollView style={styles.scrollContainer}>

            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header title="Dashboard" onBack={() => navigation.goBack()} />
                    <Image source={{ uri: imageUrl }} style={styles.chart} resizeMode="contain" />
                    <Text style={styles.title}>{total}</Text>
                </View>
                <CollapsingList /> {/* Using the AccList component */}
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='TransferScreen' onPress={() => navigation.navigate('TransferScreen')} />
                    </View>
            </View>

        </ScrollView>
    );
};

export default Dashboard;