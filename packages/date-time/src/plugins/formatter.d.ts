import type { OpUnitType } from 'dayjs';
import dayjs from 'dayjs';

type Exclusive<T, P, U> =
  | (T & { [K in keyof P]?: never } & U)
  | (P & { [K in keyof T]?: never } & U);

export type IOptions = Exclusive<
  { start?: OpUnitType },
  { end?: OpUnitType },
  { format?: string }
>;

export class Formatter {
  static format: (time: dayjs.ConfigType, options?: IOptions) => string;
  static formatDate: (time: dayjs.ConfigType, options?: IOptions) => string;
  static formatTime: (time: dayjs.ConfigType, options?: IOptions) => string;
  static formatDateTime: (time: dayjs.ConfigType, options?: IOptions) => string;
}
