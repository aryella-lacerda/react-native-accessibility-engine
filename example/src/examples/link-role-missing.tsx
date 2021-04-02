import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Label, Wrapper } from '../common';

const LinkRoleMissing = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Label text={"No defined 'accessibilityRole' prop"} />
        <Text style={styles.link} onPress={() => {}}>
          Read More
        </Text>
      </Wrapper>

      <Wrapper>
        <Label text={"Explicity defined accessibilityRole={'text'}"} />
        <Text style={styles.link} onPress={() => {}} accessibilityRole={'text'}>
          Read More
        </Text>
      </Wrapper>

      <Wrapper>
        <Label text={"Explicity defined accessibilityRole={'link'}"} />
        <Text style={styles.link} onPress={() => {}} accessibilityRole={'link'}>
          Read More
        </Text>
      </Wrapper>
    </View>
  );
};

export default LinkRoleMissing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  link: {
    color: 'blue',
  },
});
