import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import rule from './buttonAccessible';
import engine from '../../engine';
import TestAssets from '../../__tests__/assets';

const run = (component: React.ReactElement<any>) => {
  return engine(component, [rule]);
};

// To inspect these components, run the example app under "Rules -> Button Accessible"

it("doesn't throw if 'accessible' prop not defined (buttons are accessible by default)", () => {
  const Button = () => (
    <TouchableOpacity>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessible' prop is defined and equal to true", () => {
  const Button = () => (
    <TouchableOpacity accessible={true}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
});

it("throws if 'accessible' prop is defined and equal to false", () => {
  const Button = () => (
    <TouchableOpacity accessible={false}>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});
