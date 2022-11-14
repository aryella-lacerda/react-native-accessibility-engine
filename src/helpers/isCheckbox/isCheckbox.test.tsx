import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import {
  View,
  TouchableOpacity,
  Pressable,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import isCheckbox from './isCheckbox';

const pressableTestCases: Array<[string, React.ReactNode]> = [
  ['TouchableOpacity', TouchableOpacity],
  ['TouchableHighlight', TouchableHighlight],
  ['TouchableWithoutFeedback', TouchableWithoutFeedback],
  ['Pressable', Pressable],
];

test.each(pressableTestCases)(
  `should identify a %p with a checkbox role`,
  (_, Component) => {
    let renderedTree = TestRenderer.create(
      // @ts-expect-error
      <Component accessibilityRole="checkbox">
        <Text>Checkbox</Text>
      </Component>
    );

    const matcher = (node: ReactTestInstance) => isCheckbox(node);
    const matched = renderedTree.root.findAll(matcher);

    expect(matched.length).toBe(1);
  }
);

test.each(pressableTestCases)(
  `should not identify a %p without a checkbox role`,
  (_, Component) => {
    let renderedTree = TestRenderer.create(
      // @ts-expect-error
      <Component>
        <Text>Checkbox</Text>
      </Component>
    );

    const matcher = (node: ReactTestInstance) => isCheckbox(node);
    const matched = renderedTree.root.findAll(matcher);

    expect(matched.length).toBe(0);
  }
);

it('should not identiy a non-pressable/touchable component, even if it has a checkbox role', () => {
  let renderedTree = TestRenderer.create(
    <View accessibilityRole="checkbox">
      <Text>Something</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isCheckbox(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(0);
});
