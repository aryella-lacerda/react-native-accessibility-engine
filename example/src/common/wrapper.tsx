import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const Wrapper: React.FC = ({ children, ...props }) => (
  <View style={styles.wrapper} {...props}>
    {children}
  </View>
);

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
