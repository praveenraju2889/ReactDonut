import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CollapsingList } from '../../components/ListViewCollapse';

// Sample data for the carousel

const { width: screenWidth } = Dimensions.get('window');

const data = [
    { title: 'New Beneficiary', icon: 'account-plus' },
    { title: 'Existing Beneficiary', icon: 'account-multiple' },
    { title: 'Instant Transfer', icon: 'lightning-bolt' },
    { title: 'Pay Bills', icon: 'file-document' },
    { title: 'Settings', icon: 'cog' }
];

const CarouselView = ({ route }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item, index }) => {
        const isActive = index === activeIndex;
        return (
            <View style={[styles.card, isActive ? styles.activeCard : styles.inactiveCard]}>
                <Icon
                    name={item.icon}
                    size={30}
                    color={isActive ? '#fff' : '#D10000'}
                />
                <Text style={[styles.title, isActive && styles.activeText]}>
                    {item.title}
                </Text>
            </View>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
            <View style={{ alignItems: 'center', marginTop: 20 ,paddingBottom: 20,marginBottom:2}}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth * 0.3}
                inactiveSlideScale={0.85}
                inactiveSlideOpacity={0.6}
                onSnapToItem={(index) => setActiveIndex(index)}
                activeSlideAlignment="center"
                loop
                autoplay={false}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={activeIndex}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            
        </View>
            {/* <CollapsingList /> */}
        </View>
        

    );
};



const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        marginHorizontal: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        //elevation: 2,
    },
    activeCard: {
        backgroundColor: '#D10000',
        transform: [{ scale: 1.2 }],        
    },
    inactiveCard: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd'
    },
    title: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    activeText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D10000'
    }
});

export default CarouselView;
