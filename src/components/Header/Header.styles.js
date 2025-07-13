import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   // backgroundColor: '#f4f4f4',
    height: 60,
    width: '100%',
    
  },
  safeArea: {
    backgroundColor: '#f4f4f4',
    borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        width: '100%',
    
  },
  title: {
    marginTop: 20,
    verticalAlign: 'bottom',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Open Sans-SemiBold',
    height: 60,
    textAlign: 'center',
    //alignContent: 'center',
    
  },
  back: {
    fontSize: 22,
    color: '#007aff',
  },
  right: {
    width: 10,
    alignItems: 'flex-end',
  },
  placeholder: {
    width: 100,
  },
});
