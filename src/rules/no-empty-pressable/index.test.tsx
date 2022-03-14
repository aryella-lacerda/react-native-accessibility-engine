import React from 'react';
import { Pressable, Text, View } from 'react-native';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule] });
};

it('throws if pressable node has no content', () => {
  const TestPressable = () => <Pressable />;
  expect(() => run(<TestPressable />)).toThrowError(rule.help.problem);
});

it('throws if pressable node within a View has no content', () => {
  const TestPressable = () => (
    <View>
      <Pressable />
    </View>
  );
  expect(() => run(<TestPressable />)).toThrowError(rule.help.problem);
});

it('throws if pressable has an empty pressable node as child', () => {
  const TestPressable = () => (
    <Pressable>
      <Pressable />
    </Pressable>
  );

  expect(() => run(<TestPressable />)).toThrowError(rule.help.problem);
});

it('does not throw if pressable node has content', () => {
  const TestPressable = () => (
    <Pressable>
      <Text>Testing</Text>
    </Pressable>
  );
  expect(() => run(<TestPressable />)).not.toThrowError(rule.help.problem);
});

it('does not throw if text node has a child text node with content', () => {
  const TestPressable = () => (
    <Pressable>
      <View>
        <Text>Testing</Text>
      </View>
    </Pressable>
  );
  expect(() => run(<TestPressable />)).not.toThrowError(rule.help.problem);
});
