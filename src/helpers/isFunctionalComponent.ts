import type { ReactTestInstance } from 'react-test-renderer';

const isFunctionalComponent = (component: ReactTestInstance): boolean => {
  return typeof component.type === 'function';
};

export default isFunctionalComponent;
