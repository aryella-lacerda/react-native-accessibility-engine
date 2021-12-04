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

export {};
