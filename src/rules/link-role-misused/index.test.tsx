import React from 'react';
import { Text } from 'react-native';
import rule from '.';
import AccessibilityEngine from 'react-native-accessibility-engine';

const run = (component: React.ReactElement<any>) => {
  return AccessibilityEngine.check(component, [rule]);
};

// To inspect these components, run the example app under "Rules -> Adjustable Role"

describe('text component without an onPress prop', () => {
  // Correct usage - by default, text components come with accessibilityRole={text}
  it("doesn't throw if 'accessibilityRole' prop not defined", () => {
    const TestText = () => <Text>This is a test.</Text>;
    expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
  });

  // Correct usage
  it("doesn't throw if 'accessibilityRole' prop has a value other than 'link'", () => {
    const TestText = () => (
      <Text accessibilityRole={'text'}>This is a test.</Text>
    );
    expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
  });

  it("throws if 'accessibilityRole' prop has the value 'link'", () => {
    const TestText = () => (
      <Text accessibilityRole={'link'}>This is a test.</Text>
    );
    expect(() => run(<TestText />)).toThrowError(rule.help.problem);
  });
});

describe('text component with an onPress prop', () => {
  // This problem is captured by the link-role-required rule
  it("doesn't throw if 'accessibilityRole' prop not defined", () => {
    const TestText = () => <Text onPress={() => {}}>This is a test.</Text>;
    expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
  });

  // This problem is captured by the link-role-required rule
  it("doesn't throw if 'accessibilityRole' prop has a value other than 'link'", () => {
    const TestText = () => (
      <Text onPress={() => {}} accessibilityRole={'text'}>
        This is a test.
      </Text>
    );
    expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
  });

  // Correct usage
  it("doesn't throw if 'accessibilityRole' prop has the value 'link'", () => {
    const TestText = () => (
      <Text onPress={() => {}} accessibilityRole={'link'}>
        This is a test.
      </Text>
    );
    expect(() => run(<TestText />)).not.toThrowError(rule.help.problem);
  });
});
