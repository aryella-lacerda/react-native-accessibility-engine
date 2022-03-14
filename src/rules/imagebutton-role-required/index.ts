import type { ReactTestInstance } from 'react-test-renderer';
import type { Rule } from '../../types';
import { isPressable } from '../../helpers';
import { Text, Image } from 'react-native';

const rule: Rule = {
  id: 'imagebutton-role-required',
  matcher: (node) => isPressable(node.type),
  assertion: (node) => {
    const containsImage = !!getImageNode(node);
    const containsText = !!getTextNode(node);

    if (containsImage && !containsText) return false;

    return true;
  },
  help: {
    problem: 'This pressable only contains an image',
    solution: `Set the 'accessibilityRole' prop to imagebutton`,
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

const getImageNode = (node: ReactTestInstance): ReactTestInstance | null => {
  try {
    return node.findByType(Image);
  } catch (e) {
    return null;
  }
};

export default rule;
