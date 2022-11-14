import React from 'react';
import Slider from '@react-native-community/slider';
import rule from '.';
import check from '../../engine';

const run = (component: React.ReactElement<any>) => {
  return check(component, { rules: [rule.id] });
};

// To inspect these components, run the example app under "Rules -> Adjustable Role"

it("throws if 'accessibilityRole' prop not defined", () => {
  const SliderWrapper = () => <Slider minimumValue={1} maximumValue={10} />;
  expect(() => run(<SliderWrapper />)).toThrowError(rule.help.problem);
});

it("throws if 'accessibilityRole' prop has a value other than 'adjustable'", () => {
  const SliderWrapper = () => (
    <Slider minimumValue={1} maximumValue={10} accessibilityRole={'button'} />
  );

  expect(() => run(<SliderWrapper />)).toThrowError(rule.help.problem);
});

it("doesn't throw if 'accessibilityRole' prop has the value 'adjustable'", () => {
  const SliderWrapper = () => (
    <Slider
      minimumValue={1}
      maximumValue={10}
      accessibilityRole={'adjustable'}
    />
  );

  expect(() => run(<SliderWrapper />)).not.toThrowError(rule.help.problem);
});
