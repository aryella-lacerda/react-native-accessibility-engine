import type { RuleId } from './src/types/Rule';
import type Violation from './src/types/Violation';
export {};

declare global {
  var __A11Y_RULES__: RuleId[];
  function __CUSTOM_VIOLATION_HANDLER__(violations: Violation[]): Violation[];
}
