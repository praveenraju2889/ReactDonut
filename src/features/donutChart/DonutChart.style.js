import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    fontFamily: 'OpenSans-SemiBold',
  },
  chart: {
    marginTop: 10,
    width: 300,
    height: 300,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: '#ddd',
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    marginBottom: 10,
    fontSize: 22,
    fontFamily: 'OpenSans-Bold',
    color: '#333',
    fontWeight: 'bold'
  },
});
