import { performance as perf } from 'perf_hooks';

if (typeof performance === 'undefined') {
  console.log('node performance', perf);
} else {
  console.log('web performance', perf);
}

export default typeof performance === 'undefined' ? perf : performance;
