import React from 'react';
import type { ReactTestInstance } from 'react-test-renderer';
import { create } from 'react-test-renderer';

const testInstancePrototype = Object.getPrototypeOf(
  create(React.createElement('div')).root
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
