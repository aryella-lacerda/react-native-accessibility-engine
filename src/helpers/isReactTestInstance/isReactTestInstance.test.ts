import React from 'react';
import { View } from 'react-native';
import isReactTestInstance from './isReactTestInstance';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';

it('should return false when passed a React element', () => {
  expect(isReactTestInstance(React.createElement(View))).toBe(false);
});

it('should return true when passed a ReactTestInstance from react-test-renderer', () => {
  expect(
    isReactTestInstance(TestRenderer.create(React.createElement(View)).root)
  ).toBe(true);
});

it('should return true when passed a ReactTestInstance from @testing-library/react-native', () => {
  const { getByTestId } = render(React.createElement(View, { testID: 'view' }));
  expect(isReactTestInstance(getByTestId('view'))).toBe(true);
});
