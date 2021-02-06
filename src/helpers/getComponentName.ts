import type { ReactTestInstance } from 'react-test-renderer';
import { TouchableOpacity, TouchableHighlight } from 'react-native';

const getComponentName = (component: ReactTestInstance): string => {
  // @ts-ignore - Lib typed incorrectly, accessing the function `name` prop
  const name = component.type.name || component.type.constructor?.name;

  if (name !== 'Object') {
    // console.log('Name is not "Object"', name);
    return name;
  }

  const entires = Object.entries(nameMapper);

  for (const [componentName, componentType] of entires) {
    if (component.type === componentType) {
      return componentName;
    }
  }

  // console.log('Name is "Object"', name);
  return name;
};

const nameMapper = {
  TouchableOpacity: TouchableOpacity,
  TouchableHighlight: TouchableHighlight,
};

export default getComponentName;
