# Sources Used

[iOS HIG] - [iOS Human Interface Guidelines - Accessibility - User Interaction](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/user-interaction/)

[iOS APG] - [Accessibility Programming Guide for iOS](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008785-CH1-SW1)

# Guidelines

## Pressables/Touchables

### Applies to components:
  - [Pressable](https://reactnative.dev/docs/pressable#example)
  - [TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback) and all components that inherit from it: 
    - [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
    - [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
    - [TouchableNativeFeedback](https://reactnative.dev/docs/touchablenativefeedback)

<details>
  <summary>
  [x] Inform the user that the component behaves like a button
  </summary>

### Type of accessibility:

Visual

### Why this is necessary:

If it's sometimes dificult even for people with good vision to figure out that certain elements are actually buttons and not just labels or otherwise decorative, imagine how much harder it is for users with low vision. The `accessibilityRole` solves this problem by allowing us to explicitly tell users that make use of assistive tecnology that the component they've selected is, in fact, a button.

### Can be implemented by:
- setting the button's `accessibilityRole` prop to `button`.
- setting the button's `accessibilityRole` prop to `imagebutton` in the event that your button is also an image.
- setting the button's `accessibilityRole` prop to `radio` in the event that your button is part of a `radiogroup` and behaves like a `radio` button: "A checkable input in a group of elements with the same role, only one of which can be checked at a time.".
### Example:

```tsx
  <Pressable accessibilityRole={'button'}>
    <Text>Press Me</Text>
  </Pressable>
```
</details>

<details>
  <summary>
  [ ] Give buttons a touchable area that measures at least 44x44 pt
  </summary>

### Type of accessibility:

Motor

### Why is this important:

Have you ever tried to press a very small item on a mobile screen? Even if you have precise motor control, sometimes you end up pressing the wrong button and getting taken somewhere you didn't want to go. For users with motor issues or even users on particularly small screens or who happen to be using gloves, its important that your pressable and selectable components are large enough - or at least that their touchable area is large enough - to allow for easier manipulation.

### Can be implemented by:
  - Ensuring that the component's size is at least 44x44 units.
  - Extending the component's touchable area beyond it's borders by using the hitSlop prop. 

### Important observations:
  - The touch area never extends past the parent view bounds.
  - The Z-index of sibling views always takes precedence if a touch hits two overlapping views.

### Example:

```tsx
// Increase the button's touchable area horizontally by 10 units and vertically by 15 units.
// So that the total touchable area is at least 44x44 units.
<TouchableOpacity hitSlop={{ left: 10, right: 10, top: 15, buttom: 15 }}>
  <Text>Press Me</Text>
</TouchableOpacity>
```

### Other references:
  - [React Native's guide on handling touches](https://reactnative.dev/docs/handling-touches#touchables)
  - [Tutorial on how to create an autoHitSlop hook](https://zubko.io/blog/auto-hitslop-hook)
</details>

<details>
  <summary>
  [x] Make only the button selectable, not the content within
  </summary>
  </br>

### Type of accessibility:

Visual

### Why this is necessary:

The `accessible` prop allows us to "contain" elements that make sense as a unit but not individually. Consider a button with an icon and a text label. The label and icon are both parts of a whole. If we treated the button container, the label, and the icon all as individual "buttons" that did the same thing, then the visually impaired user would be informed of the same button three times. 

The `accessible` props helps us here. It defines the button continer as a selectable unit, making it impossible to single out the label or the icon. Clicking on either of them selects the button instead.

### Can be implemented by:
- setting the button's `accessible` prop to `true`.

### Important observations:
- By default, touchable and pressables set `accessible` to `true`.

### Example:

```tsx
  <TouchableOpacity accessible> // The button can be selected.
    <Text>Press Me</Text> // The text within cannot. Pressing this will select the button instead.
  </TouchableOpacity>
```

</details>

<details>
  <summary>
  [x] Expose the button's enabled/disabled state to accessibility tools
  </summary>

### Aids in what type of accessibility:

Visual

### Why this is necessary:

You're probably familiar with the button's `disabled` prop, which prevents users from triggering press events and supresses button-touch animations. Disabling a button will also generally change its design. Maybe the label will become less opaque or the background will turn gray. This informs the visual user that the button's disabled and usually prevents them from trying to press the button in the first place.

For users with visual disabilities, however, these changes mean little. The `accessibilityState` prop can lend a hand here. By passing in an object with a `disabled` key, you inform users with low visibility that this component has a disabled state and whether or not that state is active.

### Can be implemented by:
- setting the button's `accessibilityState` prop and providing a `disabled` key with a boolean value.

### Example:

```tsx
const [isDisabled, setIsDisabled] = React.useState(false)

return (
  <TouchableOpacity accessible accessibilityState={{ disabled: isDisabled }} disabled={isDisabled}>
    <Text>Press Me</Text>
  </TouchableOpacity>
)
```

</details>

<details>
  <summary>
  [ ] Add an accessibility label to buttons
  </summary>

### Type of accessibility:

Visual

### Why this is necessary:

This one is pretty simple. Visual users usually understand what a button does through its label, style, and/or icons. VoiceOver/TalkBack will generally read the text contained within the button as its label, but if your button contains nothing but an icon, what should be done then?

The `accessibilityLabel` prop solves this problem. It explicitly defines a string that should be read aloud when the button is selected and is especially useful for buttons, icons, and button-icons.

From the iOS APG (adapted for React Native):

> The `accessibilityLabel` prop identifies the user interface element. Every accessible component, native and custom, must supply an `accessibilityLabel`. 

### Important observations:

- By default, the only text within an `accessible` element is considered its `accessibilityLabel`. However, try not to rely on this automatic behavior too heavily.

### Can be implemented by:
- If your button only contains a text label, it will already be read as your `accessibilityLabel`.
- If your button contains a text label + other elements such as an image/icon, run it through an accessibility inspector/scanner. It's possible that the label will already be read as your `accessibilityLabel`. 
- If your button does not contain any text, it's very important to set the `accessibilityLabel` prop manually.
- When in doubt, set the `accessibilityLabel` prop manually.

### Example:

```tsx
  <TouchableOpacity style={styles.button} accessibilityLabel={'Like'}>
    <Image source={Images.heart['32px']} />
  </TouchableOpacity>
```

### Tips:

According to the [iOS APG](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html), an accessibilty label:

- **Very briefly describes the element.** Ideally, the label consists of a single word, such as Add, Play, Delete, Search, Favorites, or Volume.

- **Does not include the type of the control or view.** The type information is passed through the `accessibiltyRole` prop and should never be repeated in the label.

- **Begins with a capitalized word.** This helps VoiceOver/TalkBack read the label with the appropriate inflection.

- **Does not end with a period.** The label is not a sentence and therefore should not end with a period.

- **Is localized.**  Be sure to make your application available to as wide an audience as possible by localizing all strings, including accessibility attribute strings. In general, VoiceOver speaks in the language that the user specifies in International settings.

</details>

<details>
  <summary>
  [ ] Add an accessibility hint to buttons
  </summary>

### Aids in what type of accessibility:

Visual

### Why this is necessary:

Visual users sometimes understand what a button will do through visual context clues. To make this context explicit to low vision users, we have the `accessibiltyHint` prop. Use it to explain what the button will do or add any aditional or relevant information.

From the iOS APG (adapted for React Native):

> The `accessibilityHint` prop describes the results of interacting with a user interface component. A hint should be supplied only if the result of an interaction isn't obvious from the component's label.

### Important observations:
- ESLint's `a11y` plugin recommends that you add an `accessibiltyHint` whenever you add an `accessibilityLabel`. However, the iOS APG suggests that you only add an `accessibilityHint` when the label isn't enough to explain what will happen when you interact with the component.

### Can be implemented by:
- setting the `accessibilityHint` prop

### Example:

```tsx
  <TouchableOpacity 
    style={styles.button} 
    accessibilityLabel={'See more'} 
    accessibilityHint={'Shows a detailed character profile.'}>
    <Text>See more</Text>
  </TouchableOpacity>
```

### Tips:

According to the [iOS APG](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/iPhoneAccessibility/Making_Application_Accessible/Making_Application_Accessible.html), if the result of a user’s action on a component isn't clearly implied by its label, create a hint that:

- **Very briefly describes the results.** Even though few components need hints, try to make the hints you do need as brief as possible. This decreases the amount of time users need to spend listening before they can use the element. However, avoid sacrificing clarity and good grammar for brevity. For example, changing “Adds a city” to “Adds city” doesn't significantly decrease the length of the hint, but does make it sound awkward and a bit less clear.

- **Begins with a verb and omits the subject.** Conjugate your verbs declaritively (like “Plays”) and not imperatively (like “Play”). Avoid using the imperative because it can make the hint sound like a command. For example, you don’t want to tell users to “Play the song”. You want to tell them that tapping the element “Plays the song.”

- **Begins with a capitalized word and ends with a period.** Even though a hint is a phrase, not a sentence, ending the hint with a period helps VoiceOver/TalkBack speak it with the appropriate inflection.

- **Does not include the name of the action or gesture.** A hint doesn't tell users *how* to perform the action, it tells users *what* will happen when that action occurs. So don't create hints like “Tap to play the song”, or “Swipe to delete the item”. This is important because VoiceOver/TalkBack users can use VoiceOver/TalkBack-specific gestures to interact with elements. If you name a different gesture in a hint, it would be very confusing.

- **Does not include the name of the component.** The user gets this information from the `accessibilityLabel` prop, so you shouldn't repeat it in the hint. Don't create hints such as “Save saves your edits” or “Back returns to the previous screen.”

- **Does not include the type of the component.** The user already knows your component behaves like a button or a search field because this information is available through the component's `accessibilityRole` prop. So don't create hints such as “Button that adds a name” or “Slider that controls the scale.”

- **Is localized.** As with accessibility labels, hints should be available in the user’s preferred language.

</details>