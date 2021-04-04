import buttonRoleRequired from './button-role-required';
import buttonAccessible from './buttonAccessible';
import disabledStateRequired from './disabled-state-required';
import buttonLabelRequired from './button-label-required';
import adjustableRoleRequired from './adjustable-role-required';
import adjustableValueRequired from './adjustable-value-required';
import linkRoleRequired from './link-role-required';
import linkRoleMisused from './link-role-misused';

const rules = [
  buttonRoleRequired,
  buttonAccessible,
  disabledStateRequired,
  buttonLabelRequired,
  adjustableRoleRequired,
  adjustableValueRequired,
  linkRoleRequired,
  linkRoleMisused,
];

export default rules;
