import type { Rule } from '../../types';
import { isText } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-role-link-required',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (onPress) {
      return accessibilityRole === 'link';
    }
    return true;
  },
  help: {
    problem: 'Inform the user that this component behaves like a link',
    solution: "Set the 'accessibilityRole' prop with a value of 'link'",
    link: '',
  },
};

export default rule;
