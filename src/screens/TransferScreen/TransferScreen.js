import React, { useState } from 'react';
import { View, Text,FlatList} from 'react-native';
import { styles } from './Transfers.style'; // Importing styles
import { CarouselView } from '../../components/Carousel'; // Assuming you have a carousel component

const TransferScreen = ({  }) => {
    const { item } = "route.params"; // Assuming you pass item through navigation params

    return (
       <View style={styles.container}>
            <CarouselView/>
            <FlatList
                data={[{ id: '1', title: 'Transfer 1' }, { id: '2', title: 'Transfer 2' }]} // Sample data
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.containerDetails}>
                        <Text style={styles.title}>Transfer Title: {item.title}</Text>
                        <Text style={styles.subTitle}>Transfer ID: {item.id}</Text>
                    </View>
                )}
            
            />
        </View>
    );
};

export default TransferScreen;