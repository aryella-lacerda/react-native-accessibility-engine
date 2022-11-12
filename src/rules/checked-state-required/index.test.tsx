import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import rule from '.';
import check from '../../engine';
import TestAssets from '@tests/assets';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule] });
};

describe('given a pressable component with an accessibility role of "checkbox"', () => {
  describe('when the checked state is invalid', () => {
    test.each([
      ['is not defined', undefined],
      ['is null', null],
      ['is an empty object', {}],
      ['is an array', []],
    ])(
      `then it throws if 'accessibilityState' prop %s`,
      // @ts-ignore
      (_, accessibilityState) => {
        const Checkbox = () => (
          <TouchableOpacity
            accessibilityRole="checkbox"
            // @ts-ignore
            accessibilityState={accessibilityState}
          >
            <Image source={TestAssets.checkbox['512px']} />
          </TouchableOpacity>
        );

        expect(() => run(<Checkbox />)).toThrowError(rule.help.problem);
      }
    );

    test.each([
      ["is a string other than 'mixed'", { checked: 'other' }],
      ['is not defined', { other: 'other' }],
      ['is null', { checked: null }],
      ['is an object', { checked: {} }],
      ['is an array', { checked: [] }],
    ])(
      `then it throws if 'accessibilityState.checked' prop %s`,
      // @ts-ignore
      (_, accessibilityState) => {
        const Checkbox = () => (
          <TouchableOpacity
            accessibilityRole="checkbox"
            // @ts-ignore
            accessibilityState={accessibilityState}
          >
            <Image source={TestAssets.checkbox['512px']} />
          </TouchableOpacity>
        );

        expect(() => run(<Checkbox />)).toThrowError(rule.help.problem);
      }
    );
  });

  describe('when the checked state is valid', () => {
    test.each([
      ["is 'mixed'", { checked: 'mixed' }],
      ['is true', { checked: true }],
      ['is false', { checked: false }],
    ])(
      `then it does not throw if 'accessibilityState.checked' prop %s`,
      // @ts-ignore
      (_, accessibilityState) => {
        const Checkbox = () => (
          <TouchableOpacity
            accessibilityRole="checkbox"
            // @ts-ignore
            accessibilityState={accessibilityState}
          >
            <Image source={TestAssets.checkbox['512px']} />
          </TouchableOpacity>
        );

        expect(() => run(<Checkbox />)).not.toThrowError(rule.help.problem);
      }
    );
  });
});
