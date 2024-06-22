import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({ text, onPress, containerStyles }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#c9f0f2',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
     borderWidth: 0.3,
    borderColor: '#a15e1b',
  },
  text: {
    fontSize: 16,
  },
})

export default Button;