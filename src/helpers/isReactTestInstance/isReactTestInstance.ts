import React from 'react';
import type { ReactTestInstance } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

const testInstancePrototype = Object.getPrototypeOf(
  render(React.createElement('div')).root
);

export default function isReactTestInstance(
  candiate: unknown
): candiate is ReactTestInstance {
  return (
    !!candiate &&
    typeof candiate === 'object' &&
    Object.getPrototypeOf(candiate) === testInstancePrototype
  );
}
