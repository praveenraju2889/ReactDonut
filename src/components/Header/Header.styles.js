import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    //backgroundColor: '#f4f4f4',
    borderBottomColor: '#dddd',
    height: 60,
    width: '110%',
    marginBlockStart: 20,
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    verticalAlign: 'bottom',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Open Sans-SemiBold',
    height: 60,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    alignContent: 'center',
  },
  back: {
    fontSize: 22,
    color: '#007aff',
  },
  right: {
    width: 50,
    alignItems: 'flex-end',
  },
  placeholder: {
    width: 100,
  },
});
