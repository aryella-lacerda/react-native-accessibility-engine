import type { Rule } from '../../types';
import { isText } from '../../helpers';

const rule: Rule = {
  id: 'link-role-misused',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (!onPress) {
      return accessibilityRole !== 'link';
    }
    return true;
  },
  help: {
    problem: "We should only use the 'link' role when text is clickable",
    solution:
      "Set the 'accessibilityRole' prop to 'text' or add an 'onPress' prop",
    link: '',
  },
};

export default rule;
