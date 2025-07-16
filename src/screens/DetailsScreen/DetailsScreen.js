import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DonutChart } from '../../features/donutChart';
import { CarouselView } from '../../components/Carousel'; // Assuming you have a carousel component

const DetailsScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <DonutChart />
            <View style={styles.containerDeatils}>
                <Text style={styles.title}>Details</Text>
                <Text style={styles.subTitle}>Item Title: {item.title}</Text>
                <Text style={styles.subTitle}>Item ID: {item.id}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 2 },
    containerDeatils: {
        marginTop: 20,
        padding: 0,
        alignItems: 'left',
        justifyContent: 'left',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        fontFamily: 'OpenSans-SemiBold',
        marginHorizontal: 16,
        marginVertical: 10,
    },
    title: { fontFamily: 'OpenSans-Bold', fontSize: 20, fontWeight: 'bold' },
    subTitle: { fontFamily: 'OpenSans-Bold', fontSize: 15, fontWeight: 'regular' }

});

export default DetailsScreen;
