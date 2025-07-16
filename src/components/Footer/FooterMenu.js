import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FooterMenu = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="home" size={28} color="#fff" />
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="account" size={28} color="#fff" />
        <Text style={styles.iconLabel}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="bell" size={28} color="#fff" />
        <Text style={styles.iconLabel}>Alerts</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton}>
        <Icon name="cog" size={28} color="#fff" />
        <Text style={styles.iconLabel}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#032b45ff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
});

export default FooterMenu;
