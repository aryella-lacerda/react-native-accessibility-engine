import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-role-button-required',
  matcher: (node) => isButton(node.type),
  assertion: (node) => node.props.accessibilityRole === 'button',
  help: {
    problem: 'Inform the user that this component behaves like a button',
    solution: "Set the 'accessibilityRole' prop with a value of 'button'",
    link: '',
  },
};

export default rule;
