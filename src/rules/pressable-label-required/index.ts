import type { ReactTestInstance } from 'react-test-renderer';
import type { Rule } from '../../types';
import { isPressable } from '../../helpers';
import { Text } from 'react-native';

const rule: Rule = {
  id: 'pressable-label-required',
  matcher: (node) => isPressable(node.type),
  assertion: (node) => {
    const textNode = getTextNode(node);
    const textContent = textNode?.props?.children;
    const accessibilityLabel = node.props.accessibilityLabel;
    if (!accessibilityLabel && !textContent) {
      return false;
    }
    return true;
  },
  help: {
    problem:
      "This pressable has no text content, so an accessibility label can't be automatically inferred",
    solution:
      "Place a text component in the button or define an 'accessibilityLabel' prop",
    link: '',
  },
};

const getTextNode = (node: ReactTestInstance): ReactTestInstance | null => {
  try {
    return node.findByType(Text);
  } catch (e) {
    return null;
  }
};

export default rule;
