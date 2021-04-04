import buttonRoleRequired from './button-role-required';
import buttonAccessible from './buttonAccessible';
import disabledComponents from './disabledComponents';
import buttonLabelRequired from './button-label-required';
import sliderRole from './sliderRole';
import sliderValue from './sliderValue';
import linkRoleRequired from './link-role-required';
import linkRoleMisused from './link-role-misused';

const rules = [
  buttonRoleRequired,
  buttonAccessible,
  disabledComponents,
  buttonLabelRequired,
  sliderRole,
  sliderValue,
  linkRoleRequired,
  linkRoleMisused,
];

export default rules;
