# CodyFrame

<p align="center">
  <a href="https://codyhouse.co/ds/docs/framework">
    <img src="https://raw.githubusercontent.com/codyhouse/codyframe/master/main/img/logo.png" alt="CodyHouse logo" width="100" height="100">
  </a>
</p>

<p align="center">
  The intuitive CSS framework
</p>

## Quick start

If you prefer working with SASS, create a style.scss file and import the CodyFrame files:

```scss
@use 'reset'; // ← reset
@use 'config' as *; // ← customize the framework

// ↓ copy & modify these templates locally
@use 'typography';
@use 'icons';
@use 'buttons';
@use 'forms';

// ↓ import here the CodyHouse components
@use 'components/_1_header' as *;
@use 'components/_1_footer' as *;
// ...

@use 'util'; // ← utility classes
````

The **_config.scss** file is used to customize the framework (i.e., to edit the breakpoints or to change the spacing scale).

Example:

```scss
@use 'reset';
@use 'config' as * with (
  $breakpoints: (
    'sm': '48rem',
    'md': '64rem',
    'lg': '80rem'
  ),
  $font-family: (
    'primary': 'Inter, system-ui, sans-serif'
  ),
  $font-size: (
    'sm': '0.8125rem',
    'base': '1rem',
    'md': '1.1875rem',
    'lg': '1.4375rem',
    '2xl': '2.0625rem'
  )
);

// ...
```

Check the [documentation](https://codyhouse.co/ds/docs/framework) for a full list of configuration options.

If you prefer working with CSS (without a preprocessor):

```css
@import 'https://unpkg.com/codyframe/main/css/reset.css'; /* ← reset */

/* ↓ copy & modify these templates locally */
@import 'typography.css';
@import 'icons.css';
@import 'buttons.css';
@import 'forms.css';

/* ↓ import here the CodyHouse components */
@import 'components/_1_header.css';
@import 'components/_1_footer.css';
/* ... */

@import 'https://unpkg.com/codyframe/main/css/util.css'; /* ← utility classes */
```

To install the node module:

```sh
# using npm
npm i codyframe

# using Yarn
yarn add codyframe
```

If you install CodyFrame as npm module, import the reset, config, and util modules from the node package:

```scss
@use '../../../node_modules/codyframe/main/scss/reset';
@use '../../../node_modules/codyframe/main/scss/config' as *;

// ↓ copy & modify these templates locally
@use 'typography';
@use 'icons';
@use 'buttons';
@use 'forms';

// ↓ import here the CodyHouse components
@use 'components/_1_header' as *;
@use 'components/_1_footer' as *;
// ...

@use '../../../node_modules/codyframe/main/scss/util';
```

## Documentation

Explore the full documentation on [codyhouse.co →](https://codyhouse.co/ds/docs/framework)

## Components

CodyHouse's components are accessible, progressively enhanced, HTML, CSS, JS components that work seamlessly with CodyFrame.

[Explore the components →](https://codyhouse.co/ds/components)