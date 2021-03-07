import type { Rule } from '../../types';
import { isSlider } from '../../helpers';

const rule: Rule = {
  id: 'accessibility-value-slider',
  matcher: (node) => isSlider(node),
  assertion: (node) => {
    return (
      node.props.accessibilityValue?.now !== undefined &&
      node.props.accessibilityValue?.min !== undefined &&
      node.props.accessibilityValue?.max !== undefined
    );
  },
  help: {
    problem: 'Inform the user of the value of this adjustable component',
    solution:
      "Set the 'accessibilityValue' prop with an object: { min: ?, max: ?, now: ?}",
    link: '',
  },
};

export default rule;
