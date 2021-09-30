# The Contacto Style Guide

This is a comprehensive collection of all UI components that are used in the contacto console application. This is developed based on the [style guide](https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106) provided by the design team. These components can be further extended into other apps by just modifying the CSS variable list. This collection almost has all
required components to build a standard application. On each component you will find different stories, which are different states of the UI component.
Buliding them here makes it easy to develop hard-to-reach states. These **stories** are different states of a component which can be independantly developed and tested and finally consumed without flaws.

#### Some Pro's

- Since all UI components are loaded from this package, they can be altered without changing a single line of code in the consumer application.
- The design team, can do a UX review here and provide comments, this will reduce the number of UI/UX bugs that we recieve.
- This makes the look of the product standardised and the user would never feel any distruptions in the UI as the components will behave uniformly.
- For the dev team, having a common component library would help avoiding writing huge chunks of repetetive CSS again and again. Instead they can focus on developing actual business logic with accuracy.
- The UI components can be unit tested and would be production ready.
- This package can be installed as another library by just using `npm install`

## Components

The following are the common components that are built. Each of them, has stories, which define their UI states. You can play with it and use it as you wish.

1. [Buttons](https://samuellawerentz.github.io/style-guide/?path=/docs/components-button--primary)
2. [Checkbox](https://samuellawerentz.github.io/style-guide/?path=/docs/components-checkbox--default)
3. [Radio](https://samuellawerentz.github.io/style-guide/?path=/docs/components-radio--default)
4. [Select](https://samuellawerentz.github.io/style-guide/?path=/docs/components-select--default)
5. [TextField](https://samuellawerentz.github.io/style-guide/?path=/docs/components-textfield--default)
6. [Tag](https://samuellawerentz.github.io/style-guide/?path=/docs/components-tag--default)
7. [Card](https://samuellawerentz.github.io/style-guide/?path=/story/layout-card--card-with-title)

## How to use?

1. Install the component package `npm install @contacto-io/style-guide`
2. Import the component that is required - ```import { Button } from '@contacto-io/style-guide'```
3. Visit the particular component page on the storybook app.
4. Navigate to your required story.
5. Copy the code and modify the `props` as required.
6. Since all the components are wrapper components upon antd. Please visit [antd docs](https://ant.design/components/overview/) for additional information.

## Technical Requirements

#### Dependencies

For the compoenents to work properly, make sure the consumer project has these dependencies installed. The following are the peer dependencies for this component library.

```json
  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "prop-types": "^15.7.2",
    "antd": "^4.16.8",
  }
```

#### CSS variables

This style guide completely depends on CSS variables that are commonly defined by the design team. Make sure that the variables are included on the top for the style guide to work properly.
- [CSS Variable list](https://samuellawerentz.github.io/style-guide/?path=/story/colors-css-variable-list--page)

#### Icons

The icons used are taken from the google icon package. So for icons to work properly, make sure google font for material Icons is loaded properly.

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');
```

## Publishing this package
- Create a .npmrc file with the following contents
  ```
  //npm.pkg.github.com/:_authToken=PASTE_YOUR_GIT_ACCESS_TOKEN_HERE
  ```
  To get the personal access token, head to [developer Settings](https://github.com/settings/tokens). Generate a Token with `write:package` access
- Update the package version to the next version inside package.json
- Run `npm run build && npm publish`

## Useful Links

- Design Style Guide
  - Components - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106
  - Spacing - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=809%3A179
  - Typography and Colors - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=0%3A1
  - Logo and Favicon - https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=819%3A179
- Style Guide Package - https://github.com/contacto-io/contacto-console/packages/915367
- Component Library live demo - https://samuellawerentz.github.io/style-guide/