import React,{useCallback} from 'react';
import { View, Image, Text, ScrollView, Button } from 'react-native';
import { styles } from './Dashboard.styles';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../../components/Footer/FooterMenu'; // Importing FooterMenu component

import { CollapsingList } from '../../components/ListViewCollapse'; // Importing AccList component

const data = [
    { id: '1', title: 'Accounts', content: 'XXX XXX XXX 1234', amt: '\uE001 10000.00' },
    { id: '2', title: 'Debit Card', content: 'XXX XXX XXX 1234', amt: '\uE001 10000' },
    { id: '3', title: 'Credit Card', content: 'XXX XXX XXX 1234', amt: '\uE001 10000' },
    { id: '4', title: 'Loans', content: 'XXX XXX XXX 1234', amt: '\uE001 10000' },
    { id: '5', title: 'Deposit', content: 'XXX XXX XXX 1234', amt: '\uE001 10000' }

];
const total = '\uE001 10000.00'; // Example total value, replace with actual logic if needed
const Dashboard = ({ debit = 4000, credit = 4000 }) => {
        const navigation = useNavigation();
    
    const serverIp = 'http://127.0.0.1:8080'; // replace with your Mac IP
    const imageUrl = `${serverIp}/donut-chart?debit=${debit}&credit=${credit}`;

    const handleRowPress = useCallback((item) => {
            navigation.navigate('DetailsScreen', { item: { title: item.title, id: item.amt } });
        }, [navigation]);
    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>         
        <ScrollView style={styles.scrollContainer}>

            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Header title="Account Summary" onBack={() => navigation.goBack()} />
                    <Image source={{ uri: imageUrl }} style={styles.chart} resizeMode="contain" />
                    <Text style={styles.title}>{total}</Text>
                </View>
                <CollapsingList data={data} onItemPress={handleRowPress}/> {/* Using the AccList component */}
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title='Transfers' onPress={() => navigation.navigate('TransferScreen')} />
                    </View>
            </View>

        </ScrollView>
          <FooterMenu />

        </View>
    );
};

export default Dashboard;