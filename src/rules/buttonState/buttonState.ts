import type { Rule } from '../../types';
import { isButton } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-state-button',
  matcher: (node) => isButton(node.type),
  assertion: (node) => node.props.accessibilityState?.disabled !== undefined,
  help: {
    problem:
      "Expose the button's enabled/disabled state to accessibility tools.",
    solution:
      'Set the `accessibilityState` prop with an object containing a `disabled` key.',
    link: '',
  },
};

export default rule;
