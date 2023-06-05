/// <reference types="node" />
/// <reference lib="DOM" />
import { performance as perf } from 'perf_hooks';

const returnValue = typeof performance === 'undefined' ? perf : performance;

export default returnValue;
