import React from 'react';
import { View, StyleSheet } from 'react-native';
//import uuid from 'react-native-uuid';
//uuid.v4()
import CarItem from './components/CarItem/CarItem';

const App = () => {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;