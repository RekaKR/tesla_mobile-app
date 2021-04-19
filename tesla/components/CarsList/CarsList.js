import React from 'react'
import { View, FlatList, Dimensions } from 'react-native'
import uuid from 'react-native-uuid';
import cars from './cars'
import CarItem from '../CarItem/CarItem'
import styles from './CarListStyle'

const CarsList = () => {
  return (
    <View style={styles.carListContainer}>
      <FlatList data={cars}
        keyExtractor={(item) => uuid.v4()} renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment='start' decelerationRate='fast' snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}

export default CarsList
