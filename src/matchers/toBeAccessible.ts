import type { ReactElement } from 'react';
import check, { Options } from '../engine';
import { generateMatcherError } from '../utils';

export default function toBeAccessible(
  received: ReactElement,
  options?: Options
) {
  const violations = check(received, {
    returnViolations: true,
    ...options,
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
