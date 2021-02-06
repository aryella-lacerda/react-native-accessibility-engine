import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Images from '../images';

const Label = ({ text }: { text: string }) => (
  <Text style={styles.label}>{text}</Text>
);

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.wrapper}>{children}</View>
);

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Label text={'Empty button'} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {}}
          accessibilityLabel={'Label'}
          accessibilityHint={'What'}
        />
      </Wrapper>

      <Wrapper>
        <Label text={'Empty text content'} />
        <TouchableOpacity style={styles.button}>
          <Text />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Only non-text content'} />
        <TouchableOpacity style={styles.button}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Text and non-text content'} />
        <TouchableOpacity style={styles.button}>
          <Image source={Images.heart['32px']} />
          <Text>Button</Text>
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Text content'} />
        <TouchableOpacity style={styles.button}>
          <Text>Button</Text>
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Same text content + accessibility label'} />
        <TouchableOpacity style={styles.button} accessibilityLabel={'Test'}>
          <Text>Test</Text>
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={
            'Different text content ("Test") + accessibility label ("Button")'
          }
        />
        <TouchableOpacity style={styles.button} accessibilityLabel={'Button'}>
          <Text>Test</Text>
        </TouchableOpacity>
      </Wrapper>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 20,
    width: 120,
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '500',
  },
  wrapper: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
