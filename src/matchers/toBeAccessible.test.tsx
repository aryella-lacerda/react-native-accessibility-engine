import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icons from 'tests/assets';

const NonAccessibleButton = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

const Button = () => (
  <TouchableOpacity
    accessible
    accessibilityRole="button"
    accessibilityLabel="Like"
  >
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should contain accessibility errors', () => {
  expect(<NonAccessibleButton />).not.toBeAccessible();
});

it('should not contain accessibility errors', () => {
  expect(<Button />).toBeAccessible();
});

it('should report error if component is not accessible', () => {
  expect(() => expect(<NonAccessibleButton />).toBeAccessible()).toThrow();
});

it('should not report error if component is accessible', () => {
  expect(() => expect(<Button />).not.toBeAccessible()).toThrow();
});
