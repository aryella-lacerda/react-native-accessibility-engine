import type { ReactTestInstance } from 'react-test-renderer';
import type Help from './Help';

export default interface Rule {
  id: RuleId;
  matcher: (node: ReactTestInstance) => boolean;
  assertion: (node: ReactTestInstance) => boolean;
  help: Help;
}

export type RuleId =
  | 'pressable-role-required'
  | 'pressable-accessible-required'
  | 'disabled-state-required'
  | 'pressable-label-required'
  | 'adjustable-role-required'
  | 'adjustable-value-required'
  | 'link-role-required'
  | 'link-role-misused'
  | 'no-empty-text'
  | 'checked-state-required';
