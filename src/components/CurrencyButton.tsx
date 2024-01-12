import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export default function CurrencyButton({
  name,
  flag,
}: CurrencyButtonProps): JSX.Element {
  return (
    <View style={styles.flagContainer}>
      <Text style={styles.flag}>{flag}</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flagContainer: {
    alignItems: 'center',
    // backgroundColor: '#FFFFFFF',
    borderRadius: 12,
    // paddingHorizontal: 8,
  },
  flag: {
    fontSize: 24,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2d3436',
  },
});
