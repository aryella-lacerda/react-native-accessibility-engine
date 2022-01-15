import groupBy from 'lodash.groupby';

import type { Violation } from '../types';

export const generateCheckError = (violations: Violation[]): string => {
  let errorString = '\n';

  // Each unique path represents a component in the component tree
  const violationsGroupedByPath = groupBy(violations, (violation) => {
    return violation.pathToComponent;
  });

  for (const path in violationsGroupedByPath) {
    // Prettify path to component
    errorString = path.split(',').join(' > ') + '\n\n';

    for (const violation of violationsGroupedByPath[path]) {
      errorString += ` · ${violation.problem}\n   ↳  ${violation.solution}\n`;
    }
  }

  return errorString;
};
