import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icons from '@tests/assets';
import { AccessibilityError } from '../engine';
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

it('should always force returnViolations to be true', () => {
  // returnViolations defaults to true
  expect(() => expect(<NonAccessibleButton />).toBeAccessible()).not.toThrow(
    AccessibilityError
  );
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({ returnViolations: false })
  ).not.toThrow(AccessibilityError);
});

it('should allow configurable rules for a single run of jest matcher', () => {
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({ rules: [] })
  ).not.toThrow();
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({
      rules: ['pressable-accessible-required'],
    })
  ).toThrow(pressableAccessibleRequired.help.problem);
});

it('should allow custom handling for a single run of jest matcher', () => {
  const testOverrideReturnFunctionality = () => [];
  expect(() =>
    expect(<NonAccessibleButton />).toBeAccessible({
      customViolationHandler: testOverrideReturnFunctionality,
    })
  ).not.toThrow();
});

it('should allow configurable default rules for the jest matcher', () => {
  global.__A11Y_RULES__ = [];

  expect(() => expect(<NonAccessibleButton />).toBeAccessible()).not.toThrow();

  global.__A11Y_RULES__ = ['pressable-accessible-required'];

  expect(() => expect(<NonAccessibleButton />).toBeAccessible()).toThrow(
    pressableAccessibleRequired.help.problem
  );
});

it('should allow configurable default customViolationHandler for the jest matcher', () => {
  const mockHandler = jest.fn();
  global.__CUSTOM_VIOLATION_HANDLER__ = (violations) => {
    mockHandler();
    return violations;
  };

  expect(<NonAccessibleButton />).not.toBeAccessible();
  expect(mockHandler).toHaveBeenCalled();
});
