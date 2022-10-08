import 'react-native';
import React from 'react';
import {Text} from 'react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Text>Test</Text>);
});
