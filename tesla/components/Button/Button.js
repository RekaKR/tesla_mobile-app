import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './ButtonStyle';

const Button = ({ type, content, onPress }) => {
  const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6';
  const color = type === 'primary' ? '#ffffff' : '#171a20';

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={() => onPress()}>
        <Text style={[styles.buttonText, { color }]}>{content}</Text>
      </Pressable>
    </View >
  )
}

export default Button;