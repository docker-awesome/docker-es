import dayjs from 'dayjs';
import formats from './formats';
import type { IOptions } from './formatter.d';

class Formatter {
  // 时间处理
  static #handler = (time: dayjs.ConfigType, options?: IOptions) => {
    if (!time) {
      return dayjs();
    }

    const { start, end } = options || {};
    if (start) {
      return dayjs(time).startOf(start);
    }

    if (end) {
      return dayjs(time).endOf(end);
    }

    return dayjs(time);
  };

  // 自定义格式化
  static format = (time: dayjs.ConfigType, options?: IOptions) => {
    const { format = formats.ymdhms, start, end } = options || {};
    const d = Formatter.#handler(
      time,
      JSON.parse(JSON.stringify({ start, end }))
    );
    return d.format(format);
  };

  // 格式化日期 'YYYY-MM-DD' | undefined
  static formatDate = (time: dayjs.ConfigType, options: IOptions) => {
    return Formatter.format(time, {
      ...(options || {}),
      format: formats.ymd
    });
  };

  // 格式化时间 'HH:mm:ss' | undefined
  static formatTime = (time: dayjs.ConfigType, options?: IOptions) => {
    return Formatter.format(time, {
      ...(options || {}),
      format: formats.hms
    });
  };

  // 格式化日期时间 'YYYY-MM-DD HH:mm:ss' | undefined
  static formatDateTime = (time: dayjs.ConfigType, options: IOptions) => {
    return Formatter.format(time, {
      ...(options || {}),
      format: formats.ymdhms
    });
  };
}

export default Formatter;
