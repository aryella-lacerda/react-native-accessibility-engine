import * as React from 'react';
import { StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Label, Wrapper } from '../common';
import Images from '../images';

const ImageButtonRole = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Wrapper>
        <Label text={'Button with imagebutton role'} />
        <Pressable
          accessibilityRole={'imagebutton'}
          accessibilityLabel={'Like'}
        >
          <Image source={Images.heart['32px']} />
        </Pressable>
      </Wrapper>

      <Wrapper>
        <Label text={'Button with button role'} />
        <Pressable accessibilityRole={'button'} accessibilityLabel={'Love'}>
          <Image source={Images.heart['32px']} />
        </Pressable>
      </Wrapper>
    </ScrollView>
  );
};

export default ImageButtonRole;

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
