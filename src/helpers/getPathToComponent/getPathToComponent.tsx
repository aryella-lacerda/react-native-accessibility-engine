// @ts-nocheck
import type { ReactTestInstance } from 'react-test-renderer';
import getComponentName from '../getComponentName/getComponentName';

const shouldSkipComponent = (node: ReactTestInstance) => {
  if (typeof node.type === 'string') {
    return true;
  }

  if (
    typeof node.type === 'object' &&
    node.type.$$typeof === Symbol.for('react.forward_ref')
  ) {
    return true;
  }

  return false;
};

const getPathToComponent = (node: ReactTestInstance): string[] => {
  const path = [];
  let current: ReactTestInstance | null = node;

  while (current) {
    if (!shouldSkipComponent(current)) {
      path.push(getComponentName(current));
    }
    current = current?.parent;
  }

  // console.log(path.reverse());
  return path.reverse();
};

export default getPathToComponent;
