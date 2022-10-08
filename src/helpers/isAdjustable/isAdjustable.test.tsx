// @ts-nocheck
import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import CommunitySlider from '@react-native-community/slider';
import isAdjustable from './isAdjustable';

const CustomSlider = () => (
  <CommunitySlider minimumValue={1} maximumValue={100} />
);

const cases = [
  ['community Slider', CommunitySlider, 1],
  ['any slider component in a wrapper', CustomSlider, 1],
];

test.each(cases)(`identifies %p`, (_, Component, numOfMatches) => {
  let renderedTree = TestRenderer.create(
    <Component maximumValue={10} minimumValue={1} />
  );

  const matcher = (node: ReactTestInstance) => isAdjustable(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(numOfMatches);
});
