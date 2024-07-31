# DateTime 日期格式化

基于 [dayjs](https://day.js.org/en/) 扩展方法挂载到 $ 属性上。

## API 🔊

```js
// 引用
import DateTime from '@docker-es/date-time';

// DateTime 同 dayjs 用法。
DateTime(date).format();

// 国际化设置
DateTime.locale(locale_name);

// 格式化日期时间 'YYYY-MM-DD HH:mm:ss'
DateTime.$.formatDateTime(date);

// 格式化日期 'YYYY-MM-DD'
DateTime.$.formatDate(date);

// 格式化时间 'HH:mm:ss'
DateTime.$.formatTime(date);
```

## E.G. 🌰

```js
import DateTime from '@docker-es/date-time';

// DateTime 同 dayjs 用法。
DateTime('2024-07-31').format(); // 2024-07-31T00:00:00+08:00

// 设置中文日期
DateTime.locale('zh-cn');

// 格式化日期时间 'YYYY-MM-DD HH:mm:ss'
DateTime.$.formatDateTime('2024-07-31'); // 2024-07-31 00:00:00

// 格式化日期 'YYYY-MM-DD'
DateTime.$.formatDate('2024-07-31 12:59:59'); // 2024-07-31

// 格式化时间 'HH:mm:ss'
DateTime.$.formatTime('2024-07-31 12:59:59'); // 12:59:59
```
