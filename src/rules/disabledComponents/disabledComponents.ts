import type { Rule } from '../../types';
import { canBeDisabled } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-state-disabled',
  matcher: (node) => canBeDisabled(node),
  assertion: (node) => node.props.accessibilityState?.disabled !== undefined,
  help: {
    problem: "Expose the components's enabled/disabled state to the user",
    solution:
      "Set the 'accessibilityState' prop with an object containing a 'disabled' key",
    link: '',
  },
};

export default rule;
