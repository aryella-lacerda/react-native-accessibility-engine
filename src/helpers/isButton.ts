import type React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';

const isButton = (type: React.ElementType<any>) => {
  return (
    type === TouchableHighlight ||
    type === TouchableOpacity ||
    type === TouchableNativeFeedback ||
    type === TouchableWithoutFeedback ||
    type === Pressable
  );
};

export default isButton;
