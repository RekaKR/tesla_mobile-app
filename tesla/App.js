import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import uuid from 'react-native-uuid';
//uuid.v4()

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground style={styles.image} source={require('./assets/images/ModelX.jpeg')} />

        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute'
  },
  titles: {
    width: '100%',
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    color: '#5c5e62',
    fontSize: 16
  }
});

export default App;
