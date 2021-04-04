import ButtonLabelRequired from './buttonLabelRequired';
import ButtonAccessible from './buttonAccessible';
import ButtonRoleRequired from './buttonRoleRequired';
import ButtonState from './buttonState';
import LinkRoleRequired from './link-role-required';
import LinkRoleMisused from './link-role-misused';

export type ScreensParamList = {
  TestingGround: undefined;
  ButtonAccessible: undefined;
  ButtonLabelRequired: undefined;
  ButtonRoleRequired: undefined;
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
    name: 'ButtonLabelRequired',
    component: ButtonLabelRequired,
    key: 'buttonLabelRequired',
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
    name: 'ButtonRoleRequired',
    component: ButtonRoleRequired,
    key: 'buttonRoleRequired',
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
