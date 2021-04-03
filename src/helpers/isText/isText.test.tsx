import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Text, View } from 'react-native';
import isText from './isText';

it('should identify an empty text node', () => {
  let renderedTree = TestRenderer.create(<Text />);

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a non-empty text node', () => {
  let renderedTree = TestRenderer.create(<Text>I am not empty!</Text>);

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a text node wrapped in a view', () => {
  let renderedTree = TestRenderer.create(
    <View>
      <Text>I am not empty!</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify a text node wrapped in another text node', () => {
  let renderedTree = TestRenderer.create(
    <Text>
      <Text>I am not empty!</Text>
    </Text>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(2);
});

it('should identify multiple text nodes', () => {
  let renderedTree = TestRenderer.create(
    <View>
      <Text>Node 1</Text>
      <Text>Node 2</Text>
    </View>
  );

  const matcher = (node: ReactTestInstance) => isText(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(2);
});
