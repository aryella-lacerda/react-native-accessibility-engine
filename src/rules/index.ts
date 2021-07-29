import adjustableRoleRequired from './adjustable-role-required';
import adjustableValueRequired from './adjustable-value-required';
import buttonRoleRequired from './button-role-required';
import buttonAccessibleRequired from './button-accessible-required';
import disabledStateRequired from './disabled-state-required';
import buttonLabelRequired from './button-label-required';
import linkRoleRequired from './link-role-required';
import linkRoleMisused from './link-role-misused';

const rules = [
  buttonRoleRequired,
  buttonAccessibleRequired,
  disabledStateRequired,
  buttonLabelRequired,
  adjustableRoleRequired,
  adjustableValueRequired,
  linkRoleRequired,
  linkRoleMisused,
];

export default rules;
