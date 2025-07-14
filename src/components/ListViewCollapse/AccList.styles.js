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
    alignSelf: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ddd'
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    padding: 11,
    backgroundColor: '#fff'
  },
  subText: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#333',
    fontWeight: 'bold'
  },
});