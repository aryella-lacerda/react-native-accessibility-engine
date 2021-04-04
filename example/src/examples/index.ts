import ButtonLabelTest from './button-label-test';
import ButtonAccessibleTest from './button-accessible-test';
import ButtonRoleTest from './button-role-test';
import ButtonStateTest from './button-state-test';
import LinkRoleRequiredTest from './link-role-required-test';
import LinkRoleMisusedTest from './link-role-misused-test';

export type ScreensParamList = {
  TestingGround: undefined;
  ButtonAccessibleTest: undefined;
  ButtonLabelTest: undefined;
  ButtonRoleTest: undefined;
  ButtonStateTest: undefined;
  LinkRoleRequiredTest: undefined;
  LinkRoleMisusedTest: undefined;
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
    name: 'ButtonLabelTest',
    component: ButtonLabelTest,
    key: 'buttonLabelTest',
    options: {
      title: 'Button - Label',
    },
  },
  {
    name: 'ButtonAccessibleTest',
    component: ButtonAccessibleTest,
    key: 'buttonAccessibleTest',
    options: {
      title: 'Button - Accessible',
    },
  },
  {
    name: 'ButtonRoleTest',
    component: ButtonRoleTest,
    key: 'buttonRoleTest',
    options: {
      title: 'Button - Role',
    },
  },
  {
    name: 'ButtonStateTest',
    component: ButtonStateTest,
    key: 'buttonStateTest',
    options: {
      title: 'Button - State',
    },
  },
  {
    name: 'LinkRoleRequiredTest',
    component: LinkRoleRequiredTest,
    key: 'linkRoleRequiredTest',
    options: {
      title: 'Link Role Missing',
    },
  },
  {
    name: 'LinkRoleMisusedTest',
    component: LinkRoleMisusedTest,
    key: 'linkRoleMisusedTest',
    options: {
      title: 'Link Role Misused',
    },
  },
];

export default screens;
