import type { OpUnitType } from 'dayjs';
import dayjs from 'dayjs';

export type IOptions = {
  start?: OpUnitType;
  end?: OpUnitType;
};

export class Formatter {
  static handler: (time: dayjs.ConfigType, options?: IOptions) => dayjs.Dayjs;
  static format: (
    time: dayjs.ConfigType,
    options?: IOptions & {
      format?: string;
    }
  ) => string;
  static formatDateTime: (
    time?: dayjs.ConfigType,
    options?: IOptions
  ) => string;
  static formatDate: (time?: dayjs.ConfigType, options?: IOptions) => string;
  static formatTime: (time?: dayjs.ConfigType, options?: IOptions) => string;
}
