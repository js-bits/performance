# Cross-environment (nodejs/web) performance object

This package exports `window.performance` object in a browser and built-in [Performance measurement APIs](https://nodejs.org/api/perf_hooks.html) module in a Node.js environment. Which is helpful when you develop a package compatible with both environments and use `performance` for some measurements. Allows to avoid conditional imports.

## Installation

Install with npm:

```
npm install @js-bits/performance
```

Install with yarn:

```
yarn add @js-bits/performance
```

Import where you need it:

```javascript
import performance from '@js-bits/performance';
```

or require for CommonJS:

```javascript
const performance = require('@js-bits/performance');
```

## How to use

```javascript
const t = performance.now();
```

## Notes

- Minimal size (bytes) in a browser since [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance_API) is natively supported. Does not include any polyfills.
