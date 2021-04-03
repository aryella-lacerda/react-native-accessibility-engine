import ButtonLabel from './buttonLabel';
import ButtonAccessible from './buttonAccessible';
import ButtonRole from './buttonRole';
import ButtonState from './buttonState';
import LinkRoleMissing from './link-role-missing';
import LinkRoleMisused from './link-role-misused';

export type ScreensParamList = {
  TestingGround: undefined;
  ButtonAccessible: undefined;
  ButtonLabel: undefined;
  ButtonRole: undefined;
  ButtonState: undefined;
  LinkRoleMissing: undefined;
  LinkRoleMisused: undefined;
};

interface ScreenProps {
  name: keyof ScreensParamList;
  component: React.ReactNode;
  key: string;
  options: {
    title: string;
  };
}

const screens: ScreenProps[] = [
  {
    name: 'ButtonLabel',
    component: ButtonLabel,
    key: 'buttonLabel',
    options: {
      title: 'Button - Label',
    },
  },
  {
    name: 'ButtonAccessible',
    component: ButtonAccessible,
    key: 'buttonAccessible',
    options: {
      title: 'Button - Accessible',
    },
  },
  {
    name: 'ButtonRole',
    component: ButtonRole,
    key: 'buttonRole',
    options: {
      title: 'Button - Role',
    },
  },
  {
    name: 'ButtonState',
    component: ButtonState,
    key: 'buttonState',
    options: {
      title: 'Button - State',
    },
  },
  {
    name: 'LinkRoleMissing',
    component: LinkRoleMissing,
    key: 'linkRoleMissing',
    options: {
      title: 'Link Role Missing',
    },
  },
  {
    name: 'LinkRoleMisused',
    component: LinkRoleMisused,
    key: 'linkRoleMisused',
    options: {
      title: 'Link Role Misused',
    },
  },
];

export default screens;
