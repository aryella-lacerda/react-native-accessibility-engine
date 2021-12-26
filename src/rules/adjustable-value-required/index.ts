import type { Rule } from '../../types';
import { isAdjustable } from '../../helpers';

const rule: Rule = {
  id: 'adjustable-value-required',
  matcher: (node) => isAdjustable(node),
  assertion: (node) => {
    return (
      node.props.accessibilityValue?.now !== undefined &&
      node.props.accessibilityValue?.min !== undefined &&
      node.props.accessibilityValue?.max !== undefined
    );
  },
  help: {
    problem:
      "This component has an adjustable value but the user wasn't informed of its min, max, and current value",
    solution:
      "Set the 'accessibilityValue' prop to an object: { min: ?, max: ?, now: ?}",
    link: '',
  },
};

export default rule;
