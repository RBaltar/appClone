import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  barraSup: {
    backgroundColor: '#000',
    width: 400,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  barraInf: {
    backgroundColor: '#000',
    width: 500,
    height: 60,
    bottom: 0,
    flexDirection: 'row',
    
  },

  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: 'auto',
    maxHeight: 'auto',
    alignItems: 'center'
  },

  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    backgroundColor: '#f9750c',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    margin: 12,
    padding: 10,
  },

  texto: {
    color: '#fff',
    fontSize: 19,
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: "underline"
  },

  esqueci: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonLogin: {
    backgroundColor: '#fff',
    width: 60,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
});
