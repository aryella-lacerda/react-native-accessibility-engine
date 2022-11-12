import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import rule from '.';
import check from '../../engine';
import TestAssets from '@tests/assets';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule] });
};

describe('buttons', () => {
  describe('if the disabled prop is not defined', () => {
    it("throws if 'accessibilityState' prop not defined", () => {
      const Button = () => (
        <TouchableOpacity>
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals empty object'", () => {
      const Button = () => (
        <TouchableOpacity accessibilityState={{}}>
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Button = () => (
        <TouchableOpacity accessibilityState={{ expanded: true }}>
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
    });
  });

  describe('if the disabled prop is defined', () => {
    it("throws if 'accessibilityState' prop not defined", () => {
      const Button = () => (
        <TouchableOpacity disabled={false}>
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals empty object'", () => {
      const Button = () => (
        <TouchableOpacity disabled={false} accessibilityState={{}}>
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Button = () => (
        <TouchableOpacity
          disabled={false}
          accessibilityState={{ expanded: true }}
        >
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).toThrowError(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = true' key-value pair", () => {
      const Button = () => (
        <TouchableOpacity
          disabled={false}
          accessibilityState={{ disabled: true }}
        >
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = false' key-value pair", () => {
      const Button = () => (
        <TouchableOpacity
          disabled={false}
          accessibilityState={{ disabled: false }}
        >
          <Image source={TestAssets.heart['32px']} />
        </TouchableOpacity>
      );

      expect(() => run(<Button />)).not.toThrowError(rule.help.problem);
    });
  });
});

describe('sliders', () => {
  describe('if disabeld prop is defined', () => {
    it("throws if 'accessibilityState' prop not defined", () => {
      const Wrapper = () => <Slider disabled={false} />;
      expect(() => run(<Wrapper />)).toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals empty object'", () => {
      const Wrapper = () => <Slider disabled={false} accessibilityState={{}} />;
      expect(() => run(<Wrapper />)).toThrowError(rule.help.problem);
    });

    it("throws if 'accessibilityState' prop equals an object that doesn't contain 'disabled' key", () => {
      const Wrapper = () => (
        <Slider disabled={false} accessibilityState={{ expanded: true }} />
      );

      expect(() => run(<Wrapper />)).toThrowError(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = true' key-value pair", () => {
      const Wrapper = () => (
        <Slider disabled={true} accessibilityState={{ disabled: true }} />
      );

      expect(() => run(<Wrapper />)).not.toThrowError(rule.help.problem);
    });

    it("doesn't throw if 'accessibilityState' equals an object that contains the 'disabled = false' key-value pair", () => {
      const Wrapper = () => (
        <Slider disabled={false} accessibilityState={{ disabled: false }} />
      );
      expect(() => run(<Wrapper />)).not.toThrowError(rule.help.problem);
    });
  });
});
