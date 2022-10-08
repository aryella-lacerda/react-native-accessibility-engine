import * as React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import {Label, Wrapper} from '../common';

const Texts = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Wrapper>
        <Label text={'node contains content'} />
        <Text style={styles.other}>Testing</Text>
      </Wrapper>

      <Wrapper>
        <Label text={'node does NOT contain content'} />
        <Text style={styles.other} />
      </Wrapper>

      <Wrapper>
        <Label text={'node with an empty node'} />
        <Text style={styles.other}>
          <Text style={styles.other} />
        </Text>
      </Wrapper>
    </ScrollView>
  );
};

export default Texts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  other: {
    borderWidth: 3,
  },
});
