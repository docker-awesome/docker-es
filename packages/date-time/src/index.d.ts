import dayjs from 'dayjs';
import formats from './plugins/formats';
import type { Formatter } from './plugins/formatter.d';
import units from './plugins/units';

declare function DateTime(
  ...args: Parameters<typeof dayjs>
): DateTime.DateTimejs;

declare namespace DateTime {
  class DateTimejs extends dayjs.Dayjs {}

  const $fn: typeof Formatter;

  const $units: typeof units;

  const $formats: typeof formats;
}

export default DateTime;
