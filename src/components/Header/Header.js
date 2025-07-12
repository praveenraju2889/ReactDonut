import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './Header.styles';

const Header = ({ title, onBack, rightContent }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* {onBack ? (
          <TouchableOpacity onPress={onBack}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.placeholder} />
        )} */}

        <Text style={styles.title}>{title}</Text>

        {/* <View style={styles.right}>
          {rightContent || <View style={styles.placeholder} />}
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Header;
