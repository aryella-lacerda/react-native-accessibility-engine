import type { Rule } from '../../types';
import { isSlider } from '../../helpers';

const rule: Rule = {
  id: 'adjustable-role-required',
  matcher: (node) => isSlider(node),
  assertion: (node) => node.props.accessibilityRole === 'adjustable',
  help: {
    problem:
      'If a component has a value that can be adjusted, we should inform the user that it is adjustable',
    solution: "Set the 'accessibilityRole' prop to 'adjustable'",
    link: '',
  },
};

export default rule;
