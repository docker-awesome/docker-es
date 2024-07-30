import type Debounce from './index.d';

const debounce: typeof Debounce = function (fn, delay = 350) {
  let timer: NodeJS.Timeout;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

export default debounce;
