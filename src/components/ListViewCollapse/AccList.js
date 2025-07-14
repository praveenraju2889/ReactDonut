import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { styles } from './AccList.styles';

//import Icon from 'react-native-vector-icons/MaterialIcons';
//import Icon from 'react-native-vector-icons/FontAwesome';
//const myIcon = <Icon name="rocket" size={30} color="#900" />;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Using MaterialCommunityIcons for expand/collapse icons


// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const data = [
  { id: '1', title: 'Accounts', content: 'XXX XXX XXX 1234',amt: '\uE001 10000.00'},
  { id: '2', title: 'Debit Card', content: 'XXX XXX XXX 1234',amt: '\uE001 10000' },
  { id: '3', title: 'Credit Card', content: 'XXX XXX XXX 1234' ,amt: '\uE001 10000'},
  { id: '4', title: 'Loans', content: 'XXX XXX XXX 1234' ,amt: '\uE001 10000'},
  { id: '5', title: 'Deposit', content: 'XXX XXX XXX 1234',amt: '\uE001 10000'}

];
const CollapsingList = () =>{
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderItem = ({ item, index }) => {
    const isActive = activeIndex === index;

    return (
      <View style={styles.section}>
        <TouchableOpacity style={styles.header} onPress={() => toggleSection(index)}>
          <Text style={styles.headerText}>{item.title}</Text>
          <Icon
            name={isActive ? 'chevron-up' : 'chevron-down'} // Using plus for collapsed and minus for expanded
            size={24}
            color="#333"
          />


        </TouchableOpacity>

        {isActive && (
          <View style={styles.content}>
            <Text>{item.content}</Text>
            <Text style={styles.subText}>{item.amt}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}



export default CollapsingList;


