import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={[styles.card, styles.elevatedCard1]}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard2]}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard3]}>
          <Text style={styles.cardText}>Card 3</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard4]}>
          <Text style={styles.cardText}>Card 4</Text>
        </View>
      </ScrollView>
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
    margin: 8,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  elevatedCard1: {
    backgroundColor: '#FF0000',
    borderRadius: 10,
    elevation: 40,
  },
  elevatedCard2: {
    backgroundColor: '#00FF00',
    borderRadius: 10,
    // elevation: 20,
  },
  elevatedCard3: {
    backgroundColor: '#0000FF',
    borderRadius: 10,
    // elevation: 30,
  },
  elevatedCard4: {
    backgroundColor: '#FFFF00',
    borderRadius: 10,
    // elevation: 40,
  },
  cardText: {
    color: '#FFFFFF',
  },
});
