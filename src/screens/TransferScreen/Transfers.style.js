import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: { flex: 1, padding: 8, width: '100%', height: '100%', backgroundColor: '#ffffffff', borderBlockColor: '#ddd',  borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    containerDetails: { flex:1,marginTop: 10, backgroundColor: '#fefefeff', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#ddd', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, fontFamily: 'OpenSans-SemiBold', marginHorizontal: 10, marginVertical: 5 },
    title: { fontFamily: 'OpenSans-Bold', fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
    subTitle: { fontFamily: 'OpenSans-Bold', fontSize: 15, fontWeight: 'normal', marginBottom: 12 }

});

export { styles };