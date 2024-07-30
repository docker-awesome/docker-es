import type Throttle from './index.d';

/* const throttle: typeof T = function (fn, duration = 350) {
  let lastTime: number = 0;
  return function (...args) {
    const current = Date.now();
    if (current - lastTime > duration) {
      fn.apply(this, args);
      lastTime = current;
    }
  };
}; */

const throttle: typeof Throttle = function (fn, duration = 350) {
  let timer: NodeJS.Timeout | null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, duration);
  };
};

export default throttle;
