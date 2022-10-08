import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Label, Wrapper} from '../common';

const LinkRoleMissused = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Label text={"No defined 'accessibilityRole' prop"} />
        <Text>Read More</Text>
      </Wrapper>

      <Wrapper>
        <Label text={"Explicity defined accessibilityRole={'text'}"} />
        <Text accessibilityRole={'text'}>Read More</Text>
      </Wrapper>

      <Wrapper>
        <Label text={"Explicity defined accessibilityRole={'link'}"} />
        <Text accessibilityRole={'link'}>Read More</Text>
      </Wrapper>
    </View>
  );
};

export default LinkRoleMissused;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
});
