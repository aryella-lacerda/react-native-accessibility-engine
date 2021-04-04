import type { Rule } from '../../types';
import { canBeDisabled } from '../../helpers';

const rule: Rule = {
  id: 'disabled-state-required',
  matcher: (node) => canBeDisabled(node),
  assertion: (node) => node.props.accessibilityState?.disabled !== undefined,
  help: {
    problem:
      'If a component has a disabled state, we should expose its enabled/disabled state to the user',
    solution:
      "Set the 'accessibilityState' prop to an object containing a boolean 'disabled' key",
    link: '',
  },
};

export default rule;
