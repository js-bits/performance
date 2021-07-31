'use strict';

var perf_hooks = require('perf_hooks');

const returnValue = typeof performance === 'undefined' ? perf_hooks.performance : performance;

module.exports = returnValue;
