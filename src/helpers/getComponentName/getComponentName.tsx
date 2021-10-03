// @ts-nocheck
import type { ReactTestInstance } from 'react-test-renderer';

const blacklist = ['String', 'Component', 'Object'];

// This function's a mess. 😭 😭 😭
// But the tests are passing, so refactoring's on the roadmap for later.

const getComponentName = (component: ReactTestInstance): string => {
  const { displayName, name, constructor } = component.type;

  if (displayName && !blacklist.includes(displayName)) {
    return displayName;
  }

  if (name && !blacklist.includes(name)) {
    return name;
  }

  if (constructor?.name && !blacklist.includes(constructor?.name)) {
    return constructor.name;
  }

  if (
    constructor?.displayName &&
    !blacklist.includes(constructor?.displayName)
  ) {
    return constructor.displayName;
  }

  // Some components are wrapped in Animated or Virtualized nodes,
  // and the main component is the child, not the wrapper, so we inspect
  // the child component for name, not the parent.

  const { instance, children } = component;

  if (instance && !blacklist.includes(instance?.constructor.displayName)) {
    return instance?.constructor.displayName;
  }

  if (children?.[0]?.instance) {
    const { constructor } = children?.[0]?.instance;

    if (constructor.name && !blacklist.includes(constructor.name)) {
      return constructor.name;
    }

    if (
      constructor.displayName &&
      !blacklist.includes(constructor.displayName)
    ) {
      return constructor.displayName;
    }
  }

  return 'Unknown';
};

export default getComponentName;
