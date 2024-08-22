import type { Params } from './index.d';

const separator = String().padEnd(1);

function parse(data: Params) {
  const type = typeof data;
  if (type === 'string') return data;
  if (type !== 'object') return '';
  if (Array.isArray(data)) return data.map(parse);
  return Object.keys(data).filter((key) => data[key]);
}

function classnames(...args: Params[]): string {
  const set = new Set(args.map(parse).flat(Infinity).filter(Boolean));
  return [...set].join(separator);
}

export default classnames;
