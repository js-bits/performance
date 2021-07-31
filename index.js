import { performance as perf } from 'perf_hooks';

console.log(`performance import mode ${typeof require === 'undefined' ? 'esm' : 'cjs'}`);

const returnValue = typeof performance === 'undefined' ? perf : performance;

export default returnValue;
