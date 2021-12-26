import type { ReactElement } from 'react';
import Engine from 'react-native-accessibility-engine';
import { generateMatcherError } from '../utils';

export default function toBeAccessible(received: ReactElement) {
  const violations = Engine.check(received, {
    returnViolations: true,
  });

  if (violations.length) {
    // @ts-ignore
    const message = generateMatcherError(violations, this.isNot);
    return {
      pass: false,
      message: () => message,
    };
  }

  return {
    pass: true,
    message() {
      return 'Component is accessible.\nDoes it make sense to test a component for NOT being accessible?';
    },
  };
}
