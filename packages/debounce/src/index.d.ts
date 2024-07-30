export default function debounce<T extends any[], P>(
  fn: (...args: T) => P,
  delay?: number
): (...args: T) => void;
