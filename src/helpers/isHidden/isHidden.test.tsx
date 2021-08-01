import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { View } from 'react-native';
import isHidden from './isHidden';

it('should identify a node with accessibilityElementsHidden prop', () => {
  let renderedTree = TestRenderer.create(<View accessibilityElementsHidden />);

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBeTruthy();
});

it('should identify a node with importantForAccessibility prop set to "no-hide-descendants"', () => {
  let renderedTree = TestRenderer.create(
    <View importantForAccessibility="no-hide-descendants" />
  );

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBeTruthy();
});

it('should not identify a node with importantForAccessibility prop set to val other than "no-hide-descendants"', () => {
  let renderedTree = TestRenderer.create(
    <View importantForAccessibility="yes" />
  );

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBeFalsy();
});

it('should not identify a node without accessibilityElementsHidden or importantForAccessibility props', () => {
  let renderedTree = TestRenderer.create(<View />);

  const matcher = (node: ReactTestInstance) => isHidden(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBeFalsy();
});
