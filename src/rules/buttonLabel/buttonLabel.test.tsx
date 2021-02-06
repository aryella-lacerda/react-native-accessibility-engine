import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import rule from './buttonLabel';
import engine from '../../engine';
import TestAssets from '../../__tests__/assets';

const run = (component: React.ReactElement<any>) => {
  return engine(component, [rule]);
};

// To inspect these components, run the example app under "Rules -> Button Label"

it('throws in the case of empty button', () => {
  expect(() => run(<TouchableOpacity />)).toThrowError(rule.help.problem);
});

it('throws if the button has empty text content', () => {
  const Button = () => (
    <TouchableOpacity>
      <Text />
    </TouchableOpacity>
  );

  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it('throws if the button only has non-text content', () => {
  const Button = () => (
    <TouchableOpacity>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );
  expect(() => run(<Button />)).toThrowError(rule.help.problem);
});

it("doesn't throw if the button has text content", () => {
  const Button = () => (
    <TouchableOpacity>
      <Text>Test</Text>
    </TouchableOpacity>
  );
  expect(() => run(<Button />)).not.toThrow();
});

it("doesn't throw if the button has text + non-text content", () => {
  const Button = () => (
    <TouchableOpacity>
      <Text>Test</Text>
      <Image source={TestAssets.heart['32px']} />
    </TouchableOpacity>
  );
  expect(() => run(<Button />)).not.toThrow();
});
