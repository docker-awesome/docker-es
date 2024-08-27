# DateTime 日期格式化

基于 [dayjs](https://day.js.org/en/) 扩展方法 $fn 和属性 $units, $formats。

## API 🔊

```js
// 引用
import DateTime from '@docker-es/date-time';

/** DateTime 同 dayjs 用法。
 * @param {Date | Dayjs | string} date 需要格式化的日期
 * @returns {string} 格式化后的日期
 */
DateTime(date).format();

/** 国际化设置
 * @param {string} locale_name 国际化语言标识
 * @returns {void}
 */
DateTime.locale(locale_name);

/** 格式化日期时间 'YYYY-MM-DD HH:mm:ss'
 * @param {Date | Dayjs | string} date 需要格式化的日期
 * @returns {string} 格式化后的日期
 */
DateTime.$fn.formatDateTime(date);

/** 格式化日期 'YYYY-MM-DD'
 * @param {Date | Dayjs | string} date 需要格式化的日期
 * @returns {string} 格式化后的日期
 */
DateTime.$fn.formatDate(date);

/** 格式化时间 'HH:mm:ss'
 * @param {Date | Dayjs | string} date 需要格式化的日期
 * @returns {string} 格式化后的日期
 */
DateTime.$fn.formatTime(date);

/** 属性 $units (预定义日期单位)
 * @prop {Object} $units: { milliseconds, seconds, minutes, hours, days, months, years, dates, weeks, quarters }
 */
DateTime.$units;

/** 属性 $formats (预定义日期格式)
 * @prop {Object} $formats: { hm, hms, ym, ymd, ymdhms }
 */
DateTime.$formats;
```

## E.G. 🌰

```js
import DateTime from '@docker-es/date-time';

// DateTime 同 dayjs 用法。
DateTime('2024-07-31').format(); // 2024-07-31T00:00:00+08:00

// 设置中文日期
DateTime.locale('zh-cn');

// 格式化日期时间 'YYYY-MM-DD HH:mm:ss'
DateTime.$fn.formatDateTime(new Date());
DateTime.$fn.formatDateTime('2024-07-31'); // 2024-07-31 00:00:00

// 格式化日期 'YYYY-MM-DD'
DateTime.$fn.formatDate('2024-07-31 12:59:59'); // 2024-07-31

// 格式化时间 'HH:mm:ss'
DateTime.$fn.formatTime('2024-07-31 12:59:59'); // 12:59:59

// 属性 $units
DateTime.$units.years; // years
DateTime.$units.days; // days

// 属性 $formats
DateTime.$formats.ymdhms; // 'YYYY-MM-DD HH:mm:ss'
DateTime.$formats.hms; // 'HH:mm:ss'
```
