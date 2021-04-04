import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import rule from '.';
import AccessibilityEngine from 'react-native-accessibility-engine';
import TestAssets from 'tests/assets';

const run = (component: React.ReactElement<any>) => {
  return AccessibilityEngine.check(component, [rule]);
};

// To inspect these components, run the example app under "Rules -> Button Role"

it("throws if 'accessibilityRole' prop not defined", () => {
  const Button = () => (
    <TouchableOpacity>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityRole' prop has a value other than 'button'", () => {
  const Button = () => (
    <TouchableOpacity accessibilityRole={'text'}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityRole' prop has the value 'button'", () => {
  const Button = () => (
    <TouchableOpacity accessibilityRole={'button'}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});
