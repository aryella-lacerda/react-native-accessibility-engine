import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { render } from '@testing-library/react-native';
import Icons from 'tests/assets';
import AccessibilityEngine from 'react-native-accessibility-engine';

const Button = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should contain accessibility errors', () => {
  // expect(() => AccessibilityEngine.check(<Button />)).not.toThrow();
  expect(<Button />).not.toBeAccessible();
});

it('should support test instances', () => {
  const { UNSAFE_getByType } = render(<Button />);
  const button = UNSAFE_getByType(TouchableOpacity);
  expect(() => AccessibilityEngine.check(button)).toThrow();
});
