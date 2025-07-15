import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text style={styles.subTitle}>Item Title: {item.title}</Text>
      <Text style={styles.subTitle}>Item ID: {item.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: {     fontFamily: 'OpenSans-Bold',fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
    subTitle: {     fontFamily: 'OpenSans-Bold',fontSize: 15, fontWeight: 'regular', marginBottom: 12 }

});

export default DetailsScreen;
