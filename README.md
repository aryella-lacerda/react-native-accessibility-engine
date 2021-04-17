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
- [Goals](#goals)
- [Roadmap](#roadmap)
- [Installation](#installation)
- [Limitations](#limitations)
- [Contributing](#contributing)

## Intro

The React Native ecosystem is *massive* but it's still lagging behind React Web when it comes to accessibility tools. On top of that, as mobile developers, we're still braving the challenge of mapping robust, time-tested web guidelines into equally robust guidelines for mobile. In React Native, we also face the challenge of adhering to the accessibility guidelines of multiple platforms using only [React Native's Accessibility API](https://reactnative.dev/docs/accessibility). There aren't many practical tutorials on the best use of this API, which means there are limited resources for React Native developers who want to make their apps more accessible. Indeed, there's still a lot of confusion about what makes an app accessible or what accessibility even *is*.

This project aims to make solving these problems a little easier.

## Goals

- [x] Create an engine capable of traversing a component tree making accessibility-related checks
- [ ] Create an app to showcase accessiblity best-practices
- [x] Keep it open-source!

## Roadmap

[The a look at our project board.](https://github.com/aryella-lacerda/react-native-accessibility-engine/projects/1)

## Installation

```sh
npm install react-native-accessibility-engine --save-dev
// or
yarn add react-native-accessibility-engine --dev
```

## Usage

```tsx
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

Though the goal of this project is eventually to cover a wide variety of components and situations, that's still a work in progress. You can check out [the current list of rules and their descriptions here](./docs/rules-catalog.md). 

## Contributing

<div>
<img src="https://img.shields.io/badge/contributors-welcome-blue" />  
<img src="https://img.shields.io/badge/maintenance-active-green" />  
</div>

This project is totally open to questions, sugestions, corrections, and community pull requests. We've tried to make contributing as painless a process as possible. Take a look at our guides:

- [How do I set up and run the project?](CONTRIBUTING.md)
- [What's a rule anyway? How do I propose a new one?](./docs/proposing-rules.md)
- [Where's the current rules catalog?](./docs/rules-catalog.md)
- [Anything on the project roadmap I can help with?](https://github.com/aryella-lacerda/react-native-accessibility-engine/projects/1)

## License

MIT
