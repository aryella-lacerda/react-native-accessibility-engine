import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'button-accessible-required',
  matcher: (node) => isButton(node.type),
  assertion: (node) => {
    return node.props.accessible === false ? false : true;
  },
  help: {
    problem: 'Make the button accessible (selectable) to the user',
    solution:
      "Set the 'accessible' prop with a value of 'true' or remove it (buttons are accessible by default)",
    link: '',
  },
};

export default rule;
