
<center>
<h1>
React Native Accessibility Engine
</h1> 

<h3>
Make accessibility-related assertions on React Native code using React Test Renderer.
</h3>
</center>

## Status

Unreleased. Contributors welcome! 😄
## Intro

The React Native ecosystem is massive, but it's still lagging behind React Web and the more general web ecosystem when it comes to accessibility tools and best-practice guides. As mobile developers, we are still braving the challenge of mapping robust, time-tested web guidelines into equally robust guidelines for mobile. 

In React Native, we also face the challenge of adhering to the accessibility guidelines of 2+ platforms using only [React Native's Accessibility API](https://reactnative.dev/docs/accessibility). There aren't many practical guides on the best use of this API, which means there are few resources for React Native developers who want to make their apps more accessible. Indeed, there's still a lot of confusion about what makes an app accessible or what accessibility even *is*.

This project aims to help make bridging that gap a little easier.

## Goals

- Keep it open-source
- Create an engine capable of traversing a component tree making accessibility-related checks and then generating a useful report
- Use [React Test Render](https://reactjs.org/docs/test-renderer.html) for rendering and traversing because it'll probably already be installed in most apps and is pretty easy to use
- Create an app to showcase how to pass every check using RN's Acessibility API

## Roadmap

### v1

- [ ] Compile list of initial rules and their sources
- [ ] Create rule/check object
- Needs id, matcher, assertion, and description at least
- Matchers need to be React Test Renderer's `findAll` callback
- For version 1, it's simpler to implement binary logic: pass or did not pass assertion. In future, add severity scale.
- [ ] Create report object
- Report only on failed assertions?
- [ ] Create showcase app
- Currently our example app is still React Native's default screen
- [ ] Achieve at least 70% test coverage
- [ ] Implement version 1 of engine

## Installation

```sh
npm install react-native-accessibility-engine
```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
