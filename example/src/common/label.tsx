import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = ({ text }: { text: string }) => (
  <Text style={styles.label}>{text}</Text>
);

export default Label;

const styles = StyleSheet.create({
  label: {
    textTransform: 'uppercase',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '500',
  },
});
