import type { Rule } from '../../types';
import { isPressable } from '../../helpers';

const allowedRoles = ['button', 'link', 'imagebutton', 'radio', 'checkbox'];
const allowedRolesMessage = allowedRoles.join(' or ');

const rule: Rule = {
  id: 'pressable-role-required',
  matcher: (node) => isPressable(node.type),
  assertion: (node) => allowedRoles.includes(node.props.accessibilityRole),
  help: {
    problem:
      "This component is pressable but the user hasn't been informed that it behaves like a button/link/radio/checkbox",
    solution: `Set the 'accessibilityRole' prop to ${allowedRolesMessage}`,
    link: '',
  },
};

export default rule;
