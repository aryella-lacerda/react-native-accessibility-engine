import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import rule from '.';
import AccessibilityEngine from 'react-native-accessibility-engine';
import TestAssets from 'tests/assets';

const run = (component: React.ReactElement<any>) => {
  return AccessibilityEngine.check(component, { rules: [rule] });
};

// To inspect these components, run the example app under "Rules -> Button Accessible"

describe('if element is not hidden', () => {
  it("doesn't throw if 'accessible' prop not defined (buttons are accessible by default)", () => {
    const Button = () => (
      <TouchableOpacity>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("doesn't throw if 'accessible' prop is defined and equal to true", () => {
    const Button = () => (
      <TouchableOpacity accessible={true}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("throws if 'accessible' prop is defined and equal to false", () => {
    const Button = () => (
      <TouchableOpacity accessible={false}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).toThrowError(rule.help.problem);
  });
});

describe('if element is hidden', () => {
  const hidden = {
    accessibilityElementsHidden: true,
    importantForAccessibility: 'no-hide-descendants' as const,
  };

  it("doesn't throw if 'accessible' prop not defined (buttons are accessible by default)", () => {
    const Button = () => (
      <TouchableOpacity {...hidden}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("doesn't throw if 'accessible' prop is defined and equal to true", () => {
    const Button = () => (
      <TouchableOpacity accessible={true} {...hidden}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("doesn't throw if 'accessible' prop is defined and equal to false", () => {
    const Button = () => (
      <TouchableOpacity accessible={false} {...hidden}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });
});
