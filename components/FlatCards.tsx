import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.flatCard1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.flatCard1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.flatCard1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.flatCard1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    paddingHorizontal: 10,
  },
  container: {
    // flex: 1,
    flexDirection: 'row',

    padding: 10,
  },
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatCard1: {
    backgroundColor: '#FF0000',
    marginHorizontal: 8,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
