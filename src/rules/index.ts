import buttonRole from './buttonRole';
import buttonAccessible from './buttonAccessible';
import disabledComponents from './disabledComponents';
import buttonLabel from './buttonLabel';
import sliderRole from './sliderRole';
import sliderValue from './sliderValue';
import linkRoleMissing from './link-role-missing';
import linkRoleMisused from './link-role-misused';

const rules = [
  buttonRole,
  buttonAccessible,
  disabledComponents,
  buttonLabel,
  sliderRole,
  sliderValue,
  linkRoleMissing,
  linkRoleMisused,
];

export default rules;
