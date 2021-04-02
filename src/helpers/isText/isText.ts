import type React from 'react';
import { Text } from 'react-native';

const isText = (type: React.ElementType<any>) => {
  return type === Text;
};

export default isText;
