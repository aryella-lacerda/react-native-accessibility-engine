import ButtonLabel from './buttonLabel';
import ButtonAccessible from './buttonAccessible';
import ButtonRole from './buttonRole';
import ButtonState from './buttonState';

export type ScreensParamList = {
  TestingGround: undefined;
  ButtonAccessible: undefined;
  ButtonLabel: undefined;
  ButtonRole: undefined;
  ButtonState: undefined;
};

interface ScreenProps {
  name: keyof ScreensParamList;
  component: React.ReactNode;
  options: {
    title: string;
  };
}

const screens: ScreenProps[] = [
  {
    name: 'ButtonLabel',
    component: ButtonLabel,
    options: {
      title: 'Button - Label',
    },
  },
  {
    name: 'ButtonAccessible',
    component: ButtonAccessible,
    options: {
      title: 'Button - Accessible',
    },
  },
  {
    name: 'ButtonRole',
    component: ButtonRole,
    options: {
      title: 'Button - Role',
    },
  },
  {
    name: 'ButtonState',
    component: ButtonState,
    options: {
      title: 'Button - State',
    },
  },
];

export default screens;
