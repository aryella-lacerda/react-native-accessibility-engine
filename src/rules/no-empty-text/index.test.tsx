import React from 'react';
import { Text, View } from 'react-native';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { ruleIds: [rule.id] });
};

it('throws if text node has no content', () => {
  const TestText = () => <Text />;
  expect(() => run(<TestText />)).toThrowError(rule.help.problem);
});

it('throws if text node within a View has no content', () => {
  const TestText = () => (
    <View>
      <Text />
    </View>
  );
  expect(() => run(<TestText />)).toThrowError(rule.help.problem);
});

it('throws if text has an empty text node as child', () => {
  const TestText = () => (
    <Text>
      <Text />
    </Text>
  );

  expect(() => run(<TestText />)).toThrowError(rule.help.problem);
});

it('does not throw if text node has content', () => {
  const TestText = () => <Text>Testing</Text>;
  expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
});

it('does not throw if text node has a child text node with content', () => {
  const TestText = () => (
    <Text>
      <Text>Testing</Text>
    </Text>
  );
  expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
});
