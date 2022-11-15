import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import rule from '.';
import check from '../../engine';
import TestAssets from '@tests/assets';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

// To inspect these components, run the example app under "Rules -> Button Label"
describe('if element is not hidden', () => {
  it('throws in the case of empty button', () => {
    expect(() => run(<TouchableOpacity />)).toThrowError(rule.help.problem);
  });

  it('throws if the button has empty text content', () => {
    const Button = () => (
      <TouchableOpacity>
        <Text />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).toThrowError(rule.help.problem);
  });

  it('throws if the button only has non-text content', () => {
    const Button = () => (
      <TouchableOpacity>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).toThrowError(rule.help.problem);
  });

  it("doesn't throw if the button has text content", () => {
    const Button = () => (
      <TouchableOpacity>
        <Text>Test</Text>
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button has text + non-text content", () => {
    const Button = () => (
      <TouchableOpacity>
        <Text>Test</Text>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button has accessibilityLabel", () => {
    const Button = () => <TouchableOpacity accessibilityLabel="Test" />;
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button only has non-text content but has accessibilityLabel", () => {
    const Button = () => (
      <TouchableOpacity accessibilityLabel="Image button">
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });
});

describe('if element is hidden', () => {
  const hidden = {
    accessibilityElementsHidden: true,
    importantForAccessibility: 'no-hide-descendants' as const,
  };

  it("doesn't throw in the case of empty button", () => {
    expect(() => run(<TouchableOpacity {...hidden} />)).not.toThrowError(
      rule.help.problem
    );
  });

  it("doesn't throw if the button has empty text content", () => {
    const Button = () => (
      <TouchableOpacity {...hidden}>
        <Text />
      </TouchableOpacity>
    );

    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("doesn't throw if the button only has non-text content", () => {
    const Button = () => (
      <TouchableOpacity {...hidden}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
  });

  it("doesn't throw if the button has text content", () => {
    const Button = () => (
      <TouchableOpacity {...hidden}>
        <Text>Test</Text>
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button has text + non-text content", () => {
    const Button = () => (
      <TouchableOpacity {...hidden}>
        <Text>Test</Text>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button has accessibilityLabel", () => {
    const Button = () => (
      <TouchableOpacity accessibilityLabel="Test" {...hidden} />
    );
    expect(() => run(<Button />)).not.toThrow();
  });

  it("doesn't throw if the button only has non-text content but has accessibilityLabel", () => {
    const Button = () => (
      <TouchableOpacity accessibilityLabel="Image button" {...hidden}>
        <Image source={TestAssets.heart['32px']} />
      </TouchableOpacity>
    );
    expect(() => run(<Button />)).not.toThrow();
  });
});
