import { performance as perf } from 'perf_hooks';

export default typeof performance === 'undefined' ? perf : performance;
