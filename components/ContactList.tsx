import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <View style={styles.container}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.card}>
            <Image
              source={{
                uri: contact.imageUrl,
              }}
              style={styles.cardImage}
            />
            <View>
              <Text style={styles.text}>{contact.name}</Text>
              <Text style={styles.status}>{contact.status}</Text>
            </View>
          </View>
        ))}
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
    padding: 10,
    marginVertical: 5,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: '#FF3E4D',
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  status: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
