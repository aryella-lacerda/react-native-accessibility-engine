# Table of Contents

- [What's a rule anyway?](#whats-a-rule-anyway?)
  - [ID](#id)
  - [Matcher](#matcher)
  - [Assertions](#assertion)
  - [Help](#help)
- [Proposing a new rule](#proposing-a-new-rule)
- [Reference](#reference)
  - [ReactTestInstance](#reacttestinstance)

# What's a rule anyway?

Rules are objects that represent a single assertion on a component tree. Let's take the `link-role-required` rule, for example:

```typescript
import { Text } from 'react-native';

const rule: Rule = {
  id: 'link-role-required',
  matcher: (node) => node.type === Text,
  assertion: (node) => {
    const { onPress, accessibilityRole } = node.props;
    if (onPress) {
      return accessibilityRole === 'link';
    }
    return true;
  },
  help: {
    problem:
      'If text is clickable, we should inform the user that it behaves like a link',
    solution:
      "Set the 'accessibilityRole' prop to 'link' or remove the 'onPress' prop",
    link: '',
  },
};
```

## ID

First, we define an `id`, which doubles as the rule's name and should be as simple and self-explanatory as possible. It should also be unique, so take a look at the [rules catalog]('./rules-catalog.md') to make sure it isn't already in use. If a rule already exists with a certain `id` but you think the existing rule would be better off renamed, feel free to open a PR to explain your reasoning. ✌️

## Matcher

A matcher is a function that accepts a ReactTestInstance node and returns `true` or `false`. 

- If you return `true`, that means that this node is relevant to the rule and should be tested using the assertion defined below. 
- If you return `false`, the node will be ignored.

In our `link-role-required` example, we only want to test `Text` nodes.

## Assertion

An assertion is a function that accepts one of the nodes picked by the `matcher` function, tests for some condition, and returns `true` or `false`. 

- If you return `true`, that means the condition is met and no error is thrown.
- If you return `false`, the assertion fails and the engine will eventually (after traversing the whole tree) throw an error with the data contained in the `help` field.

In our `link-role-required` example, we test the following:

```
- if the text component contains an onPress prop
  - return true if the accessibilityRole prop equals 'link'
  - return false otherwise
- return true otherwise
```

## Help

The `help` field is an object containing three fields: problem, solution, and link.

- The `problem` field is a one-sentence string explaining in simple, clear language why the assertion failed.
- The `solution` field is a one-sentence string explaining what the developer needs to do to correct the oversight.
- The `link` field is a link to support material.

Note: For now, most rules do not have a link.

# Proposing a new rule

Take a look at at the [contributing]() docs to learn how to setup the project and take a look at our style guide. Once that's done, create your own branch off of `main` and get to work. 💪

Go into the `src/rules` directory and create a folder named *with the ID of your rule*. Inside this folder, create two files:

- index.ts (make sure the rule object is the default export)
- index.test.tsx

Every rule needs to be tested. If you need to define a helper, put it in the `src/helper` folder and remember to test that, too. Also remember to run all the code quality scripts before you open a PR.

```shell
yarn lint
yarn test
yarn typescript
```

Then just be a little patient while someone reviews your PR and gets back to you. Thanks again for your contribution!

# Reference

## ReactTestInstance

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

    findAll(predicate: (node: ReactTestInstance) => boolean, options?: { deep: boolean }): ReactTestInstance[];
    findAllByType(type: ElementType, options?: { deep: boolean }): ReactTestInstance[];
    findAllByProps(props: { [propName: string]: any }, options?: { deep: boolean }): ReactTestInstance[];
}
```