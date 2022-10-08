import * as React from 'react';
import {StyleSheet, View} from 'react-native';

const Wrapper = ({children}: {children: React.ReactNode}) => (
  <View style={styles.wrapper}>{children}</View>
);

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
