import type React from 'react';
import { Image } from 'react-native';

const isImage = (type: React.ElementType<any>) => {
  return type === Image;
};

export default isImage;
