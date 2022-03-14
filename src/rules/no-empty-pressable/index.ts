import type { Rule } from '../../types';
import { isPressable } from '../../helpers';

const rule: Rule = {
  id: 'no-empty-pressable',
  matcher: (node) => isPressable(node.type),
  assertion: (node) => {
    const containsChildren = !!node?.props?.children;
    return containsChildren;
  },
  help: {
    problem:
      "This pressable node doesn't contain children and so no accessibility label can be inferred",
    solution:
      'Add a child component or prevent this component from rendering if it has no content',
    link: '',
  },
};

export default rule;
