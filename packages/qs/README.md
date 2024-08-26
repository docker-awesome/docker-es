# Qs 查询字符串解析和字符串化

## API 🔊

```js
// 引用
import Qs from '@docker-es/qs';

// 方法

/** 字符串化
 * @param {Object} object 需要字符串化的对象数据
 * @param {Object} options 字符串化的可选配置
 * @returns {string} 字符串化后的数据
 */
Qs.stringify(object, options);

/** 查询字符串解析
 * @param {string} string 需要解析的查询字符串
 * @param {Object} options 解析的可选配置
 * @returns {Object} 解析后的数据
 */
Qs.parse(string, options);
```

## E.G. 🌰

```js
import Qs from '@docker-es/qs';

Qs.stringify({ a: 'b', c: 'd' }); // ?a=b&c=d
Qs.parse('?a=b&c=d'); // { a: 'b', c: 'd' }
```
