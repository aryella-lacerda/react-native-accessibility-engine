import type { ReactTestInstance } from 'react-test-renderer';
import type { Rule } from '../../types';
import { isButton } from '../../helpers';
import { Text } from 'react-native';

const rule: Rule = {
  id: 'accessibility-label-button',
  matcher: (node) => isButton(node.type),
  assertion: (node) => {
    let textNode = getTextNode(node);
    if (!textNode) return false;
    const textContent = textNode.props.children;
    if (!textContent) return false;
    return true;
  },
  help: {
    problem:
      "The button doesn't have text content or an explicitly defined accessibility label",
    solution:
      'Place a text component within the button or define an `accessibilityLabel` prop',
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
