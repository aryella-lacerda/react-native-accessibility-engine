// @ts-nocheck
import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { Image, View } from 'react-native';
import Images from '../../__tests__/assets';
import isImage from './isImage';

it('should identify an image with source', () => {
  let renderedTree = TestRenderer.create(
    <Image source={Images.heart['32px']} />
  );

  const matcher = (node: ReactTestInstance) => isImage(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify an image with no source', () => {
  let renderedTree = TestRenderer.create(<Image />);

  const matcher = (node: ReactTestInstance) => isImage(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify an image inside a view', () => {
  let renderedTree = TestRenderer.create(
    <View>
      <Image />
    </View>
  );

  const matcher = (node: ReactTestInstance) => isImage(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify multilpe images inside a parent view', () => {
  let renderedTree = TestRenderer.create(
    <View>
      <Image />
      <Image />
    </View>
  );

  const matcher = (node: ReactTestInstance) => isImage(node.type);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(2);
});
