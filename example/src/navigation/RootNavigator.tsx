import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Screens, {ScreensParamList} from '../examples';
import TestingGround from '../TestingGround';
export type {ScreensParamList};

const Stack = createStackNavigator<ScreensParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={'TestingGround'}
        component={TestingGround}
        options={{
          title: 'Testing Ground',
        }}
      />
      {Screens.map(screen => (
        // @ts-ignore
        <Stack.Screen {...screen} />
      ))}
    </Stack.Navigator>
  );
};

export default RootNavigator;
