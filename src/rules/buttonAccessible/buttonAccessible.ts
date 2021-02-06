import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'accessible-button',
  matcher: (node) => isButton(node.type),
  assertion: (node) => {
    return node.props.accessible === false ? false : true;
  },
  help: {
    problem:
      'Make the button selectable ("accessible"), not the content within.',
    solution: 'Set the `accessible` prop with a value of `true`.',
    link: '',
  },
};

export default rule;
