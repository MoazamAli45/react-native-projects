import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.title}>Home town</Text>
          <Text style={styles.label}>In lahore</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            perspiciatis hic ad pariatur sunt distinctio quidem fugit esse iste
            labore molestiae eum, perferendis temporibus aliquam dolore corporis
            soluta omnis accusamus!
          </Text>
          <Text style={styles.footer}>12 Jun 2020</Text>
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
  card: {
    width: 350,
    height: 380,
    marginHorizontal: 20,
    marginVertical: 8,
    padding: 8,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 1, height: 1},
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  label: {
    fontSize: 16,
    color: '#000000',
  },
  description: {
    fontSize: 14,
  },
  footer: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'right',
  },
});
