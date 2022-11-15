import type React from 'react';
import TestRenderer, { ReactTestInstance } from 'react-test-renderer';

import allRules from '../rules';
import type { Violation } from '../types';
import type { RuleId } from 'src/types/Rule';
import type Rule from 'src/types/Rule';

import { isHidden, isReactTestInstance, getPathToComponent } from '../helpers';
import { generateCheckError } from '../utils';

export class AccessibilityError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'AccessibilityError';
  }
}

export type Options = {
  // Pass in the subset of rules you want to run
  rules?: RuleId[];
  // Return the violation array instead of an error
  returnViolations?: boolean;
  // Utilize for custom handling of jest test matcher output
  customViolationHandler?: (violations: Violation[]) => Violation[];
};

const engine = (
  treeOrTestInstance: React.ReactElement<any> | ReactTestInstance,
  options?: Options
) => {
  let testInstance = isReactTestInstance(treeOrTestInstance)
    ? treeOrTestInstance
    : TestRenderer.create(treeOrTestInstance).root;

  const _rules = options?.rules
    ? (options.rules.map((id: RuleId) =>
        allRules.find((rule) => rule.id === id)
      ) as Rule[])
    : allRules;
  const violations: Violation[] = [];

  // For every rule
  for (const rule of _rules) {
    // Traverse the component tree below the root to find the components that should be tested
    const matchedComponents = testInstance.findAll(rule.matcher, {
      deep: true,
    });

    // Check if the root of the tree should be tested as well
    if (rule.matcher(testInstance)) {
      matchedComponents.push(testInstance);
    }

    // For all the components that were found
    for (const component of matchedComponents) {
      let didPassAssertion = false;

      if (isHidden(component)) {
        // Skip checks on hidden components
        didPassAssertion = true;
      } else {
        // Check if the component meets the rule's assertion
        didPassAssertion = rule.assertion(component);
      }

      // If not, add component to violation array
      if (!didPassAssertion) {
        violations.push({
          pathToComponent: getPathToComponent(component),
          ...rule.help,
        });
      }
    }
  }

  if (options?.customViolationHandler) {
    return options.customViolationHandler(violations);
  }

  if (options?.returnViolations) {
    return violations;
  }

  if (violations.length) {
    throw new AccessibilityError(generateCheckError(violations));
  }

  return [];
};

export default engine;
