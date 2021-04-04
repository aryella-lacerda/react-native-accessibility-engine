import ButtonLabel from './buttonLabel';
import ButtonAccessible from './buttonAccessible';
import ButtonRole from './buttonRole';
import ButtonState from './buttonState';
import LinkRoleRequired from './link-role-required';
import LinkRoleMisused from './link-role-misused';

export type ScreensParamList = {
  TestingGround: undefined;
  ButtonAccessible: undefined;
  ButtonLabel: undefined;
  ButtonRole: undefined;
  ButtonState: undefined;
  LinkRoleRequired: undefined;
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
    name: 'LinkRoleRequired',
    component: LinkRoleRequired,
    key: 'linkRoleRequired',
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
