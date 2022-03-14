import adjustableRoleRequired from './adjustable-role-required';
import adjustableValueRequired from './adjustable-value-required';
import pressableRoleRequired from './pressable-role-required';
import pressableLabelRequired from './pressable-label-required';
import pressableAccessibleRequired from './pressable-accessible-required';
import disabledStateRequired from './disabled-state-required';
import linkRoleRequired from './link-role-required';
import linkRoleMisused from './link-role-misused';
import noEmptyText from './no-empty-text';
import noEmptyPressable from './no-empty-pressable';

const rules = [
  pressableRoleRequired,
  pressableAccessibleRequired,
  disabledStateRequired,
  pressableLabelRequired,
  adjustableRoleRequired,
  adjustableValueRequired,
  linkRoleRequired,
  linkRoleMisused,
  noEmptyText,
  noEmptyPressable,
];

export default rules;
