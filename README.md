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
  <a href="https://codecov.io/gh/aryella-lacerda/react-native-accessibility-engine">
    <img src="https://codecov.io/gh/aryella-lacerda/react-native-accessibility-engine/branch/main/graph/badge.svg?token=GQNZ4HXN7Q"/>
  </a>
</div>

## Table of Contents

- [Intro](#intro)
- [Goals](#goals)
- [Installation](#installation)
- [Limitations](#limitations)
- [Contributing](#contributing)

## Intro

The React Native ecosystem is *massive* but it's still lagging behind React Web when it comes to accessibility tools. On top of that, as mobile developers, we're still braving the challenge of mapping robust, time-tested web guidelines into equally robust guidelines for mobile. In React Native, we also face the challenge of adhering to the accessibility guidelines of multiple platforms using only [React Native's Accessibility API](https://reactnative.dev/docs/accessibility). There aren't many practical tutorials on the best use of this API, which means there are limited resources for React Native developers who want to make their apps more accessible. Indeed, there's still a lot of confusion about what makes an app accessible or what accessibility even *is*.

This project aims to make solving these problems a little easier.

## Goals

- [x] Create an engine capable of traversing a component tree making accessibility-related checks
- [x] Create an app to showcase accessiblity best-practices
- [x] Keep it open-source!

## Roadmap

For version v0.3.0:

- Expand rule list to cover a wider range of components and situations
- Document the rules currently available and the sources they are based on
- Make exmaple app accessible
- Create a `useAccessibleSize` hook to throw warnings at runtime (place in another repo?) about interactive components that don't meet minimum size requirements

## Installation

```sh
npm install react-native-accessibility-engine --save-dev
// or
yarn add react-native-accessibility-engine --dev
```

## Usage

```typescript
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Icons from './assets';
import AccessibilityEngine from 'react-native-accessibility-engine';

const Button = () => (
  <TouchableOpacity accessible={false}>
    <Image source={Icons.filledHeart['32px']} />
  </TouchableOpacity>
);

it('should not have accessibility errors', () => {
  expect(() => AccessibilityEngine.check(<Button />)).not.toThrow();
});

```

## Limitations

Though the goal of this project is eventually to cover a wide variety of components and situations, v1.0.0 only covers button-components (as in, the Pressable/Touchables).

## Contributing

I certainly don't know everything there is to know about accessibility. If you're an evaluator, developer, designer, project manager, policy maker, person with disabilities, or any other interested party - take a look! And if you can, contribute. ♥️

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
