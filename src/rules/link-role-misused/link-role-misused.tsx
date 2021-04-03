import type { Rule } from '../../types';
import { isText } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-role-link-misused',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (!onPress) {
      return accessibilityRole !== 'link';
    }
    return true;
  },
  help: {
    problem: "'Link' role used unnecessarily",
    solution:
      "Set the 'accessibilityRole' prop to 'link' or add an 'onPress' prop",
    link: '',
  },
};

export default rule;
