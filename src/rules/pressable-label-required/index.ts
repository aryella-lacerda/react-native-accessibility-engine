import type { ReactTestInstance } from 'react-test-renderer';
import type { Rule } from '../../types';
import { isButton } from '../../helpers';
import { Text } from 'react-native';

const rule: Rule = {
  id: 'pressable-label-required',
  matcher: (node) => isButton(node.type),
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
      "If a button has no text content, an accessibility label can't be inferred so we should explicitly define one",
    solution:
      "Place a text component within the button or define an 'accessibilityLabel' prop",
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
