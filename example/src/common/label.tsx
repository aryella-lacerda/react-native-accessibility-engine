import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = ({ text }: { text: string }) => (
  <Text style={styles.label}>{text}</Text>
);

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '400',
  },
});
