import type React from 'react';
import TestRenderer from 'react-test-renderer';
import groupBy from 'lodash.groupby';

import rules from '../rules';
import type { Violation } from '../types';
import { isHidden, getPathToComponent } from '../helpers';

class AccessibilityError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'AccessibilityError';
  }
}

const engine = (tree: React.ReactElement<any>, _rules = rules) => {
  let renderedTree = TestRenderer.create(tree);
  const violations: Violation[] = [];

  for (const rule of _rules) {
    const matchedComponents = renderedTree.root.findAll(rule.matcher);
    for (const component of matchedComponents) {
      let didPassAssertion = false;

      // Skip checks on hidden components
      if (isHidden(component)) {
        didPassAssertion = true;
      } else {
        didPassAssertion = rule.assertion(component);
      }

      // console.log(component);
      if (!didPassAssertion) {
        violations.push({
          pathToComponent: getPathToComponent(component),
          ...rule.help,
        });
      }
    }
  }

  if (violations.length) {
    throw new AccessibilityError(generateError(violations));
  }

  return violations;
};

const generateError = (violations: Violation[]): string => {
  let errorString = '\n';

  // Each unique path represents a component in the component tree
  const violationsGroupedByPath = groupBy(violations, (violation) => {
    return violation.pathToComponent;
  });

  for (const path in violationsGroupedByPath) {
    // Prettify path to component
    let pathString = '';
    for (const element of path.split(',')) {
      pathString += `${element} > `;
    }

    // Slice off last ' > ' characters which are unnecessary
    pathString = pathString.substring(0, pathString.length - 3);
    errorString += `${pathString}\n`;

    for (const violation of violationsGroupedByPath[path]) {
      errorString += ` · ${violation.problem}\n   ↳  ${violation.solution}\n`;
    }
  }

  return errorString;
};

export default engine;
