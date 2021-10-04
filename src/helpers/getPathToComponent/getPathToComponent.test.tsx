import React, { PropsWithChildren } from 'react';
import { View, Text, Pressable, SafeAreaView, ViewProps } from 'react-native';
import TestRenderer from 'react-test-renderer';

import getPathToComponent from './getPathToComponent';

it('should handle a View node with no parents', () => {
  let tree = TestRenderer.create(<View testID={'test'} />);
  const node = tree.root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['View']);
});

it('should handle a Text node with no parents', () => {
  let tree = TestRenderer.create(<Text testID={'test'} />);
  const node = tree.root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Text']);
});

it('should handle a custom node with no parents', () => {
  const Tree = () => null;

  //@ts-expect-error
  let tree = TestRenderer.create(<Tree testID={'test'} />);
  const node = tree.root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Tree']);
});

it('should handle a custom node with parents', () => {
  const Custom = (props: PropsWithChildren<ViewProps>) => <View {...props} />;

  let tree = TestRenderer.create(
    <SafeAreaView>
      <Pressable>
        <Custom>
          <Text testID={'test'} />
        </Custom>
      </Pressable>
    </SafeAreaView>
  );

  const node = tree.root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual([
    'RCTSafeAreaView',
    'Pressable',
    'View', // Most touchables have an internal 'View'
    'Custom',
    'View',
    'Text',
  ]);
});

it('should handle a View node with a custom parent', () => {
  const Tree = () => <View testID={'test'} />;

  let tree = TestRenderer.create(<Tree />);
  const node = tree.root.findByProps({ testID: 'test' });

  expect(getPathToComponent(node)).toEqual(['Tree', 'View']);
});

it('should handle a View within a View', () => {
  let tree = TestRenderer.create(
    <View>
      <View testID={'test'} />
    </View>
  );

  const node = tree.root.findByProps({ testID: 'test' });
  expect(getPathToComponent(node)).toEqual(['View', 'View']);
});

it('should disconsider fragments in component path', () => {
  const Tree = () => {
    return (
      <View>
        <>
          <Text testID={'test'}>Test</Text>
        </>
      </View>
    );
  };

  let tree = TestRenderer.create(<Tree />);
  const node = tree.root.findByProps({ testID: 'test' });
  expect(getPathToComponent(node)).toEqual(['Tree', 'View', 'Text']);
});
