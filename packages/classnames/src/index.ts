import type { Params, Return } from './index.d';

function parse(data: Params): Return {
  const type = typeof data;
  if (type === 'string') return data;
  if (type !== 'object') return null;
  if (Array.isArray(data)) return data.map((item) => parse(item));
  return Object.keys(data).map((key) => (data[key] ? key : null));
}

function classnames(...items: Params[]): string {
  return [
    ...new Set(
      items
        .map((item) => parse(item))
        .flat(Infinity)
        .filter(Boolean)
    )
  ].join(' ');
}

export default classnames;
