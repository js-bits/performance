# Cross-environment (nodejs/web) performance object

This package exports `window.performance` in a browser and `perf_hooks` in a Node.js environment. Which is helpful when you are developing a package compatible with both environments. Allows to avoid conditional imports.

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

## How to use

```javascript
const t = performance.now();
```

## Notes

- [Window.performance](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance)

- [Performance measurement APIs](https://nodejs.org/api/perf_hooks.html)
