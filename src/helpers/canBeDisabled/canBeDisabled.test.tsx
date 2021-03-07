import React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import canBeDisabled from './canBeDisabled';

it('should identify buttons', () => {
  const Button = () => <TouchableOpacity disabled={true} />;

  let renderedTree = TestRenderer.create(<Button />);

  const matcher = (node: ReactTestInstance) => canBeDisabled(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});

it('should identify sliders', () => {
  const SliderWrapper = () => <Slider disabled={true} />;

  let renderedTree = TestRenderer.create(<SliderWrapper />);

  const matcher = (node: ReactTestInstance) => canBeDisabled(node);
  const matched = renderedTree.root.findAll(matcher);

  expect(matched.length).toBe(1);
});
