import type { Rule } from '../../types';
import { isSlider } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-role-adjustable',
  matcher: (node) => isSlider(node),
  assertion: (node) => node.props.accessibilityRole === 'adjustable',
  help: {
    problem:
      'Inform the user that this component has a value that can be adjusted',
    solution: "Set the 'accessibilityRole' prop with a value of 'adjustable'",
    link: '',
  },
};

export default rule;
