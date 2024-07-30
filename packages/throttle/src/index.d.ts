export default function throttle<T extends any[], P>(
  fn: (...args: T) => P,
  duration?: number
): (...args: T) => void;
