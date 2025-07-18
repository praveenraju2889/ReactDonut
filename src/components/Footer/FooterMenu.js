import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const FooterMenu = () => {
  const navigation = useNavigation();
  const slideAnim = useRef(new Animated.Value(100)).current; // Start footer offscreen

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView>
      <Animated.View style={[styles.footer, { transform: [{ translateY: slideAnim }] }]}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('TransferScreen')}>
          <Icon name="transfer" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Transfers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('TransferScreen')}>
          <Icon name="cash" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Payments</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('TransferScreen')}>
          <Icon name="account" size={28} color="#fff" />
          <Text style={styles.iconLabel}>My Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={28} color="#fff" />
          <Text style={styles.iconLabel}>Settings</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#005a96ff',
    paddingVertical: 12,
    borderRadius: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 10,
    elevation: 10, // For Android shadow
  },
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
    fontFamily: 'OpenSans-SemiBold',
    textAlign: 'center',
    //width: 70, // Ensure text fits within button
    fontWeight: 'bold',
  },
});

export default FooterMenu;
