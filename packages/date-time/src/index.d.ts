import dayjs from 'dayjs';
import type { Formats } from './plugins/formats';
import type { Formatter } from './plugins/formatter.d';
import type { Units } from './plugins/units';

declare function DateTime(
  ...args: Parameters<typeof dayjs>
): DateTime.DateTimejs;

declare namespace DateTime {
  class DateTimejs extends dayjs.Dayjs {}

  const $fn: typeof Formatter;

  const $units: Units;

  const $formats: Formats;
}

export default DateTime;
