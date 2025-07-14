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
import Icon from 'react-native-vector-icons/Ionicons';



// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const data = [
  { id: '1', title: 'Accounts', content: 'XXX XXX XXX 1234',amt: '10000 AED' },
  { id: '2', title: 'Debit Card', content: 'XXX XXX XXX 1234',amt: '10000 AED' },
  { id: '3', title: 'Credit Card', content: 'XXX XXX XXX 1234' ,amt: '10000 AED'},
    { id: '4', title: 'Credit Card', content: 'XXX XXX XXX 1234' ,amt: '10000 AED'},
      { id: '5', title: 'Credit Card', content: 'XXX XXX XXX 1234',amt: '10000 AED'}

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
            name={isActive ? 'chevron-up-outline' : 'chevron-down-outline'}
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        {isActive && (
          <View style={styles.content}>
            <Text>{item.content}</Text>
            <Text>{item.amt}</Text>
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


