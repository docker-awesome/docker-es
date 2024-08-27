# Formatter 常用函数工具

## API 🔊

```js
// 引用
import Formatter from '@docker-es/formatter';

// 方法

/** 格式化数字
 * @param {Object} data: { number, locales, options }
 * @returns {string} 带千分位的数值字符串
 */
Formatter.digit(data);

/** 格式化货币 (默认货币: ¥)
 * @param {Object} data: { number, locales, options }
 * @returns {string} 带货币符号的金额字符串
 */
Formatter.currency(data);
```

## E.G. 🌰

```js
import Formatter from '@docker-es/formatter';

// '123,456.79'
Formatter.digit({
  number: 123456.789
});

// '¥123,456.79'
Formatter.currency({
  number: 123456.789,
  locales: 'zh-CN'
});

// '$12,345.68'
Formatter.currency({
  number: 12345.678,
  locales: 'en-US',
  options: { currency: 'USD' }
});
```
