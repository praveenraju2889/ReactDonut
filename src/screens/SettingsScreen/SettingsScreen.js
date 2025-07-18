import React,{useCallback} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { CollapsingList } from '../../components/ListViewCollapse';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';



const data = [
  { id: '1', title: 'Account Settings', content: 'Manage your account settings', amt: '' },
  { id: '2', title: 'Privacy Settings', content: 'Adjust your privacy preferences', amt: '' },
  { id: '3', title: 'Notification Settings', content: 'Configure your notifications', amt: '' },
  { id: '4', title: 'Security Settings', content: 'Update your security settings', amt: '' },
  { id: '5', title: 'Language Settings', content: 'Change your language preferences', amt: '' }
];
const SettingsScreen = () => {
  const navigation = useNavigation();
   const handleRowPress = useCallback((item) => {
    Alert.alert('Settings Option', `You selected: ${item.title}`);
          }, [navigation]);
  return (  
    <View style={styles.container}>
      {/* <Header title="Settings"   /> */}
      <CollapsingList data={data} onItemPress={ handleRowPress}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center'},
  text: { padding:20 ,fontSize: 24, fontWeight: 'bold' ,justifyContent:'center',marginTop:40,marginBottom:20}
});

export default SettingsScreen;