import React from 'react';
import { View, StyleSheet } from 'react-native';
import CarsList from './components/CarsList/CarsList';

const App = () => {
  return (
    <View style={styles.container}>
      <CarsList />
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