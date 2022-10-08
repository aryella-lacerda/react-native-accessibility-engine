import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
