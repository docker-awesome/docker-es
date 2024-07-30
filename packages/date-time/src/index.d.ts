import dayjs from 'dayjs';
import type { Formatter } from './plugins/formatter.d';

type DateTime = typeof dayjs & {
  $: Formatter & { [key: string]: any };
};

export default DateTime;
