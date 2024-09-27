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
    flexWrap: 'wrap',
  },
  charWrapper: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 2,
    padding: 4,
  },
  charText: {
    fontSize: 20,
    color: 'black',
  },
});

export default BorderedCharacterText;
