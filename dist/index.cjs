'use strict';

var perf_hooks = require('perf_hooks');

console.log(`performance import mode ${typeof require === 'undefined' ? 'esm' : 'cjs'}`);

const returnValue = typeof performance === 'undefined' ? perf_hooks.performance : performance;

module.exports = returnValue;
