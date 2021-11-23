import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const allowedRoles = ['button', 'link', 'imagebutton', 'radio'];
const allowedRolesMessage = allowedRoles.join(' or ');

const rule: Rule = {
  id: 'pressable-role-required',
  matcher: (node) => isButton(node.type),
  assertion: (node) => allowedRoles.includes(node.props.accessibilityRole),
  help: {
    problem:
      'If a component is touchable/pressable, we should inform the user that it behaves like a button/link/radio',
    solution: `Set the 'accessibilityRole' prop with a value of ${allowedRolesMessage}`,
    link: '',
  },
};

export default rule;
