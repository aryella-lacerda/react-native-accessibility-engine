import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import rule from './buttonState';
import AccessibilityEngine from 'react-native-accessibility-engine';
import TestAssets from 'tests/assets';

const run = (component: React.ReactElement<any>) => {
  return AccessibilityEngine.check(component, [rule]);
};

// To inspect these components, run the example app under "Rules -> Button State"

it("throws if 'accessibilityState' prop not defined", () => {
  const Button = () => (
    <TouchableOpacity>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityState' prop equals empty object'", () => {
  const Button = () => (
    <TouchableOpacity accessibilityState={{}}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
  const Button = () => (
    <TouchableOpacity accessibilityState={{ expanded: true }}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = true' key-value pair", () => {
  const Button = () => (
    <TouchableOpacity accessibilityState={{ disabled: true }}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = false' key-value pair", () => {
  const Button = () => (
    <TouchableOpacity accessibilityState={{ disabled: false }}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});
