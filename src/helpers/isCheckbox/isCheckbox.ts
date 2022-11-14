import type { ReactTestInstance } from 'react-test-renderer';
import isPressable from '../isPressable';

const isCheckbox = (node: ReactTestInstance) => {
  return isPressable(node.type) && node.props.accessibilityRole === 'checkbox';

  // TODO:
  // type === community checkbox?
};

export default isCheckbox;
