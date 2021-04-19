import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Button from '../Button/Button';
import styles from './CarItemStyle';

const CarItem = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {`${tagline} `}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button type="primary" content="Custom Order" onPress={() => console.warn("Custom Order was pressed")} />
        <Button type="secondary" content="Existing Inventory" onPress={() => console.warn("Existing Inventory was pressed")} />
      </View>
    </View>
  )
}

export default CarItem;