import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  title: string;
}

const Section: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});
