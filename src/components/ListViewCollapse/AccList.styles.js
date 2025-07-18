import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  section: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 4,
    marginBottom: 10

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
    elevation: 1,},
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },  
  },
  content: {
    padding: 11,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#333',
    fontWeight: 'bold'
  },
});