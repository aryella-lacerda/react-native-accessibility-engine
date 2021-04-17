import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'button-role-required',
  matcher: (node) => isButton(node.type),
  assertion: (node) => node.props.accessibilityRole === 'button',
  help: {
    problem:
      'If a component is touchable/pressable, we should inform the user that it behaves like a button',
    solution: "Set the 'accessibilityRole' prop with a value of 'button'",
    link: '',
  },
};

export default rule;
