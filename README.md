# @qc/react-conditionals

[![Build Status][travis-svg]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A set of React components that conditionally renders its renderable children.


## Installation

```sh
npm install --save @qc/react-conditionals
```

or

```sh
yarn add @qc/react-conditionals
```


## Example Usage

```jsx
import React from 'react'

import { Case, Else, If, Then, When } from '@qc/react-conditionals'


function SomeComponent(props) {
  return (
    <If is={status === 'active'}>
      <Then>
        <span>The status is active!</span>
      </Then>
      <Else>
        <span>The status is not active.</span>
      </Else>
    </If>
    <Case>
      <When is={status === 'active'}>
        <span>The status is active!</span>
      </When>
      <When is={status === 'pending'}>
        <span>The status is pending!</span>
      </When>
      <Else>
        <span>The status is unknown!</span>
      </Else>
    </Case>
    <When is={status === 'active'}>
      <span>The status is active!</span>
    </When>
  )
}
```


## &lt;If>

`<If>` may take as many `<Then>` or `<Else>` components as you like.  The order
of which does not matter.

```jsx
<If is={status === 'active'}>
  <Then>
    This is rendered when <code>If</code>'s condition is
    truthy.
  </Then>
  <Else>
    This is rendered when <code>If</code>'s condition is not
    truthy.
  </Else>
  This will be rendered regardless of <code>If</code>'s
  condition.  That is, any renderable children outside of
  <code>Then</code>s or <code>Else</code>s will be rendered.
  <Else>
    This will also be rendered when condition is
    <strong>NOT</strong> true.  That is, all immediate
    child <code>Else</code> components will be rendered
    when the condition is not true.
  </Else>
  <Then>
    This will also be rendered when <code>If</code>'s
    condition is truthy.
  </Then>
</If>
```

## &lt;Case>

`<Case>` may take as many `<When>` components you like.  It may optionally take
one `<Else>` component.  The order of the `<When>` and `<Else>` components in a
`<Case>` is important.  `<When>`s must come before the `<Else>`.

```jsx
<Case>
  <When is={status === 'active'}>
    <span>The status is active!</span>
  </When>
  <When is={status === 'active'}>
    This will <strong>not</strong> be rendered.  Only the first
    <code>When</code> component with a truty condition will be
    rendered.
  </When>
  <When is={status === 'pending'}>
    <span>The status is pending!</span>
  </When>
  <Else>
    <span>The status is unknown!</span>
  </Else>
</Case>
```

Renderables between `<When>` and `<Else>` components are always rendered.

```jsx
<Case>
  This is always rendered.
  <When is={...}>
    ...
  </When>
  <span>This is also always rendered.</span>
  <When is={...}>
    ...
  </When>
  <span>This is also always rendered.</span>
  <Else>...</Else>
  <span>This is also always rendered.</span>
</Case>
```


## &lt;When>

`<When>` can be used on its own outside of a `<Case>` parent component.  It is
equivalent to an `<If>`/`<Then>` combination.

```jsx
<When is={status === 'active'}>
  This will be rendered when the condition is true.
</When>
```


## Unsupported Usage

**`<Then>` Outside of an `<If>`**

```jsx
<Then>
  This is not guaranteed to be rendered or not since it does
  not have an appropriate parent.
</Then>
```

**`<Else>` Outside of a `<Case>` or an `<If>`**

```jsx
<Else>
  This is not guaranteed to be rendered or not since it does
  not have appropriate parents.
</Else>
```

**`<Else>` before `<When>`**

```jsx
<Case>
  <Else>
    This is not guaranteed to be rendered or not since it
    comes before any <code>&lt;When></code> components.  In
    fact, it may cause any successive <code>&lt;When></code>
    components to not render.
  </Else>
  ...
</Case>
```


[coverage-image]: https://coveralls.io/repos/github/hypersoftllc/qc-react-conditionals/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/hypersoftllc/qc-react-conditionals?branch=master
[downloads-image]: http://img.shields.io/npm/dm/qc-react-conditionals.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-react-conditionals
[license-image]: http://img.shields.io/npm/l/qc-react-conditionals.svg
[license-url]: LICENSE
[package-url]: https://npmjs.org/package/qc-react-conditionals
[npm-badge-png]: https://nodei.co/npm/qc-react-conditionals.png?downloads=true&stars=true
[travis-svg]: https://travis-ci.org/hypersoftllc/qc-react-conditionals.svg?branch=master
[travis-url]: https://travis-ci.org/hypersoftllc/qc-react-conditionals
