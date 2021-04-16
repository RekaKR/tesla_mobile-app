import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../Button/Button';
import styles from './CarItemStyle';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={require('../../assets/images/ModelX.jpeg')} />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <Button type="primary" content="Custom Order" onPress={() => console.warn("Custom Order was pressed")} />
      <Button type="secondary" content="Existing Inventory" onPress={() => console.warn("Existing Inventory was pressed")} />
    </View>
  )
}

export default CarItem;