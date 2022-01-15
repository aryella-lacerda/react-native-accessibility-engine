import type { Rule } from '../../types';
import { isText } from '../../helpers';

const rule: Rule = {
  id: 'no-empty-text',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const containsText = !!node?.props?.children;
    return containsText;
  },
  help: {
    problem:
      "This text node doesn't contain text and so no accessibility label can be inferred",
    solution:
      'Add text content or prevent this component from rendering if it has no content',
    link: '',
  },
};

export default rule;
