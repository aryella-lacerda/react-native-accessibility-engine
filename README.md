<div align="center">
  <img src="assets/showcase-horizontal.png" alt="React Native Accessibility Engine" />
</div>

<h1 align="center">
React Native Accessibility Engine
</h1>

<h3 align="center">
Make accessibility-related assertions in React Native
</h3>

<div align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/react-native-accessibility-engine">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  <img src="https://img.shields.io/badge/contributors-welcome-blue" />
  <img src="https://img.shields.io/badge/maintenance-active-green" />
  <img src="https://img.shields.io/badge/support-ios|android-purple" />
  <a href="https://codecov.io/gh/aryella-lacerda/react-native-accessibility-engine">
    <img src="https://codecov.io/gh/aryella-lacerda/react-native-accessibility-engine/branch/main/graph/badge.svg?token=GQNZ4HXN7Q"/>
  </a>
  <a href="https://github.com/aryella-lacerda/react-native-accessibility-engine/actions/workflows/release.yml">
    <img src="https://github.com/aryella-lacerda/react-native-accessibility-engine/actions/workflows/release.yml/badge.svg"/>
  </a>
</div>

## Table of Contents

- [Intro](#intro)
- [How to use](#howtouse)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
- [Rules](#rules)
  - [Current rules catalog](#current-rules-catalog)
  - [What's a rule anyway?](#what's-a-rule-anyway?)
  - [Proposing a new rule](#proposing-a-new-rule)
  - [ReactTestInstance](#reacttestinstance)
- [Limitations](#limitations)
- [Contributing](#contributing)
- [Related Projects](#related-projects)

# Intro

The React Native ecosystem is _massive_ but it's still lagging behind React Web when it comes to accessibility tools. As mobile developers, we're still braving the challenge of mapping robust, time-tested web guidelines into equally robust guidelines for mobile. In React Native, we also face the challenge of adhering to the accessibility guidelines of multiple platforms using only [React Native's Accessibility API](https://reactnative.dev/docs/accessibility). There aren't many practical tutorials on the best use of this API, which means there are limited resources for React Native developers who want to make their apps more accessible. Indeed, there's still a lot of confusion about what makes an app accessible or what accessibility even _is_.

This project aims to make solving these problems a little easier.

## Goals

- [x] Create an engine capable of traversing a component tree making accessibility-related checks
- [ ] Create an app to showcase accessiblity best-practices
- [x] Keep it open-source!

# How to use

## Installation

```sh
npm install react-native-accessibility-engine --save-dev
# or
yarn add react-native-accessibility-engine --dev
```

## Configuration

Add the custom `toBeAccessible` matcher to your Jest config's `setupFilesAfterEnv` array:

```json
{
  ...
  "setupFilesAfterEnv": [..., "react-native-accessibility-engine/lib/commonjs/extend-expect"],
}
```

Alternately, if you have a Jest setup file, you could add the matcher there:

```json
{
  ...
  "setupFilesAfterEnv": ["path/to/your/setup/file"],
}
```

```typescript
// At the top of your setup file
import 'react-native-accessibility-engine/lib/commonjs/extend-expect';
```

## Usage

### With React elements

```tsx
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icons from './assets';

const Button = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should be accessible', () => {
  expect(<Button />)).toBeAccessible();
});
```

### With React test instances

You can also pass test instances from `react-test-renderer` and
`@testing-library/react-native`:

```tsx
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import TestRenderer, { ReactTestInstance } from 'react-test-renderer';
import { render } from '@testing-library/react-native';

import Icons from './assets';

const Button = () => (
  <TouchableOpacity accessible={false} accessibilityRole={'button'}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should be accessible, using react-test-renderer', () => {
  const button = TestRenderer.create(<Button />).root;
  expect(button).toBeAccessible();
});

it('should be accessible, using @testing-library/react-native', () => {
  const { getByA11yRole } = render(<Test />);
  const button = getByA11yRole('button');
  expect(button).toBeAccessible();
});
```

# Rules

## Current rules catalog

| ID                            | Description                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| link-role-required            | If text is clickable, we should inform the user that it behaves like a link                                   |
| link-role-misused             | We should only use the 'link' role when text is clickable                                                     |
| pressable-accessible-required | Make the button accessible (selectable) to the user                                                           |
| pressable-role-required       | If a component is touchable/pressable, we should inform the user that it behaves like a button or link        |
| pressable-label-required      | If a button has no text content, an accessibility label can't be inferred so we should explicitly define one  |
| adjustable-role-required      | If a component has a value that can be adjusted, we should inform the user that it is adjustable              |
| adjustable-value-required     | If a component has a value that can be adjusted, we should inform the user of its min, max, and current value |
| disabled-state-required       | If a component has a disabled state, we should expose its enabled/disabled state to the user                  |
| no-empty-text                 | If a text node doesn't contain text, we should add text or prevent it from rendering when it has no content   |

## What's a rule anyway?

Rules are objects that represent a single assertion on a component tree. Let's take the `link-role-required` rule, for example:

```typescript
import { Text } from 'react-native';

const rule: Rule = {
  id: 'link-role-required',
  matcher: (node) => isText(node.type),
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (onPress) {
      return accessibilityRole === 'link';
    }
    return true;
  },
  help: {
    problem:
      "The text is clickable, but the user wasn't informed that it behaves like a link",
    solution:
      "Set the 'accessibilityRole' prop to 'link' or remove the 'onPress' prop",
    link: '',
  },
};
```

### ID

First, we define an `id`, which doubles as the rule's name and should be as simple and self-explanatory as possible. It should also be unique, so take a look at the [rules catalog]('./rules-catalog.md') to make sure it isn't already in use.

### Matcher

A matcher is a function that accepts a ReactTestInstance node and returns `true` or `false`.

- If you return `true`, that means that this node is relevant to the rule and should be tested using the assertion defined below.
- If you return `false`, the node will be ignored.

In our `link-role-required` example, we only want to test `Text` nodes.

### Assertion

An assertion is a function that accepts one of the nodes selected by the `matcher` function, tests for some condition, and returns `true` or `false`.

- If you return `true`, that means the condition is met and no error is thrown.
- If you return `false`, the assertion fails and the engine will eventually (after traversing the whole tree) throw an error with the data contained in the `help` field.

In our `link-role-required` example, we test the following:

```
- if the text component contains an onPress prop
  - return true if the accessibilityRole prop equals 'link'
  - return false otherwise
- return true otherwise
```

### Help

The `help` field is an object containing three fields: problem, solution, and link.

- The `problem` field is a one-sentence string explaining in simple, clear language why the assertion failed.
- The `solution` field is a one-sentence string explaining what the developer needs to do to correct the oversight.
- The `link` field is a link to support material.

Note: For now, most rules do not have a link.

## Proposing a new rule

Just clone the project, create your own branch off of `main` and get to work. 💪 Go into the `src/rules` directory and create a folder named _with the ID of your rule_. Inside this folder, create two files:

- index.ts (make sure the rule object is the default export)
- index.test.tsx

Every rule needs to be tested. If you need to define a helper, put it in the `src/helper` folder and remember to test that, too. Also remember to run all the code quality scripts before you open a PR.

```shell
yarn lint
yarn test
yarn typescript
```

Then just be patient while someone reviews your PR and gets back to you. Thanks again for your contribution!

## ReactTestInstance

For reference, this the type of the `node` object passed to the `matcher` and `assertion` functions.

```typescript
export interface ReactTestInstance {
  instance: any;
  type: ElementType;
  props: { [propName: string]: any };
  parent: null | ReactTestInstance;
  children: Array<ReactTestInstance | string>;

  find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance;
  findByType(type: ElementType): ReactTestInstance;
  findByProps(props: { [propName: string]: any }): ReactTestInstance;

  findAll(
    predicate: (node: ReactTestInstance) => boolean,
    options?: { deep: boolean }
  ): ReactTestInstance[];
  findAllByType(
    type: ElementType,
    options?: { deep: boolean }
  ): ReactTestInstance[];
  findAllByProps(
    props: { [propName: string]: any },
    options?: { deep: boolean }
  ): ReactTestInstance[];
}
```

# Limitations

Though the goal of this project is eventually to cover a wide variety of components and situations, that's still a work in progress. Feel free to suggest any rules you feel could be helpful! ✌️

# Contributing

<div>
<img src="https://img.shields.io/badge/contributors-welcome-blue" />
<img src="https://img.shields.io/badge/maintenance-active-green" />
</div>

This project is totally open to questions, sugestions, corrections, and community pull requests.

# Related projects

- [eslint-plugin-react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y) is an Eslint plugin that lints your components and accessibility-related props.
- [axe-core](https://github.com/dequelabs/axe-core) is the project that inspired this one. It's a similiar accessbility engine made for HTML-based languages like React Web.
- [storybook-addon-a11y](https://github.com/storybookjs/storybook/tree/next/addons/a11y) is a Storybook add-on that uses Axe under the hood and allows you to inspect your components for accessibility problems as you develop them in Storybook.

# License

MIT
