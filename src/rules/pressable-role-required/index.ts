import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'pressable-role-required',
  matcher: (node) => isButton(node.type),
  assertion: (node) =>
    ['button', 'link'].includes(node.props.accessibilityRole),
  help: {
    problem:
      'If a component is touchable/pressable, we should inform the user that it behaves like a button/link',
    solution:
      "Set the 'accessibilityRole' prop with a value of 'button' or 'link'",
    link: '',
  },
};

export default rule;
