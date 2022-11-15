import type { Options } from '../engine/index';
declare global {
  namespace jest {
    interface Matchers<R> {
      /**
       * Checks whether a component conforms to Accessibility A11y best practices.
       */
      toBeAccessible(options?: Options): R;
    }
  }
}

export {};
