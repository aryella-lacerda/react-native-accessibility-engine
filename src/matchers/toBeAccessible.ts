import type { ReactElement } from 'react';
import AccessibilityEngine from 'react-native-accessibility-engine';

declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks whether a component conforms to Accessibility A11y best practices.
       */
      toBeAccessible(): R;
    }
  }
}

export default function toBeAccessible(received: ReactElement) {
  try {
    AccessibilityEngine.check(received);
  } catch (error: any) {
    return {
      pass: false,
      message() {
        return error.message;
      },
    };
  }
  return {
    pass: true,
    message() {
      return 'Component is accessible.\nDoes it make sense to test a component for NOT being accessible?';
    },
  };
}
