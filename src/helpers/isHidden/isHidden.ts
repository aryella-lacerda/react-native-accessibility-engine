import type { ReactTestInstance } from 'react-test-renderer';

const isHidden = (node: ReactTestInstance) => {
  return (
    node.props.accessibilityElementsHidden ||
    node.props.importantForAccessibility === 'no-hide-descendants'
  );
};

export default isHidden;
