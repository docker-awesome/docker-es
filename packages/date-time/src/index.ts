import dayjs from 'dayjs';
import './locales';
import plugins from './plugins';

dayjs.extend(plugins);

export default dayjs;
