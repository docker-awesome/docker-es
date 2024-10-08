import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import formats from './formats';
import Formatter from './formatter';
import units from './units';

export default (
  _option: any,
  _dayjsClass: typeof Dayjs,
  dayjsFactory: typeof dayjs
) => {
  // extend dayjs()
  // e.g. add dayjs().isSameOrBefore()
  // dayjsClass.prototype.isSameOrBefore = function(arguments) {}

  // extend dayjs
  // e.g. add dayjs.utc()
  // dayjsFactory.utc = arguments => {}
  (dayjsFactory as any).$fn = Formatter;
  (dayjsFactory as any).$units = units;
  (dayjsFactory as any).$formats = formats;

  // overriding existing API
  // e.g. extend dayjs().format()
  /* const oldFormat = dayjsClass.prototype.format
  dayjsClass.prototype.format = function(arguments) {
    // original format result
    const result = oldFormat.bind(this)(arguments)
    // return modified result
  } */
};
