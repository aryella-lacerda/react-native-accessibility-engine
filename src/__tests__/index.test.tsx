import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Img from './assets';
import run from '../engine';

const Button = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Img.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should not have accessibility errors', () => {
  expect(() => run(<Button />)).toThrow();
});
