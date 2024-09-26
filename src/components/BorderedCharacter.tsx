import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BorderedCharacterText = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      {text.split('').map((char, index) => (
        <View key={index} style={styles.charWrapper}>
          <Text style={styles.charText}>{char}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow wrapping in case of long text
  },
  charWrapper: {
    borderWidth: 1, // Border around each character
    borderColor: 'black',
    margin: 2, // Spacing between characters
    padding: 4, // Padding around characters
  },
  charText: {
    fontSize: 20,
    color: 'black',
  },
});

export default BorderedCharacterText;
