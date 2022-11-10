import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { AccessibilityError } from '../engine';
import Icons from 'tests/assets';
import pressableAccessibleRequired from '../rules/pressable-accessible-required';

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

it('should allow a returnViolations to be customizeable', () => {
  // returnViolations defaults to true
  expect(() => expect(<NonAccessibleButton />).toBeAccessible()).not.toThrow(
    AccessibilityError
  );
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({ returnViolations: false })
  ).toThrow(AccessibilityError);
});

it('should allow custom behavior after jest matcher check ', () => {
  const testOverrideReturnFunctionality = () => [];
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({
      overrideReturnFunctionality: testOverrideReturnFunctionality,
    })
  ).not.toThrow();
});

it('should allow configurable rules for the jest matcher', () => {
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({
      rules: [],
    })
  ).not.toThrow();

  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({
      rules: [pressableAccessibleRequired],
    })
  ).toThrow(pressableAccessibleRequired.help.problem);
});
