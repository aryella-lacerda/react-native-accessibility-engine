import * as React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Label, Wrapper} from '../common';

import Images from '../images';

const Buttons = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Wrapper>
        <Label
          text={
            "accessibilityState={undefined}\n 'disabled' prop is false by default"
          }
        />
        <TouchableOpacity style={styles.button}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={"accessibilityState={{}}\n 'disabled' prop is false by default"}
        />
        <TouchableOpacity style={styles.button} accessibilityState={{}}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={
            "accessibilityState={{ other: true }}\n 'disabled' prop is false by default"
          }
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{expanded: true}}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={
            "accessibilityState={{ disabled: true }}\n 'disabled' prop is false by default"
          }
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{disabled: true}}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={
            "accessibilityState={{ disabled: false }}\n 'disabled' prop is false by default"
          }
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{disabled: false}}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      {/* <Wrapper>
        <Label
          text={'accessibilityState={{ disabled: false }}\n disabled={true}'}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{ disabled: false }}
          disabled={true}
        >
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={'accessibilityState={{ disabled: false }}\n disabled={false}'}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{ disabled: false }}
          disabled={false}
        >
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={'accessibilityState={{ disabled: true }}\n disabled={false}'}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{ disabled: true }}
          disabled={false}
        >
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label
          text={'accessibilityState={{ disabled: true }}\n disabled={true}'}
        />
        <TouchableOpacity
          style={styles.button}
          accessibilityState={{ disabled: true }}
          disabled={true}
        >
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper> */}
    </ScrollView>
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
});
