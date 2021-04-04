import type { Rule } from '../../types';
import { isSlider } from '../../helpers';

const rule: Rule = {
  id: 'adjustable-value-required',
  matcher: (node) => isSlider(node),
  assertion: (node) => {
    return (
      node.props.accessibilityValue?.now !== undefined &&
      node.props.accessibilityValue?.min !== undefined &&
      node.props.accessibilityValue?.max !== undefined
    );
  },
  help: {
    problem:
      'If a component has a value that can be adjusted, then inform the user of its min, max, and current value',
    solution:
      "Set the 'accessibilityValue' prop with an object: { min: ?, max: ?, now: ?}",
    link: '',
  },
};

export default rule;
