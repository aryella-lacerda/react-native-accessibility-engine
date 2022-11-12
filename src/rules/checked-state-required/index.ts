import type { Rule } from '../../types';
import { isCheckbox } from '../../helpers';

const allowedValues = [true, false, 'mixed'];
const allowedValuesMessage = allowedValues.join(' or ');

const rule: Rule = {
  id: 'checked-state-required',
  matcher: (node) => isCheckbox(node),
  assertion: (node) =>
    allowedValues.includes(node.props.accessibilityState?.checked),
  help: {
    problem:
      "This component has an accessibility role of 'checkbox' but doesn't have a checked state",
    solution: `Set the 'accessibilityState' prop to an object like this: { checked: ${allowedValuesMessage} }`,
    link: 'https://www.w3.org/WAI/ARIA/apg/example-index/checkbox/checkbox.html',
  },
};

export default rule;
